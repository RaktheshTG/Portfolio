'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Work from '@/components/Work'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import Now from '@/components/Now'
import Achievements from '@/components/Achievements'
import ShapeGrid from '@/components/ShapeGrid'
  


gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    // Snappy, responsive smooth scroll — fixed duration per scroll input
    // instead of an open-ended lerp chase, so it settles quickly and never
    // feels like it's "auto-scrolling" on its own.
    

    const raf = (time: number) => {
      
      ScrollTrigger.update()
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      const heroLines = gsap.utils.toArray<HTMLElement>('.hero-line')
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (reduceMotion) {
        gsap.set(heroLines, { yPercent: 0 })
      } else {
        gsap.from(heroLines, {
          yPercent: 110,
          duration: 1.1,
          ease: 'power4.out',
          stagger: 0.08,
          delay: 0.15,
        })
      }

      gsap.from('.hero-meta', {
        opacity: 0,
        y: 18,
        duration: 0.8,
        delay: reduceMotion ? 0 : 1.6,
        stagger: 0.12,
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 55,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 84%' },
        })
      })

      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        card.addEventListener('mouseenter', () =>
          gsap.to(card, { y: -8, duration: 0.35, ease: 'power2.out' })
        )
        card.addEventListener('mouseleave', () =>
          gsap.to(card, { y: 0, duration: 0.35, ease: 'power2.out' })
        )
      })
    }, root)

    return () => {
      ctx.revert()
      gsap.ticker.remove(raf)
      
    }
  }, [])

  return (
    <main ref={root} className="site-shell">
      <Nav />
      
      <div className="relative h-[100vh] overflow-hidden">
        <ShapeGrid
          className="absolute inset-0"
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
        <div className="relative z-10 h-full">
          <Hero />
        </div>
      </div>
      <Marquee />
      <About />
      <Skills />
      <Work />
      <Now />
      <Achievements />
      <Footer />
    </main>
  )
}
