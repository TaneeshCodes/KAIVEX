import React from 'react';
import { ArticleCard } from '@/components/ui/article-cards';

const articles = [
  {
    category: 'FOOD',
    title: 'Wake Up and Smell the Coffee',
    price: 0.99,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-shBKuu4CZPoxpdoQH7r6Xn5jcZlCRq.png&w=320&q=75',
    gradient: 'from-emerald-400/70 to-teal-600/70',
  },
  {
    category: 'ARCHITECTURE',
    title: 'The Brand New NASA Office',
    price: 0.19,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-2kErHQIkqMuToUFqQ4XSMhya9d6NqZ.png&w=320&q=75',
    gradient: 'from-slate-800/70 to-slate-900/70',
  },
  {
    category: 'TRAVEL',
    title: 'Experience the Saharan Sands',
    price: 2.29,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5FKJfLGlXSNveVVEHP0G4l2qyXGuLF.png&w=320&q=75',
    gradient: 'from-amber-400/70 to-orange-600/70',
  },
  {
    category: 'INTERIOR',
    title: '9 Air-Cleaning Plants Your Home Needs',
    price: 0.09,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-2lorEIIaeeDsHDW0gQw4MbmuyVqwXH.png&w=320&q=75',
    gradient: 'from-sky-300/70 to-cyan-400/70',
  },
  {
    category: 'FOOD',
    title: 'One Month Sugar Detox',
    price: 0.99,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-5RC9cCQElsr5G9D6fw15rohV86HSp0.png&w=320&q=75',
    gradient: 'from-rose-400/70 to-red-500/70',
  },
  {
    category: 'PHOTOGRAPHY',
    title: 'Shooting Minimal Instagram Photos',
    price: 0.29,
    imageUrl: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-qzcaGMjbD8jUVkF6Pr2zNhONiA3NCZ.png&w=320&q=75',
    gradient: 'from-blue-400/70 to-indigo-500/70',
  },
];

export default function ArticleCardGridDemo() {
  return (
    <div className="p-4 md:p-8 bg-[#05060a] text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Lifestyle.</h1>
        <p className="text-gray-400">
          The latest and best lifestyle articles selected by our editorial office.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            title={article.title}
            price={article.price}
            imageUrl={article.imageUrl}
            gradient={article.gradient}
          />
        ))}
      </div>
    </div>
  );
}
