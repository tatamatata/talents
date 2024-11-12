import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoachCard from './components/CoachCard';

const coaches = [
  {
    id: 1,
    name: "Sarah Mitchell",
    expertise: "Tech & Digital Talent Visa Specialist",
    rating: 4.9,
    experience: 8,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    price: 150
  },
  {
    id: 2,
    name: "James Chen",
    expertise: "Academic & Research Visa Expert",
    rating: 4.8,
    experience: 12,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    price: 175
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    expertise: "Arts & Culture Visa Consultant",
    rating: 5.0,
    experience: 10,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    price: 160
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Expert Visa Coaches</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced professionals ready to guide you through your UK Global Talent Visa journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map(coach => (
            <CoachCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;