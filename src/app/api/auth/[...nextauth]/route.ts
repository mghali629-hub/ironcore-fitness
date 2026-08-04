import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_ic_athlete_882',
      name: 'Marcus Vance',
      email: 'm.vance@ironcore.gym',
      role: 'HEAD_COACH',
      membershipType: 'PRO_ATHLETE',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'ic_jwt_power_1102938',
      user: {
        id: 'usr_ic_athlete_882',
        email: body.email || 'athlete@ironcore.gym',
        membershipType: 'VIP_UNLIMITED',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid athlete credentials' }, { status: 400 });
  }
}
