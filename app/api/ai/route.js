// app/api/ai/route.js
import { NextResponse } from 'next/server';
import { getReview } from '@/app/api/controllers/ai.controller';

export async function POST(request) {
  const { code } = await request.json();

  if (!code) {
    return NextResponse.json({ error: 'Code is required' }, { status: 400 });
  }

  try {
    const response = await getReview({ body: { code } });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}