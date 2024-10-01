import React from 'react';
import Cardsnew from '@/components/ui/cardsnew';
import Cardsnewtwo from '@/components/ui/cardsnewtwo';

export default function MeetUs() {
  return (
    <div className="w-full min-h-screen bg-white px-8 py-16 mt-[100px] border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Meet Our Leadership
        </h1>
        <div className="flex flex-wrap justify-between">
          <div className="w-[48%]">
            <Cardsnew />
          </div>
          <div className="w-[48%]">
            <Cardsnewtwo />
          </div>
        </div>
      </div>
    </div>
  );
}
