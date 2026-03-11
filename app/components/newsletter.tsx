"use client";

const Newsletter = () => {
    return (
        <section className="bg-white py-32 text-center border-t border-gray-100">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-[#244d4d] text-4xl sm:text-5xl lg:text-[4rem] font-serif font-bold leading-[1.15] mb-8 animate-fade-in-up">
                    Subscribe our Newsletter to get <br className="hidden md:block"/> latest update and news
                </h2>
                <p className="text-gray-500 mb-14 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium animate-fade-in-up delay-200">
                    We recommend you to subscribe to our newsletter, enter your email below to get our latest updates, news, promotions and so on.
                </p>
                
                <form className="flex w-full max-w-lg mx-auto border-b-2 border-gray-200 pb-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        required
                        className="flex-1 bg-transparent outline-none text-[#244d4d] font-semibold text-lg placeholder-gray-400"
                    />
                    <button type="submit" className="text-gray-400 hover:text-[#244d4d] font-bold transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter
