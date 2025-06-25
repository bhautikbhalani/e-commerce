import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import StarRating from './StarRating';
import type { ProductDetailModalProps } from '../utils/types';


const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
    product,
    isOpen,
    onClose,
    onAddToCart,
}) => {
    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                {product.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-3xl font-bold text-blue-600">
                                    ${product.price}
                                </span>
                                <StarRating
                                    rating={product.rating.rate}
                                    count={product.rating.count}
                                />
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
                                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                                    {product.category}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            <button
                                onClick={() => onAddToCart(product)}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
