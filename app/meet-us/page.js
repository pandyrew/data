import React from 'react';
import Cards from '@/components/ui/cards';
import { leadershipData, internData, facultyData } from '@/data/leadership';

export default function MeetUs() {
  return (
    <div className="relative w-full min-h-screen bg-white mt-[100px]">
      <div className="w-full px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex justify-center w-full">
              <div className="backdrop-blur-sm bg-white/50 px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-4xl font-bold text-center">
                  2024-2025 Leadership
                </h1>
              </div>
            </div>
            <div className="mt-12">
              <Cards data={leadershipData} />
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-center w-full">
              <div className="backdrop-blur-sm bg-white/50 px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-4xl font-bold text-center">
                  Board Interns
                </h2>
              </div>
            </div>
            <div className="mt-12">
              <Cards data={internData} />
            </div>
          </div>

          <div className="mb-[150px]">
            <div className="flex justify-center w-full">
              <div className="backdrop-blur-sm bg-white/50 px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-4xl font-bold text-center">
                  Faculty Advisor
                </h2>
              </div>
            </div>
            <div className="mt-12">
              <Cards data={facultyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
