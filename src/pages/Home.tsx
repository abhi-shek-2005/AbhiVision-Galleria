import React from 'react';
import { CategoryGrid } from '../components/CategoryGrid';

export const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Discover Beautiful Furniture</h1>
        <p className="mt-2 text-lg text-gray-600">Explore our curated collection of furniture designs</p>
      </div>
      <CategoryGrid />
    </div>
  );
};