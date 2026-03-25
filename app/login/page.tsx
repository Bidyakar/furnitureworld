'use client';
import Image from 'next/image';


export default function LoginPage() {
    return (
        <>
            <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center p-6 font-serif">
                <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side - Image */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                        <Image
                            src="/images/lr1.jpg"
                            alt="Cozy Living Room"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#244d4d] mb-2">Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}</h2>
                        <p className="text-gray-500 mb-8">Sign in to your account</p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58d71]"
                                    placeholder="[EMAIL_ADDRESS]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a58d71]"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="rounded text-[#a58d71] focus:ring-[#a58d71]" />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-[#a58d71] hover:underline">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#244d4d] text-white py-3 rounded-lg font-bold hover:bg-[#a58d71] transition-colors"
                            >
                                Sign In
                            </button>
                        </form>

                        <p className="text-center text-gray-500 mt-6">
                            Don't have an account? <a href="/register" className="text-[#a58d71] hover:underline font-medium">Register here</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}