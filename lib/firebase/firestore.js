import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

// ========== BOOKINGS ==========

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const docRef = await addDoc(bookingsRef, {
      ...bookingData,
      status: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// Get booking by ID
export const getBooking = async (bookingId) => {
  try {
    const bookingDoc = await getDoc(doc(db, 'bookings', bookingId));
    if (bookingDoc.exists()) {
      return { data: { id: bookingDoc.id, ...bookingDoc.data() }, error: null };
    } else {
      return { data: null, error: 'Booking not found' };
    }
  } catch (error) {
    return { data: null, error: error.message };
  }
};

// Get all bookings for a user
export const getUserBookings = async (userId) => {
  try {
    const q = query(
      collection(db, 'bookings'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const bookings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: bookings, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// Update booking
export const updateBooking = async (bookingId, updates) => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Delete booking
export const deleteBooking = async (bookingId) => {
  try {
    await deleteDoc(doc(db, 'bookings', bookingId));
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ========== SERVICES ==========

// Create a new service (admin only)
export const createService = async (serviceData) => {
  try {
    const servicesRef = collection(db, 'services');
    const docRef = await addDoc(servicesRef, {
      ...serviceData,
      active: true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// Get all services
export const getAllServices = async () => {
  try {
    const q = query(
      collection(db, 'services'),
      where('active', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const services = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: services, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// Get service by ID
export const getService = async (serviceId) => {
  try {
    const serviceDoc = await getDoc(doc(db, 'services', serviceId));
    if (serviceDoc.exists()) {
      return { data: { id: serviceDoc.id, ...serviceDoc.data() }, error: null };
    } else {
      return { data: null, error: 'Service not found' };
    }
  } catch (error) {
    return { data: null, error: error.message };
  }
};

// Update service
export const updateService = async (serviceId, updates) => {
  try {
    const serviceRef = doc(db, 'services', serviceId);
    await updateDoc(serviceRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ========== CONTACT MESSAGES ==========

// Create a contact message
export const createContactMessage = async (messageData) => {
  try {
    const messagesRef = collection(db, 'contactMessages');
    const docRef = await addDoc(messagesRef, {
      ...messageData,
      status: 'unread',
      createdAt: serverTimestamp(),
    });
    
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// Get all contact messages (admin only)
export const getAllContactMessages = async () => {
  try {
    const q = query(
      collection(db, 'contactMessages'),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const messages = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: messages, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// Update contact message status
export const updateContactMessageStatus = async (messageId, status) => {
  try {
    const messageRef = doc(db, 'contactMessages', messageId);
    await updateDoc(messageRef, {
      status,
      updatedAt: serverTimestamp(),
    });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// ========== REVIEWS ==========

// Create a review
export const createReview = async (reviewData) => {
  try {
    const reviewsRef = collection(db, 'reviews');
    const docRef = await addDoc(reviewsRef, {
      ...reviewData,
      approved: false,
      createdAt: serverTimestamp(),
    });
    
    return { id: docRef.id, error: null };
  } catch (error) {
    return { id: null, error: error.message };
  }
};

// Get approved reviews
export const getApprovedReviews = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'reviews'),
      where('approved', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const reviews = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: reviews, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};

// Get reviews for a service
export const getServiceReviews = async (serviceId) => {
  try {
    const q = query(
      collection(db, 'reviews'),
      where('serviceId', '==', serviceId),
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const reviews = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return { data: reviews, error: null };
  } catch (error) {
    return { data: [], error: error.message };
  }
};
