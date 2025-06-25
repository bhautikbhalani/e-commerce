import React from 'react';
import StarRating from './StarRating';
import type { ProductCardProps } from '../utils/types';


const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">{product.title}</h3>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <StarRating rating={product.rating.rate} count={product.rating.count} />
                </div>
                <button
                    onClick={() => onViewDetails(product)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
