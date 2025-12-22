import { NextResponse } from 'next/server';
import { signIn } from '@/lib/firebase/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Sign in user
    const { user, error } = await signIn(email, password);

    if (error) {
      return NextResponse.json(
        { error },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
