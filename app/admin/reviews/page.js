'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiStar, FiCheck, FiX } from 'react-icons/fi';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminReviews() {
  const { user, userData } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!user || userData?.role !== 'admin') return;

      try {
        const reviewsSnapshot = await getDocs(collection(db, 'reviews'));
        const reviewsData = reviewsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        reviewsData.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(0);
          const dateB = b.createdAt?.toDate?.() || new Date(0);
          return dateB - dateA;
        });
        
        setReviews(reviewsData);
        setFilteredReviews(reviewsData.filter(r => !r.approved));
        setLoadingReviews(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, [user, userData]);

  useEffect(() => {
    if (statusFilter === 'pending') {
      setFilteredReviews(reviews.filter(r => !r.approved));
    } else if (statusFilter === 'approved') {
      setFilteredReviews(reviews.filter(r => r.approved));
    } else {
      setFilteredReviews(reviews);
    }
  }, [statusFilter, reviews]);

  const approveReview = async (reviewId) => {
    try {
      const reviewRef = doc(db, 'reviews', reviewId);
      await updateDoc(reviewRef, {
        approved: true,
        approvedAt: new Date(),
        approvedBy: user.uid
      });

      setReviews(reviews.map(r =>
        r.id === reviewId ? { ...r, approved: true } : r
      ));

      alert('Review approved!');
    } catch (error) {
      console.error('Error approving review:', error);
      alert('Failed to approve review');
    }
  };

  const deleteReview = async (reviewId) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
      setReviews(reviews.filter(r => r.id !== reviewId));
      alert('Review deleted!');
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Failed to delete review');
    }
  };

  const statusOptions = [
    { value: 'pending', label: 'Pending', count: reviews.filter(r => !r.approved).length },
    { value: 'approved', label: 'Approved', count: reviews.filter(r => r.approved).length },
    { value: 'all', label: 'All Reviews', count: reviews.length },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={20}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <AdminWrapper>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Review Moderation</h1>
          <p className="text-gray-600 mt-2">
            {reviews.filter(r => !r.approved).length} pending reviews
          </p>
        </div>

        {loadingReviews ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading reviews...</p>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex gap-2">
                {statusOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setStatusFilter(option.value)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      statusFilter === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label} ({option.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {filteredReviews.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <FiStar className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 text-lg">No reviews in this category</p>
                </div>
              ) : (
                filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {renderStars(review.rating)}
                        <p className="text-sm text-gray-600 mt-2">
                          Review ID: {review.id}
                        </p>
                        <p className="text-sm text-gray-600">
                          Posted:{' '}
                          {review.createdAt?.toDate
                            ? review.createdAt.toDate().toLocaleString()
                            : 'N/A'}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          review.approved
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {review.approved ? 'Approved' : 'Pending'}
                      </span>
                    </div>

                    {review.serviceId && (
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">Service:</span> {review.serviceId}
                      </p>
                    )}

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{review.comment}</p>
                    </div>

                    <div className="flex gap-3">
                      {!review.approved && (
                        <button
                          onClick={() => approveReview(review.id)}
                          className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                          <FiCheck size={18} />
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => deleteReview(review.id)}
                        className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                      >
                        <FiX size={18} />
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </AdminWrapper>
  );
}
