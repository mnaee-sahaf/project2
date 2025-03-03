// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';
// import { headers } from 'next/headers';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16'
// });

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = headers().get('stripe-signature')!;

//   try {
//     const event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );

//     if (event.type === 'checkout.session.completed') {
//       const session = event.data.object as Stripe.Checkout.Session;
      
//       // Update your database to grant access to the course
//       // Record the successful purchase
//     }

//     return NextResponse.json({ received: true });
//   } catch (error) {
//     console.error('Webhook error:', error);
//     return NextResponse.json(
//       { error: 'Webhook handler failed' },
//       { status: 400 }
//     );
//   }
// }