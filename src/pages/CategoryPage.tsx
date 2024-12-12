import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoGallery } from '../components/PhotoGallery';
import { categories, furnitureItems } from '../data/furniture';

export const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(c => c.id === id);
  const items = furnitureItems.filter(item => item.category === id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
        <p className="mt-2 text-gray-600">{category.description}</p>
      </div>
      <div className="space-y-12">
        {items.map(item => (
          <div key={item.id} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <PhotoGallery item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};