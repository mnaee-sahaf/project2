'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Here you would typically:
    // 1. Verify the purchase with your backend
    // 2. Update user's access to the course
    // 3. Record the transaction
  }, [sessionId]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. You now have access to the course.
      </p>
      <button
        onClick={() => router.push('/dashboard')}
        className="text-indigo-600 hover:text-indigo-700"
      >
        Return to Dashboard
      </button>
    </div>
  );
}