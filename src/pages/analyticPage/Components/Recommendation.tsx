import React from 'react';

interface RecommendationBadge {
    recommendationText: string;
}

const RecommendationBadge = ({ recommendationText } : RecommendationBadge) => {
  return (
    <div className="bg-green-500 border p-2 rounded-lg">
    <div className="flex items-center justify-center text-white">
        <div className="bg-white text-green-400 rounded-full h-6 w-6 flex items-center justify-center mr-2">
        </div>
        <p>{recommendationText}</p>
    </div>
    </div>
  );
};

export default RecommendationBadge;