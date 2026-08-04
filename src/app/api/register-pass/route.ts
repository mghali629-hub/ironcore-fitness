import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, planName } = body;

    const reg = await prisma.memberRegistration.create({
      data: {
        name,
        email,
        planName,
      },
    });

    return NextResponse.json({ success: true, registration: reg });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
