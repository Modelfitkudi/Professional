import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden">
            {/* Navigation Bar */}
            <nav className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center z-50">
                <div className="text-xl md:text-2xl font-bold tracking-tight gradient-text">
                    FELICITY ADAMS<span className="text-white font-light">EXCLUSIVE</span>
                </div>
                <div className="flex gap-6 items-center">
                    <Link href="#content" className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        Galería
                    </Link>
                    <Link href="#pricing" className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        Acceso
                    </Link>
                    <Link
                        href="#join"
                        className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all hover-glow"
                    >
                        Iniciar Sesión
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-32 flex flex-col items-center text-center z-10">
                <div className="inline-block py-1 px-3 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase mb-8">
                    La Plataforma Oficial | Chandigarh 📍
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-tight">
                    Desbloquea a <br className="hidden md:block" />
                    <span className="gradient-text">Felicity Adams Sin Filtros.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                    Como me has visto en <span className="text-pink-400 font-semibold hover:underline cursor-pointer">Stripchat</span>. Entra en mi mundo privado para obtener contenido exclusivo detrás de escena que no encontrarás en ningún otro lugar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="px-8 py-4 rounded-full gradient-bg text-white font-bold tracking-wide hover-lift shadow-lg shadow-pink-500/25 w-full sm:w-auto">
                        Conviértete en Miembro VIP
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                        Ver Avances Gratuitos
                    </button>
                </div>

                {/* Decorative glass stats panel */}
                <div className="mt-16 md:mt-24 grid grid-cols-3 gap-2 md:gap-8 w-full max-w-3xl glass-panel p-4 md:p-8 hover-lift overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Exclusivo</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Contenido</span>
                    </div>
                    <div className="flex flex-col items-center text-center border-x border-white/10 px-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">24/7</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Chat</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">Privadas</span>
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">Transmisiones</span>
                    </div>
                </div>
            </section>

            {/* Content Gallery Section */}
            <section id="content" className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Últimas Publicaciones</h2>
                        <p className="text-gray-400 max-w-lg text-sm md:text-base">Un adelanto del feed privado. Desbloquea para ver la experiencia completa.</p>
                    </div>
                    <button className="w-full md:w-auto px-6 py-3 md:py-2 rounded-full border border-pink-500/30 text-pink-400 text-sm font-medium hover:bg-pink-500/10 transition-colors">
                        Ver Todo el Contenido
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
                                <h3 className="text-white font-bold text-lg mb-2">Contenido Bloqueado</h3>
                                <p className="text-sm text-gray-300">Desbloquea para ver esta publicación exclusiva</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section WITHOUT Prices */}
            <section id="pricing" className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 mb-16 md:mb-24 z-10 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6">Elige tu Acceso</h2>
                <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-12 md:mb-16">Únete al círculo íntimo para obtener acceso sin restricciones a toda la galería privada y beneficios exclusivos para miembros.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl relative">

                    {/* Background Glow for pricing cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 h-3/4 bg-pink-600/20 blur-[100px] rounded-full -z-10" />

                    {/* Standard Tier */}
                    <div className="glass-panel p-6 md:p-8 lg:p-12 flex flex-col hover-lift">
                        <h3 className="text-2xl font-bold mb-2 text-white">Club VIP</h3>
                        <p className="text-gray-400 mb-6 md:mb-8 md:h-12 text-sm md:text-base">Perfecto para comenzar y ver lo que pasa a puerta cerrada.</p>
                        <div className="flex items-baseline mb-6 md:mb-8">
                            <span className="text-3xl md:text-4xl font-bold text-white">Acceso Mensual</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                            {['Acceso completo a la galería premium', 'Actualizaciones exclusivas semanales', 'Acceso a mensajes directos', 'Cancela en cualquier momento'].map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                                    <svg className="w-5 h-5 text-pink-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 md:py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all text-center">
                            Suscríbete al VIP
                        </button>
                    </div>

                    {/* Lifetime Tier */}
                    <div className="glass-panel p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden transform lg:scale-105 border-pink-500/50 hover-lift hover-glow shadow-pink-500/10 shadow-lg md:shadow-2xl">
                        {/* Best value tag */}
                        <div className="absolute top-6 right-6 px-3 py-1 bg-pink-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Mejor Valor
                        </div>

                        <h3 className="text-2xl font-bold mb-2 gradient-text">Círculo Íntimo</h3>
                        <p className="text-gray-400 mb-6 md:mb-8 md:h-12 text-sm md:text-base">La experiencia definitiva. Obtén acceso de por vida e interacción personal.</p>
                        <div className="flex items-baseline mb-6 md:mb-8">
                            <span className="text-3xl md:text-4xl font-bold text-white">Acceso de por Vida</span>
                        </div>

                        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                            {['Acceso para siempre a TODO el contenido', 'Mensajería 1 a 1 prioritaria', 'Transmisiones privadas en vivo mensuales', 'Solicitudes de contenido personalizado', 'Rol VIP en Discord'].map((feature, i) => (
                                <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                                    <svg className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 md:py-4 rounded-xl gradient-bg text-white font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-pink-500/25">
                            Desbloquear Todo el Acceso
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-white/10 py-8 md:py-12 px-4 md:px-6 mt-auto flex flex-col items-center glass-panel rounded-none z-10">
                <div className="text-2xl font-bold tracking-tight mb-6">
                    FELICITY ADAMS<span className="text-white font-light">EXCLUSIVE</span>
                </div>
                <p className="text-gray-500 text-sm mb-8 text-center max-w-md">
                    Contenido premium. Todos los derechos reservados. No distribuyas ni reproduzcas el contenido.
                </p>
                <div className="flex gap-6 mb-8">
                    {['Stripchat', 'Instagram', 'Twitter', 'Términos', 'Privacidad'].map((item) => (
                        <Link key={item} href="#" className="text-xs uppercase tracking-wider text-gray-500 hover:text-white transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>
                <p className="text-gray-600 text-xs text-center">
                    &copy; {new Date().getFullYear()} Felicity Adams Exclusive. Creado para los mejores fans.
                </p>
            </footer>
        </main>
    );
}
