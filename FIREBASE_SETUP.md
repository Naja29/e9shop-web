# Firebase Backend Setup Guide for E9Shop

This guide will help you integrate Firebase with your E9Shop Next.js application.

## 🔥 Firebase Project Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `e9shop` (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create project"

### Step 2: Register Your Web App

1. In Firebase Console, click the web icon (</>) to add a web app
2. Register app with nickname: "E9Shop Web"
3. Enable Firebase Hosting (optional)
4. Copy the Firebase configuration object - you'll need this!

### Step 3: Enable Authentication

1. In Firebase Console, go to **Authentication** → **Get Started**
2. Enable the following sign-in methods:
   - **Email/Password**: Click "Enable" and save
   - **Google**: Click "Enable" and save
   - **Facebook**: 
     - You'll need a Facebook App ID and App Secret
     - Get these from [Facebook Developers](https://developers.facebook.com/)
     - Create a new app → Get App ID and Secret
     - Add OAuth redirect URI from Firebase

### Step 4: Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database** → **Create Database**
2. Choose **Start in production mode** (we'll set up rules later)
3. Select your preferred location
4. Click "Enable"

### Step 5: Set Up Firebase Storage (Optional)

1. In Firebase Console, go to **Storage** → **Get Started**
2. Start in production mode
3. Click "Next" and "Done"

### Step 6: Create Service Account for Admin SDK

1. Go to **Project Settings** (gear icon) → **Service Accounts**
2. Click "Generate new private key"
3. Save the JSON file securely - NEVER commit this to Git!
4. You'll need the `project_id`, `client_email`, and `private_key` from this file

## 🔐 Environment Variables Setup

### Step 1: Create .env.local File

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.example`
3. Fill in the values from your Firebase configuration

### Step 2: Get Firebase Config Values

From the Firebase SDK config object you copied earlier:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx",
  measurementId: "G-XXXXXXXXXX"
};
```

Map these to your `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 3: Add Admin SDK Credentials

From the service account JSON file:

```env
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
```

**Important**: The private key should be in quotes and keep the `\n` characters.

## 📊 Firestore Database Structure

Your database will automatically create these collections:

### Users Collection (`users`)
```javascript
{
  uid: "user-uid",
  email: "user@example.com",
  name: "John Doe",
  phone: "010-1234-5678",
  photoURL: "https://...",
  createdAt: timestamp,
  updatedAt: timestamp,
  role: "user" // or "admin"
}
```

### Bookings Collection (`bookings`)
```javascript
{
  userId: "user-uid",
  serviceId: "service-id",
  serviceName: "Visa Consultation",
  status: "pending", // pending, confirmed, completed, cancelled
  details: {
    // Service-specific details
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Services Collection (`services`)
```javascript
{
  name: "Visa Consultation",
  description: "Professional visa consultation services",
  category: "visa",
  price: 50000,
  active: true,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Contact Messages Collection (`contactMessages`)
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "010-1234-5678",
  message: "I need help with...",
  status: "unread", // unread, read, responded
  createdAt: timestamp
}
```

### Reviews Collection (`reviews`)
```javascript
{
  userId: "user-uid",
  serviceId: "service-id",
  rating: 5,
  comment: "Great service!",
  approved: false,
  createdAt: timestamp
}
```

## 🔒 Firestore Security Rules

Go to **Firestore Database** → **Rules** and add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Bookings collection
    match /bookings/{bookingId} {
      allow read: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // Services collection
    match /services/{serviceId} {
      allow read: if true;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Contact messages
    match /contactMessages/{messageId} {
      allow create: if true;
      allow read, update: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Reviews
    match /reviews/{reviewId} {
      allow read: if resource.data.approved == true;
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

## 🚀 Running the Application

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 🔑 Features Implemented

### ✅ Authentication
- Email/Password signup and login
- Google OAuth login
- Facebook OAuth login
- Password reset
- User profile management
- Protected routes

### ✅ Database Operations
- User CRUD operations
- Booking management
- Service catalog
- Contact form submissions
- Review system

### ✅ API Routes
- `/api/auth/signup` - User registration
- `/api/auth/login` - User login
- `/api/bookings` - Create bookings
- `/api/contact` - Submit contact messages

### ✅ Context & State Management
- AuthContext for global authentication state
- User data persistence
- Loading states

## 📱 Using the App

### For Users:
1. **Sign Up**: Go to `/signup` and create an account
2. **Login**: Go to `/login` and sign in
3. **Browse Services**: View available services on home page
4. **Book Service**: Select a service and create a booking
5. **Contact**: Send messages via contact form

### For Admins:
1. **Manage Users**: View and manage user accounts
2. **Manage Bookings**: View and update booking statuses
3. **Manage Services**: Add/edit/delete services
4. **View Messages**: Read contact form submissions
5. **Approve Reviews**: Moderate user reviews

## 🔧 Customization

### Adding New Services
Use the Firestore console or create an admin panel to add services:

```javascript
import { createService } from '@/lib/firebase/firestore';

await createService({
  name: "New Service",
  description: "Service description",
  category: "category-name",
  price: 100000,
  features: ["Feature 1", "Feature 2"],
  icon: "🎯"
});
```

### Creating Admin Users
In Firestore console:
1. Go to `users` collection
2. Find the user document
3. Add/update field: `role: "admin"`

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

**Important**: Make sure to add all environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`

## 📞 Support

If you need help with Firebase setup:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🔐 Security Best Practices

1. **Never commit** `.env.local` or service account JSON to Git
2. **Always use** environment variables for sensitive data
3. **Set up** proper Firestore security rules
4. **Enable** Firebase App Check for production
5. **Use** HTTPS only in production
6. **Implement** rate limiting for API routes
7. **Validate** all user inputs on both client and server
8. **Keep** Firebase SDKs updated

---

**Your Firebase backend is now ready!** 🎉

Test the authentication by signing up a new user and logging in.
