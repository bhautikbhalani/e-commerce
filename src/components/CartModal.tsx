import React from 'react';
import { X } from 'lucide-react';
import type { CartModalProps } from '../utils/types';


const CartModal: React.FC<CartModalProps> = ({
    isOpen,
    onClose,
    cartItems,
    onUpdateQuantity,
    onRemoveItem,
}) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-contain bg-gray-100 rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                                            <p className="text-blue-600 font-bold">${item.price}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                                                }
                                                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded cursor-pointer"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded cursor-pointer"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => onRemoveItem(item.id)}
                                                className="ml-2 text-red-500 hover:text-red-700 cursor-pointer"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between items-center text-xl font-bold mb-4">
                                    <span>Total: ${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-200 cursor-pointer">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
