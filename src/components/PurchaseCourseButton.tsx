'use client';

import { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

// Initialize Stripe outside component to avoid multiple instances
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PurchaseCourseButtonProps {
  courseId: string;
  courseTitle: string;
  price: number;
  className?: string;
}

export function PurchaseCourseButton({ 
  courseId, 
  courseTitle, 
  price,
  className 
}: PurchaseCourseButtonProps) {
  // Track loading state
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId,
          courseTitle,
          price,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { sessionId, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

    } catch (error) {
      console.error('Purchase error:', error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : 'Failed to process purchase. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePurchase} 
      disabled={loading}
      className={`
        inline-flex items-center justify-center px-6 py-3 
        text-base font-medium rounded-lg
        bg-indigo-600 text-white
        hover:bg-indigo-700 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors
        ${className || ''}
      `}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        `Purchase Course ($${price})`
      )}
    </button>
  );
}