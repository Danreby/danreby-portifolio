import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function NeonProfile({
  imageSrc,
  alt = '',
  size = 384,
  sizeClass = '',
  ringColors = ['#00F5FF', '#8A2BE2', '#FF2D95'],
  className = ''
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mqMotion.matches)
    const onMotionChange = () => setPrefersReducedMotion(mqMotion.matches)
    mqMotion.addEventListener?.('change', onMotionChange)
    return () => mqMotion.removeEventListener?.('change', onMotionChange)
  }, [])

  const isSizeClass = typeof sizeClass === 'string' && sizeClass.trim().length > 0
  const numericSize = typeof size === 'number' ? `${size}px` : (typeof size === 'string' ? size : null)

  const ringVariants = (delay = 0, duration = 6) => ({
    animate: {
      rotate: [0, 360],
      scale: [1, 1.03, 1],
      opacity: [0.8, 0.4, 0.8]
    },
    transition: {
      rotate: { repeat: Infinity, ease: 'linear', duration },
      scale: { repeat: Infinity, ease: 'easeInOut', duration: duration / 2 },
      opacity: { repeat: Infinity, ease: 'easeInOut', duration },
      delay
    }
  })
  
  const handleClick = () => {
    console.log("🐤❤️🐻");
  }

  return (
    <div
      style={!isSizeClass && numericSize ? { width: numericSize, height: numericSize } : undefined}
      className={`relative ${className} ${isSizeClass ? `${sizeClass} aspect-square` : 'flex items-center justify-center'}`}
      aria-hidden={false}
    >
      <div className="relative overflow-hidden w-full h-full shadow-2xl rounded-none sm:rounded-full">
        <img
          src={imageSrc}
          alt={alt}
          onClick={handleClick}
          className="w-full h-full object-cover block rounded-none sm:rounded-full"
          draggable={false}
        />

        <motion.div
          aria-hidden
          initial={false}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          className="pointer-events-none absolute inset-0 rounded-none sm:rounded-full"
          style={{ boxShadow: `0 0 40px rgba(0,0,0,0.25)` }}
        />
      </div>

      {ringColors.map((color, i) => {
        const insetPercent = -4 - i * 3
        const blur = 6 + i * 6
        const sizeStyle = {
          top: `${insetPercent}%`,
          left: `${insetPercent}%`,
          right: `${insetPercent}%`,
          bottom: `${insetPercent}%`
        }
        const ringStyle = {
          ...sizeStyle,
          borderRadius: '9999px',
          boxShadow: `0 0 ${12 + i * 18}px ${color}33, 0 0 ${6 + i * 8}px ${color}66`,
          background: `radial-gradient(circle at 30% 20%, ${color}22 0%, transparent 35%), radial-gradient(circle at 70% 80%, ${color}11 0%, transparent 45%)`,
          filter: `blur(${blur}px)`,
          border: '1px solid rgba(255,255,255,0.03)'
        }

        const variants = ringVariants(i * 0.6, 8 + i * 3)

        return (
          <motion.div
            key={color + i}
            className="absolute rounded-full pointer-events-none"
            style={ringStyle}
            initial={false}
            animate={prefersReducedMotion ? {} : variants.animate}
            transition={prefersReducedMotion ? {} : variants.transition}
          />
        )
      })}

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <motion.stop
              offset="0%"
              stopOpacity="1"
              stopColor={ringColors[0]}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      stopColor: [
                        ringColors[0],
                        ringColors[1] || ringColors[0],
                        ringColors[2] || ringColors[0],
                        ringColors[0]
                      ]
                    }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              }
            />
            <motion.stop
              offset="100%"
              stopOpacity="1"
              stopColor={ringColors[1] || ringColors[0]}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      stopColor: [
                        ringColors[1] || ringColors[0],
                        ringColors[2] || ringColors[0],
                        ringColors[0],
                        ringColors[1] || ringColors[0]
                      ]
                    }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              }
            />
          </linearGradient>
        </defs>

        <motion.circle
          className="hidden sm:block"
          cx="50"
          cy="50"
          r="50"
          fill="none"
          stroke={`url(#neonGradient)`}
          strokeWidth="0.8"
          strokeLinecap="round"
          initial={false}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  strokeOpacity: [0.9, 0.5, 0.9],
                  strokeDashoffset: [0, 15, 0]
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
          style={{ filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.6))' }}
        />
      </svg>

      <motion.div
        className="absolute inset-0 rounded-none sm:rounded-full pointer-events-none"
        initial={false}
        whileHover={prefersReducedMotion ? {} : { opacity: 1, scale: 1.02 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.4 }}
        style={{
          mixBlendMode: 'screen',
          background: `radial-gradient(circle at 30% 20%, ${ringColors[0]}22, transparent 40%), radial-gradient(circle at 70% 80%, ${ringColors[1] || ringColors[0]}11, transparent 55%)`
        }}
      />
    </div>
  )
}
