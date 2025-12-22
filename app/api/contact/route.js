import { NextResponse } from 'next/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export async function POST(request) {
  try {
    const data = await request.json();
    
    console.log('Received contact form data:', data);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      service: data.service || '',
      message: data.message,
      status: 'unread',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    console.log('Message saved with ID:', docRef.id);

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to save message', details: error.message },
      { status: 500 }
    );
  }
}