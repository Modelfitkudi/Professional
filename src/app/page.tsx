import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden">
            {/* Navigation Bar */}
            <nav className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center z-50">
                <div className="text-xl md:text-2xl font-bold tracking-tight gradient-text">
                    KIIM JOI<span className="text-white font-light">EXCLUSIVE</span>
                </div>
                <div className="flex gap-6 items-center">
                    <Link href="#content" className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        Gallery
                    </Link>
                    <Link href="#pricing" className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        Access
                    </Link>
                    <Link
                        href="#join"
                        className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all hover-glow"
                    >
                        Sign In
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-32 flex flex-col items-center text-center z-10">
                <div className="inline-block py-1 px-3 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-8">
                    The Official Platform | Chandigarh 📍
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-tight">
                    Unlock the <br className="hidden md:block" />
                    <span className="gradient-text">Unfiltered Kiim Joi.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                    As you have seen me on <span className="text-pink-400 font-semibold hover:underline cursor-pointer">Stripchat</span>. Step into my private world for exclusive behind-the-scenes content you won't find anywhere else.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="px-8 py-4 rounded-full gradient-bg text-white font-bold tracking-wide hover-lift shadow-lg shadow-pink-500/25 w-full sm:w-auto">
                        Become a VIP Member
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                        View Free Teasers
                    </button>
                </div>

                {/* Decorative glass stats panel */}
                <div className="mt-16 md:mt-24 grid grid-cols-3 gap-2 md:gap-8 w-full max-w-3xl glass-panel p-4 md:p-8 hover-lift overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Exclusive</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Content</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-x border-white/10 px-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">24/7</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Chat</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Private</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Streams</span>
                    </div>
                </div>
            </section>

            {/* Content Gallery Section */}
            <section id="content" className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Latest Insights</h2>
                        <p className="text-gray-400 max-w-lg text-sm md:text-base">A sneak peek into the private feed. Unlock to view the full experience.</p>
                    </div>
                    <button className="w-full md:w-auto px-6 py-3 md:py-2 rounded-full border border-pink-500/30 text-pink-400 text-sm font-medium hover:bg-pink-500/10 transition-colors">
                        View All Content
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel hover-lift cursor-pointer">
                            {/* Image Placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url(/placeholder.png)' }}
                            />

                            {/* Blur Overlay */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-100 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col justify-center items-center p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Locked Content</h3>
                                <p className="text-sm text-gray-300">Unlock to view this exclusive post</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section WITHOUT Prices */}
            <section id="pricing" className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 mb-16 md:mb-24 z-10 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">Choose Your Access</h2>
                <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12 md:mb-16">Join the inner circle to get unrestricted access to the entire private gallery and member-only perks.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl relative">

                    {/* Background Glow for pricing cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 h-3/4 bg-pink-600/20 blur-[100px] rounded-full -z-10" />

                    {/* Standard Tier */}
                    <div className="glass-panel p-6 md:p-8 lg:p-12 flex flex-col hover-lift">
                        <h3 className="text-2xl font-bold mb-2 text-white">VIP Club</h3>
                        <p className="text-gray-400 mb-6 md:mb-8 md:h-12 text-sm md:text-base">Perfect for getting started and seeing what goes on behind closed doors.</p>
                        <div className="flex items-baseline mb-6 md:mb-8">
                            <span className="text-3xl md:text-4xl font-bold text-white">Monthly Access</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                            {['Full access to premium gallery', 'Weekly exclusive updates', 'Direct messaging access', 'Cancel anytime'].map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                                    <svg className="w-5 h-5 text-pink-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 md:py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all text-center">
                            Subscribe to VIP
                        </button>
                    </div>

                    {/* Lifetime Tier */}
                    <div className="glass-panel p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden transform lg:scale-105 border-pink-500/50 hover-lift hover-glow shadow-pink-500/10 shadow-lg md:shadow-2xl">
                        {/* Best value tag */}
                        <div className="absolute top-6 right-6 px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Best Value
                        </div>

                        <h3 className="text-2xl font-bold mb-2 gradient-text">Inner Circle</h3>
                        <p className="text-gray-400 mb-6 md:mb-8 md:h-12 text-sm md:text-base">The ultimate experience. Get lifetime access and personal interaction.</p>
                        <div className="flex items-baseline mb-6 md:mb-8">
                            <span className="text-3xl md:text-4xl font-bold text-white">Lifetime Access</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                            {['Forever access to ALL content', 'Priority 1-on-1 messaging', 'Monthly private live streams', 'Custom content requests', 'VIP discord role'].map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                                    <svg className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 md:py-4 rounded-xl gradient-bg text-white font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-pink-500/25">
                            Unlock All Access
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-white/10 py-8 md:py-12 px-4 md:px-6 mt-auto flex flex-col items-center glass-panel rounded-none z-10">
                <div className="text-2xl font-bold tracking-tight mb-6">
                    KIIM JOI<span className="text-white font-light">EXCLUSIVE</span>
                </div>
                <p className="text-gray-500 text-sm mb-8 text-center max-w-md">
                    Premium content. All rights reserved. Do not distribute or reproduce content.
                </p>
                <div className="flex gap-6 mb-8">
                    {['Stripchat', 'Instagram', 'Twitter', 'Terms', 'Privacy'].map((item) => (
                        <Link key={item} href="#" className="text-xs uppercase tracking-wider text-gray-500 hover:text-white transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>
                <p className="text-gray-600 text-xs text-center">
                    &copy; {new Date().getFullYear()} Kiim Joi Exclusive. Built for top fans.
                </p>
            </footer>
        </main>
    );
}
