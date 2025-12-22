'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AdminWrapper from '@/components/admin/AdminWrapper';
import { FiMail, FiCheckCircle, FiSearch } from 'react-icons/fi';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

export default function AdminMessages() {
  const { user, userData } = useAuth();
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!user || userData?.role !== 'admin') return;

      try {
        const messagesSnapshot = await getDocs(collection(db, 'contactMessages'));
        const messagesData = messagesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        messagesData.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(0);
          const dateB = b.createdAt?.toDate?.() || new Date(0);
          return dateB - dateA;
        });
        
        console.log('Fetched messages:', messagesData);
        
        setMessages(messagesData);
        setFilteredMessages(messagesData);
        setLoadingMessages(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoadingMessages(false);
      }
    };

    fetchMessages();
  }, [user, userData]);

  useEffect(() => {
    let filtered = messages;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(m => m.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(m =>
        m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.message?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredMessages(filtered);
  }, [searchTerm, statusFilter, messages]);

  const markAsRead = async (messageId) => {
    try {
      const messageRef = doc(db, 'contactMessages', messageId);
      await updateDoc(messageRef, {
        status: 'read',
        updatedAt: new Date()
      });

      setMessages(messages.map(m =>
        m.id === messageId ? { ...m, status: 'read' } : m
      ));
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    if (message.status === 'unread') {
      markAsRead(message.id);
    }
  };

  const statusOptions = [
    { value: 'all', label: 'All Messages', count: messages.length },
    { value: 'unread', label: 'Unread', count: messages.filter(m => m.status === 'unread').length },
    { value: 'read', label: 'Read', count: messages.filter(m => m.status === 'read').length },
  ];

  return (
    <AdminWrapper>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-600 mt-2">
            {messages.filter(m => m.status === 'unread').length} unread messages
          </p>
        </div>

        {loadingMessages ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading messages...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex gap-2 mb-4">
                    {statusOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => setStatusFilter(option.value)}
                        className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                          statusFilter === option.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option.label} ({option.count})
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
                  {filteredMessages.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No messages found
                    </div>
                  ) : (
                    filteredMessages.map((message) => (
                      <button
                        key={message.id}
                        onClick={() => handleMessageClick(message)}
                        className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                          selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                        } ${
                          message.status === 'unread' ? 'font-semibold' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 ${message.status === 'unread' ? 'text-blue-600' : 'text-gray-400'}`}>
                            {message.status === 'unread' ? <FiMail size={20} /> : <FiCheckCircle size={20} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 truncate">{message.name}</p>
                            <p className="text-sm text-gray-600 truncate">{message.email}</p>
                            <p className="text-sm text-gray-500 truncate mt-1">
                              {message.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {message.createdAt?.toDate
                                ? message.createdAt.toDate().toLocaleString()
                                : 'N/A'}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {selectedMessage ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedMessage.name}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          selectedMessage.status === 'unread'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {selectedMessage.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${selectedMessage.email}`} className="text-blue-600 hover:underline">
                          {selectedMessage.email}
                        </a>
                      </p>
                      {selectedMessage.phone && (
                        <p>
                          <span className="font-semibold">Phone:</span>{' '}
                          <a href={`tel:${selectedMessage.phone}`} className="text-blue-600 hover:underline">
                            {selectedMessage.phone}
                          </a>
                        </p>
                      )}
                      {selectedMessage.service && (
                        <p>
                          <span className="font-semibold">Service:</span> {selectedMessage.service}
                        </p>
                      )}
                      <p>
                        <span className="font-semibold">Received:</span>{' '}
                        {selectedMessage.createdAt?.toDate
                          ? selectedMessage.createdAt.toDate().toLocaleString()
                          : 'N/A'}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Message:</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a href={`mailto:${selectedMessage.email}?subject=Re: Your message to E9Shop`} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
                      Reply via Email
                    </a>
                    {selectedMessage.phone && (
                      <a href={`tel:${selectedMessage.phone}`} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold">
                        Call
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <FiMail className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 text-lg">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminWrapper>
  );
}