'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import { FallingPetals } from './components/FallingPetals';
// Image will be loaded from public directory

export default function App() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div className="relative overflow-x-hidden bg-[#E8DFF8]">
      {/* Hero Section */}
      <motion.section
        style={shouldReduceMotion ? {} : { opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/a6b144677b0617f4958b0a653ba5e28c16d47159.png"
            alt="Wedding background"
            fill
            className="object-cover object-[center_65%]"
            priority
          />
        </div>
        
        {/* Gradient Overlay for Seamless Blend */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(255, 249, 245, 0.4) 0%,
                rgba(255, 249, 245, 0.5) 20%,
                rgba(232, 223, 248, 0.7) 70%,
                rgba(232, 223, 248, 0.95) 90%,
                rgba(232, 223, 248, 1) 100%
              )
            `,
          }}
        />
        
        <FallingPetals color="#A78BCC" count={15} />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="flex items-center justify-center flex-wrap gap-2 sm:gap-4" style={{ 
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.8), 0 4px 30px rgba(167, 139, 204, 0.3)',
              color: '#6B3FA0'
            }}>
              <span>Deekshitha</span>
              <span className="text-gray-600 font-semibold">weds</span>
              <span>Harish</span>
            </h1>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto mb-12 sm:mb-16 italic px-4"
            style={{ 
              color: '#4A2470',
              textShadow: '0 1px 10px rgba(255, 255, 255, 0.8)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Together with our families, we invite you to celebrate our wedding.
          </motion.p>

          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-[#6B3FA0]" />
          </motion.div>
        </div>
      </motion.section>

      {/* Wedding Details Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <FallingPetals color="#A78BCC" count={15} />
        
        <div className="max-w-4xl mx-auto">
          {/* Floral Border Top */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <svg width="280" height="60" viewBox="0 0 300 60" className="opacity-70 max-w-full" aria-hidden="true">
              <circle cx="150" cy="30" r="8" fill="#6B3FA0" opacity="0.4" />
              <circle cx="130" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="170" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="110" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <circle cx="190" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <path d="M90,40 Q150,20 210,40" fill="none" stroke="#6B3FA0" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10 border border-[#6B3FA0]/20"
          >
            <h2 className="text-[#6B3FA0] text-center mb-6 sm:mb-8">Wedding Ceremony</h2>
            
            <div className="text-center mb-6 sm:mb-8 space-y-2">
              <div className="inline-block bg-gradient-to-r from-[#6B3FA0]/10 to-[#A78BCC]/10 px-6 py-3 rounded-lg border border-[#6B3FA0]/20">
                <p className="text-[#6B3FA0] text-xl sm:text-2xl" style={{ fontWeight: 600 }}>November 7, 2025</p>
                <p className="text-[#6B3FA0] mt-1" style={{ fontWeight: 500 }}>10:00 AM – 10:38 AM</p>
              </div>
            </div>

            <div className="text-center mb-6 space-y-2 text-[#2B2B2B]/80">
              <p className="italic opacity-75">Hosted by</p>
              <div className="space-y-1">
                <p>Mr. Narahari Boda & Mrs. Jyothi Boda</p>
                <p className="opacity-60">and</p>
                <p>Mr. G. Suresh Kumar & Mrs. P. Haripriya</p>
              </div>
            </div>

            <div className="flex items-start justify-center gap-3 text-[#2B2B2B]">
              <MapPin className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-1" />
              <div className="text-center">
                <button
                  onClick={() => window.open('https://maps.google.com/?q=SMB+Function+Hall+Birkoor+Road+Banswada', '_blank')}
                  className="text-[#6B3FA0] hover:text-[#5A338A] underline decoration-dotted underline-offset-4 hover:underline-offset-2 transition-all duration-200 cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  SMB Function Hall, Birkoor Road
                </button>
                <p>Banswada, Telangana</p>
              </div>
            </div>
          </motion.div>

          {/* Floral Border Bottom */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <svg width="280" height="60" viewBox="0 0 300 60" className="opacity-70 rotate-180 max-w-full" aria-hidden="true">
              <circle cx="150" cy="30" r="8" fill="#6B3FA0" opacity="0.4" />
              <circle cx="130" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="170" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="110" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <circle cx="190" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <path d="M90,40 Q150,20 210,40" fill="none" stroke="#6B3FA0" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Reception Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <FallingPetals color="#A78BCC" count={15} />
        
        <div className="max-w-4xl mx-auto">
          {/* Floral Border Top - Violet Theme */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <svg width="280" height="60" viewBox="0 0 300 60" className="opacity-70 max-w-full" aria-hidden="true">
              <circle cx="150" cy="30" r="8" fill="#6B3FA0" opacity="0.4" />
              <circle cx="130" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="170" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="110" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <circle cx="190" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <path d="M90,40 Q150,20 210,40" fill="none" stroke="#6B3FA0" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10 border border-[#6B3FA0]/20"
          >
            <h2 className="text-[#6B3FA0] text-center mb-6 sm:mb-8">Reception</h2>
            
            <div className="text-center mb-6 sm:mb-8 space-y-2">
              <div className="inline-block bg-gradient-to-r from-[#6B3FA0]/10 to-[#A78BCC]/10 px-6 py-3 rounded-lg border border-[#6B3FA0]/20">
                <p className="text-[#6B3FA0] text-xl sm:text-2xl" style={{ fontWeight: 600 }}>November 9, 2025</p>
                <p className="text-[#6B3FA0] mt-1" style={{ fontWeight: 500 }}>7:00 PM Onwards</p>
              </div>
            </div>

            <div className="text-center mb-6 space-y-2 text-[#2B2B2B]/80">
              <p className="italic opacity-75">Join us for an evening of celebration</p>
            </div>

            <div className="flex items-start justify-center gap-3 text-[#2B2B2B]">
              <MapPin className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-1" />
              <div className="text-center">
                <button
                  onClick={() => window.open('https://maps.app.goo.gl/aPRZF1fRy3cP24WB9?g_st=ipc', '_blank')}
                  className="text-[#6B3FA0] hover:text-[#5A338A] underline decoration-dotted underline-offset-4 hover:underline-offset-2 transition-all duration-200 cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  Grasshopper Resorts
                </button>
                <p>Kistareddypet, Telangana</p>
              </div>
            </div>
          </motion.div>

          {/* Floral Border Bottom - Violet Theme */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <svg width="280" height="60" viewBox="0 0 300 60" className="opacity-70 rotate-180 max-w-full" aria-hidden="true">
              <circle cx="150" cy="30" r="8" fill="#6B3FA0" opacity="0.4" />
              <circle cx="130" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="170" cy="25" r="6" fill="#E8DFF8" stroke="#6B3FA0" strokeWidth="1.5" />
              <circle cx="110" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <circle cx="190" cy="35" r="5" fill="#A78BCC" opacity="0.6" />
              <path d="M90,40 Q150,20 210,40" fill="none" stroke="#6B3FA0" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 sm:py-12 text-center px-4">
        <FallingPetals color="#A78BCC" count={10} />
        <p className="text-[#6B3FA0] flex items-center justify-center gap-2 flex-wrap relative z-10">
          <span>Made with</span>
          <Heart className="w-5 h-5 fill-[#A78BCC] text-[#A78BCC] inline-block" aria-label="love" />
          <span>by</span>
          <a 
            href="http://bloomora.services/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline decoration-[#6B3FA0]/40 hover:decoration-[#6B3FA0] transition-all duration-200 hover:text-[#5A338A] focus:outline-none focus:ring-2 focus:ring-[#6B3FA0] focus:ring-offset-2 rounded px-1"
          >
            Bloomora
          </a>
        </p>
      </footer>
    </div>
  );
}
