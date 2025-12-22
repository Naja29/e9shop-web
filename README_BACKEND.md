# E9Shop Firebase Backend Integration

Complete Firebase backend integration for your E9Shop Next.js application.

## 🚀 Quick Start

### 1. Install Dependencies (Already done ✅)
Firebase and Firebase Admin are already in your package.json.

### 2. Set Up Firebase Project
Follow the detailed guide in `FIREBASE_SETUP.md`

### 3. Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Fill in your Firebase credentials from Firebase Console
3. **Important**: Never commit `.env.local` to Git!

### 4. Run the Application
```bash
npm run dev
```

## 📁 File Structure

```
e9shop-web/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup/route.js    # User registration endpoint
│   │   │   └── login/route.js     # User login endpoint
│   │   ├── bookings/route.js      # Booking creation endpoint
│   │   └── contact/route.js       # Contact form endpoint
│   ├── dashboard/page.js          # User dashboard
│   ├── login/page.js              # Login page (Firebase integrated)
│   └── signup/page.js             # Signup page (Firebase integrated)
├── contexts/
│   └── AuthContext.js             # Global auth state management
├── lib/
│   ├── firebase/
│   │   ├── config.js              # Firebase client config
│   │   ├── admin.js               # Firebase Admin SDK config
│   │   ├── auth.js                # Authentication functions
│   │   └── firestore.js           # Database operations
│   └── constants.js
├── .env.local.example             # Environment variables template
├── FIREBASE_SETUP.md              # Detailed setup guide
└── README_BACKEND.md              # This file
```

## 🔥 Features Implemented

### ✅ Authentication
- **Email/Password**: Sign up and login with email
- **Google OAuth**: One-click Google sign in
- **Facebook OAuth**: One-click Facebook sign in
- **Password Reset**: Send password reset emails
- **Session Management**: Persistent login sessions
- **User Profiles**: Store additional user data in Firestore

### ✅ Database (Firestore)
- **Users Collection**: Store user profiles and metadata
- **Bookings Collection**: Manage service bookings
- **Services Collection**: Service catalog
- **Contact Messages**: Store contact form submissions
- **Reviews Collection**: User reviews and ratings

### ✅ API Routes
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Authenticate user
- `POST /api/bookings` - Create service booking (requires auth)
- `POST /api/contact` - Submit contact message

### ✅ Protected Routes
- `/dashboard` - User dashboard (login required)
- `/profile/edit` - Edit profile (login required)

## 🔑 How to Use

### User Authentication

#### Sign Up
```javascript
import { signUp } from '@/lib/firebase/auth';

const { user, error } = await signUp(email, password, { 
  name: 'John Doe',
  phone: '010-1234-5678'
});
```

#### Login
```javascript
import { signIn } from '@/lib/firebase/auth';

const { user, error } = await signIn(email, password);
```

#### Google Sign In
```javascript
import { signInWithGoogle } from '@/lib/firebase/auth';

const { user, error } = await signInWithGoogle();
```

#### Logout
```javascript
import { logOut } from '@/lib/firebase/auth';

await logOut();
```

### Database Operations

#### Create Booking
```javascript
import { createBooking } from '@/lib/firebase/firestore';

const { id, error } = await createBooking({
  userId: user.uid,
  serviceId: 'visa-consultation',
  serviceName: 'Visa Consultation',
  details: {
    preferredDate: '2025-01-15',
    message: 'Need help with student visa'
  }
});
```

#### Get User Bookings
```javascript
import { getUserBookings } from '@/lib/firebase/firestore';

const { data, error } = await getUserBookings(userId);
```

#### Submit Contact Message
```javascript
import { createContactMessage } from '@/lib/firebase/firestore';

const { id, error } = await createContactMessage({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '010-1234-5678',
  message: 'I need help with...'
});
```

### Using Auth Context

```javascript
'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function MyComponent() {
  const { user, userData, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  
  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h1>Welcome {userData?.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

## 🎯 Next Steps

### 1. Set Up Your Firebase Project
- Create a Firebase project
- Enable authentication methods
- Set up Firestore database
- Configure environment variables

### 2. Update Header Component
Add user profile link and logout button to the header:
```javascript
const { user } = useAuth();

{user ? (
  <Link href="/dashboard">Dashboard</Link>
) : (
  <Link href="/login">Login</Link>
)}
```

### 3. Add Booking Functionality
Integrate booking creation in your service pages:
```javascript
const handleBooking = async () => {
  const { id, error } = await createBooking({
    userId: user.uid,
    serviceId: 'service-id',
    serviceName: 'Service Name',
    // ... other details
  });
  
  if (!error) {
    router.push('/dashboard');
  }
};
```

### 4. Update Contact Form
Make the contact form functional:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const { id, error } = await createContactMessage({
    name, email, phone, message
  });
  // Show success message
};
```

### 5. Create Admin Panel (Optional)
Build an admin dashboard to:
- Manage bookings
- View contact messages
- Moderate reviews
- Add/edit services

## 🔒 Security Checklist

- [ ] Environment variables configured
- [ ] `.env.local` added to `.gitignore`
- [ ] Firestore security rules deployed
- [ ] Firebase App Check enabled (production)
- [ ] HTTPS enforced (production)
- [ ] Rate limiting implemented
- [ ] Input validation on all forms
- [ ] Admin roles configured properly

## 📱 Testing

### Test Authentication
1. Go to `/signup`
2. Create a test account
3. Verify email confirmation (if enabled)
4. Login at `/login`
5. Test Google/Facebook login
6. Visit `/dashboard` to see your profile

### Test Bookings
1. Login to your account
2. Browse services
3. Create a booking
4. Check Firebase Console → Firestore → bookings collection

### Test Contact Form
1. Go to `/contact`
2. Submit a message
3. Check Firebase Console → Firestore → contactMessages collection

## 🐛 Troubleshooting

### Authentication Errors
- Check Firebase console → Authentication is enabled
- Verify environment variables are correct
- Ensure OAuth providers are configured (Google/Facebook)

### Database Errors
- Check Firestore security rules
- Verify user is authenticated for protected operations
- Check Firebase Console for error logs

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for TypeScript errors if using TS

## 📚 Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Authentication](https://firebase.google.com/docs/auth)

## 🎉 You're All Set!

Your Firebase backend is fully integrated and ready to use. Start building amazing features for E9Shop!

For detailed Firebase setup instructions, see `FIREBASE_SETUP.md`.

---

**Need Help?**
- Check the FIREBASE_SETUP.md guide
- Review the code comments in the lib/firebase folder
- Test the authentication flow on `/login` and `/signup`
