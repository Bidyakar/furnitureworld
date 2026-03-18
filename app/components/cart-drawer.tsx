'use client';
import React from 'react';
import Image from 'next/image';
import { useCart } from './cart-context';
import ScrollReveal from './scroll-reveal';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    return (
        <div 
            className={`fixed inset-0 z-[200] transition-all duration-700 ${isOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
            style={{ perspective: '1000px' }}
        >
            {/* Overlay */}
            <div 
                className={`absolute inset-0 bg-[#244d4d]/40 backdrop-blur-[12px] transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
                onClick={onClose}
            />
            
            <div className="absolute inset-y-0 right-0 max-w-full flex h-full">
                <div 
                    className={`w-screen sm:max-w-[460px] bg-white shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.15)] transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-gray-100 flex flex-col relative h-full`}
                >
                    <div className="h-full flex flex-col bg-white overflow-hidden">
                        {/* Header */}
                        <div className="px-4 sm:px-8 py-8 sm:py-10 border-b border-gray-100 flex items-center justify-between bg-[#244d4d] text-white relative flex-shrink-0">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#a58d71]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                            <div className="relative z-10 flex-1">
                                <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-[8px] sm:text-[9px] mb-2 block">Curated Selection</span>
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">Your Cart</h1>
                                <button 
                                    onClick={onClose}
                                    className="mt-2 text-[9px] sm:text-[10px] text-white/50 hover:text-[#a58d71] uppercase tracking-widest font-bold transition-colors flex items-center gap-1.5 group"
                                >
                                    <span className="group-hover:-translate-x-1 transition-transform">←</span> <span className="hidden sm:inline">Continue Shopping</span><span className="sm:hidden">Continue</span>
                                </button>
                            </div>
                            <button 
                                onClick={onClose} 
                                className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-all group active:scale-90 border border-white/10 ml-4 flex-shrink-0"
                            >
                                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items Area */}
                        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-10 scrollbar-hide bg-white overflow-x-hidden">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 sm:mb-8 relative group">
                                        <div className="absolute inset-0 bg-[#a58d71]/5 rounded-full scale-150 animate-pulse" />
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#244d4d]/20 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#244d4d] mb-4">Your cart is empty</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed max-w-[240px]">Explore our collections and find pieces that resonate with your style.</p>
                                    <button 
                                        onClick={onClose}
                                        className="px-6 py-3 bg-[#244d4d] text-white text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-[#a58d71] transition-all duration-500 rounded-sm"
                                    >
                                        Start Exploring
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-8 sm:space-y-12">
                                    {cartItems.map((item, idx) => (
                                        <div 
                                            key={item.id} 
                                            className="flex gap-4 sm:gap-6 group relative transition-all duration-500 hover:translate-x-1"
                                            style={{ transitionDelay: `${idx * 50}ms` }}
                                        >
                                            <div className="relative w-20 h-28 sm:w-24 sm:h-32 bg-gray-50 flex-shrink-0 overflow-hidden rounded-sm border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-500">
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    fill 
                                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                                                <div>
                                                    <div className="flex justify-between items-start gap-2 sm:gap-4 mb-1.5">
                                                        <h3 className="text-sm sm:text-[15px] font-bold font-serif text-[#1a1a1a] leading-tight group-hover:text-[#a58d71] transition-colors line-clamp-2">{item.name}</h3>
                                                        <button 
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-300 hover:text-red-500 transition-colors p-1 flex-shrink-0"
                                                            title="Remove item"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest font-black truncate">{item.category}</span>
                                                        <div className="w-1 h-1 bg-[#a58d71] rounded-full opacity-40 flex-shrink-0" />
                                                        <span className="text-[8px] sm:text-[9px] text-[#244d4d] font-bold tracking-widest uppercase opacity-70 whitespace-nowrap">Premium</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-end justify-between gap-3 mt-auto">
                                                    <div className="flex-shrink-0">
                                                        <p className="text-[10px] text-gray-400 mb-0.5 font-medium tracking-tight">Price</p>
                                                        <p className="text-md sm:text-lg text-[#244d4d] font-bold font-serif leading-none">{item.price}</p>
                                                    </div>
                                                    <div className="flex items-center border border-gray-100 rounded-sm bg-[#fcfcfc] overflow-hidden shadow-inner flex-shrink-0">
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-[#244d4d] hover:bg-white transition-all font-bold text-sm"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="w-6 sm:w-8 text-center text-xs sm:text-[13px] font-bold text-[#244d4d] border-x border-gray-50">{item.quantity}</span>
                                                        <button 
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-[#244d4d] hover:bg-white transition-all font-bold text-sm"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer Section */}
                        {cartItems.length > 0 && (
                            <div className="px-4 sm:px-8 py-6 sm:py-8 bg-gray-50/50 border-t border-gray-100 flex-shrink-0">
                                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    <div className="flex justify-between items-center text-gray-400">
                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Subtotal</span>
                                        <span className="text-xs sm:text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-400">
                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">Courier</span>
                                        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-[#a58d71] font-bold">Calculated on checkout</span>
                                    </div>
                                    <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-gray-100 flex justify-between items-baseline">
                                        <span className="text-[10px] sm:text-[11px] font-black text-[#244d4d] uppercase tracking-[0.3em]">Total</span>
                                        <span className="text-2xl sm:text-3xl font-bold font-serif text-[#244d4d]">${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="w-full py-4 sm:py-5 bg-[#244d4d] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] hover:bg-[#1a3838] transition-all duration-500 shadow-xl rounded-sm mb-4 sm:mb-6">
                                    Secure Checkout
                                </button>
                                <button 
                                    onClick={clearCart}
                                    className="w-full text-[8px] sm:text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] hover:text-red-500 transition-colors py-1 flex items-center justify-center gap-2 group"
                                >
                                    <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Clear Cart
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
