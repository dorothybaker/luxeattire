import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export async function POST(req) {
  const body = await req.json();

  const params = {
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: body.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item?.name,
          images: [item?.imageUrl],
        },
        unit_amount: item?.price * 100,
      },
      adjustable_quantity: { enabled: false },
      quantity: item?.quantity,
    })),
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cart`,
  };

  const session = await stripe.checkout.sessions.create(params);
  return NextResponse.json(session);
}
