import React from 'react';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Journey to UK Talent Visa Success Starts Here
            </h1>
            <p className="mt-6 text-lg text-indigo-100">
              Connect with experienced visa coaches who will guide you through every step
              of your UK Global Talent Visa application process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
                Find Your Coach
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-indigo-300" />
                <div>
                  <div className="font-semibold">95%+</div>
                  <div className="text-sm text-indigo-200">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-8 h-8 text-indigo-300" />
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-sm text-indigo-200">Clients Helped</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-indigo-300" />
                <div>
                  <div className="font-semibold">100%</div>
                  <div className="text-sm text-indigo-200">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
              alt="Professional meeting"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}