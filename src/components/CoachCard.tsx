import React from 'react';
import { Star, Clock, Award } from 'lucide-react';

type Coach = {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  experience: number;
  imageUrl: string;
  price: number;
};

export default function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={coach.imageUrl}
          alt={coach.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">{coach.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{coach.name}</h3>
        <p className="text-gray-600 mt-1">{coach.expertise}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{coach.experience}+ years</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Certified</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">£{coach.price}</span>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}