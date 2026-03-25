'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '../components/scroll-reveal';
import { useCart } from '../components/cart-context';


export default function CheckoutPage() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [method, setMethod] = useState<'visa' | 'mastercard' | 'paypal'>('visa');
    const { cartItems, totalPrice, clearCart } = useCart();

    const themes = {
        visa: {
            primary: '#244d4d',
            accent: '#a58d71',
            inputBg: 'bg-[#f8f9fa]',
            button: 'bg-[#244d4d] hover:bg-[#a58d71]',
            border: 'border-[#244d4d]/10'
        },
        mastercard: {
            primary: '#eb001b',
            accent: '#ff5f00',
            inputBg: 'bg-[#fff5f5]',
            button: 'bg-[#eb001b] hover:bg-[#ff5f00]',
            border: 'border-[#eb001b]/10'
        },
        paypal: {
            primary: '#003087',
            accent: '#009cde',
            inputBg: 'bg-[#f5faff]',
            button: 'bg-[#0070ba] hover:bg-[#003087]',
            border: 'border-[#003087]/10'
        }
    };

    const currentTheme = themes[method];

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsSuccess(true);
            setIsProcessing(false);
            clearCart();
        }, 2000);
    };

    return (
        <div className="bg-[#f8f7f4] min-h-screen py-24 px-6 font-serif transition-colors duration-500">
            {isSuccess && (
                <div className="fixed inset-0 z-[100] bg-[#244d4d] flex items-center justify-center p-6">
                    <div className="max-w-xl w-full text-center text-white flex flex-col items-center gap-8">
                        <div className="w-24 h-24 border-2 border-yellow-400 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold italic tracking-tight">Payment <span className="text-yellow-400">Successful!</span></h2>
                        <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed">
                            Your artisan collection is now being meticulously prepared for delivery. A confirmation email has been sent to your inbox.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row gap-6 w-full max-w-sm mx-auto">
                            <Link href="/" className="flex-1 py-5 bg-white text-[#244d4d] text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 transition-all">Go to Home</Link>
                            <Link href="/products" className="flex-1 py-5 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Return to Catalog</Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-[1150px] mx-auto text-center mb-16">
                <ScrollReveal>
                    <span className="text-[#a58d71] uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Secure Checkout</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#244d4d] leading-tight mb-8 font-serif">Completing your <span className="italic">Collection</span></h1>
                    <div className="h-[0.5px] bg-[#244d4d]/20 mx-auto w-1/3" />
                </ScrollReveal>
            </div>

            <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Order Summary */}
                <div className="order-2 lg:order-1 flex flex-col gap-10 lg:sticky lg:top-24">
                    <div className={`bg-white p-10 rounded-sm shadow-xl border -2 transition-all duration-500 ${currentTheme.border} border-gray-100 flex flex-col gap-8`}>
                        <h2 className="text-2xl font-bold text-[#244d4d] font-serif">Order Summary</h2>

                        {cartItems.length === 0 ? (
                            <div className="text-center py-8 text-gray-400 font-sans text-sm">
                                Your cart is empty.{" "}
                                <Link href="/products" className="text-[#a58d71] hover:underline">Browse products</Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                        <div className="flex gap-4 items-center">
                                            <div className="relative w-20 h-20 bg-gray-50 rounded-sm overflow-hidden flex-shrink-0 border border-gray-100">
                                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="font-bold text-[#1a1a1a] text-sm leading-tight">{item.name}</h4>
                                                <span className="text-[10px] text-gray-400 font-sans tracking-widest uppercase mt-1">Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="font-bold text-[#a58d71] text-sm">
                                                ${(parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className={`pt-8 border-t border-gray-100 flex flex-col gap-4 font-sans`}>
                            <div className="flex justify-between text-gray-500 text-xs font-bold uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 text-xs font-bold uppercase tracking-widest">
                                <span>Shipping</span>
                                <span className="text-[#244d4d] font-bold">Complimentary</span>
                            </div>
                            <div className="flex justify-between text-2xl font-bold text-[#244d4d] pt-4 font-serif">
                                <span>Total Payable</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        SSL Secured Artisan Transaction
                    </div>
                </div>

                {/* Payment Form */}
                <div className="order-1 lg:order-2 flex flex-col gap-10">
                    <div className={`bg-white p-10 rounded-sm shadow-2xl border transition-all duration-500 ${currentTheme.border} border-gray-100`}>
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl font-bold text-[#244d4d] font-serif italic">Payment Details</h2>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${method === 'visa' ? 'bg-[#244d4d]' : method === 'mastercard' ? 'bg-[#eb001b]' : 'bg-[#0070ba]'}`} />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 capitalize">{method} Mode</span>
                            </div>
                        </div>

                        <form onSubmit={handlePayment} className="space-y-8">
                            {method !== 'paypal' ? (
                                <div className="space-y-6 font-sans uppercase tracking-[0.2em] text-[9px] font-bold">
                                    <div className="space-y-2">
                                        <label className="text-gray-400">Cardholder Name</label>
                                        <input required type="text" className={`w-full transition-colors duration-500 ${currentTheme.inputBg} border border-gray-50 px-6 py-5 text-sm font-medium text-[#244d4d] focus:outline-none focus:border-[#a58d71]`} placeholder="SARAH MITCHELL" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400">Card Number</label>
                                        <div className="relative">
                                            <input required type="text" className={`w-full transition-colors duration-500 ${currentTheme.inputBg} border border-gray-50 px-6 py-5 text-sm font-medium text-[#244d4d] focus:outline-none focus:border-[#a58d71]`} placeholder="**** **** **** 4482" />
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 w-8">
                                                <Image
                                                    src={method === 'visa' ? "https://www.vectorlogo.zone/logos/visa/visa-ar21.svg" : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"}
                                                    alt="Card Type"
                                                    width={32}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-gray-400">Expiry Date</label>
                                            <input required type="text" className={`w-full transition-colors duration-500 ${currentTheme.inputBg} border border-gray-50 px-6 py-5 text-sm font-medium text-[#244d4d] focus:outline-none focus:border-[#a58d71]`} placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-gray-400">CVV Code</label>
                                            <input required type="password" className={`w-full transition-colors duration-500 ${currentTheme.inputBg} border border-gray-50 px-6 py-5 text-sm font-medium text-[#244d4d] focus:outline-none focus:border-[#a58d71]`} placeholder="***" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`py-12 px-8 text-center rounded-sm transition-colors duration-500 ${currentTheme.inputBg} border ${currentTheme.border} border-dashed`}>
                                    <div className="w-16 h-16 mx-auto mb-6 relative">
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" fill className="object-contain" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#003087] mb-2 font-serif">PayPal Fast Checkout</h4>
                                    <p className="text-sm text-gray-500 font-sans mb-8">You will be redirected to PayPal to complete your secure payment.</p>
                                    <div className="space-y-2 text-left max-w-xs mx-auto">
                                        <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 font-sans ml-1">PayPal Email</label>
                                        <input required type="email" className="w-full bg-white border border-gray-100 px-6 py-4 text-sm font-medium text-[#244d4d] focus:outline-none" placeholder="sarah.m@example.com" />
                                    </div>
                                </div>
                            )}

                            <button
                                disabled={isProcessing || cartItems.length === 0}
                                className={`w-full py-6 text-white font-bold uppercase tracking-[0.4em] text-[11px] shadow-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]
                                    ${isProcessing || cartItems.length === 0 ? 'bg-gray-300 cursor-not-allowed' : currentTheme.button}`}
                            >
                                {isProcessing ? 'Synchronizing Transaction...' : method === 'paypal' ? 'Proceed with PayPal' : `Authorize $${totalPrice.toFixed(2)}`}
                            </button>

                            <div className="text-center">
                                <Link href="/products" className="text-[10px] font-bold text-gray-400 hover:text-[#244d4d] transition-colors uppercase tracking-[0.3em]">
                                    ← Return to Catalog
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center items-center gap-12 pt-4">
                        <button
                            onClick={() => setMethod('visa')}
                            className={`relative h-8 w-16 transition-all duration-500 ${method === 'visa' ? 'scale-125 opacity-100' : 'opacity-30 grayscale hover:opacity-50'}`}
                        >
                            <Image src="https://www.vectorlogo.zone/logos/visa/visa-ar21.svg" alt="Visa" fill className="object-contain" />
                        </button>
                        <button
                            onClick={() => setMethod('mastercard')}
                            className={`relative h-10 w-16 transition-all duration-500 ${method === 'mastercard' ? 'scale-125 opacity-100' : 'opacity-30 grayscale hover:opacity-50'}`}
                        >
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" fill className="object-contain" />
                        </button>
                        <button
                            onClick={() => setMethod('paypal')}
                            className={`relative h-8 w-20 transition-all duration-500 ${method === 'paypal' ? 'scale-125 opacity-100' : 'opacity-30 grayscale hover:opacity-50'}`}
                        >
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" fill className="object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}