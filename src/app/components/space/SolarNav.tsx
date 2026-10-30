import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { portfolioData } from '../../data';
import type { Theme } from './useTheme';

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Top brand + theme switch, and a bottom dock shaped like a tiny solar system:
// the sun is Home and each planet is a section; the one you are on glows.
export function SolarNav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const { nav, site } = portfolioData;
  const [active, setActive] = useState(nav[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    nav.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [nav]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 md:px-8 py-4 pointer-events-none">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="sp-focus pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full sp-card"
          style={{ borderRadius: 999 }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--sp-gold)', boxShadow: '0 0 10px var(--sp-gold)' }} />
          <span className="font-display text-sm md:text-base" style={{ fontWeight: 700 }}>
            {site.brand}
          </span>
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'night' ? 'Switch to day sky' : 'Switch to night sky'}
          className="sp-focus pointer-events-auto flex items-center gap-2 px-4 py-2 sp-card"
          style={{ borderRadius: 999 }}
        >
          {theme === 'night' ? (
            <Sun className="w-4 h-4" style={{ color: 'var(--sp-gold)' }} />
          ) : (
            <Moon className="w-4 h-4" style={{ color: 'var(--sp-violet)' }} />
          )}
          <span className="text-sm hidden sm:inline" style={{ fontWeight: 600 }}>
            {theme === 'night' ? 'Day sky' : 'Night sky'}
          </span>
        </button>
      </header>

      <nav
        aria-label="Sections"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 sp-card px-3 md:px-5 py-2.5"
        style={{ borderRadius: 999 }}
      >
        <div className="relative flex items-center gap-1 md:gap-2">
          {/* Orbit line */}
          <div className="absolute left-4 right-4 top-1/2 h-px" style={{ background: 'var(--sp-line-strong)' }} />
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                aria-current={isActive ? 'true' : undefined}
                className="sp-focus group relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full"
              >
                <span
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: item.size * (isActive ? 1.45 : 1),
                    height: item.size * (isActive ? 1.45 : 1),
                    background: item.sun
                      ? 'radial-gradient(circle at 35% 35%, #fff3b0, var(--sp-gold) 60%)'
                      : `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), ${item.color} 55%)`,
                    boxShadow: isActive ? `0 0 16px 3px ${item.color}` : 'none',
                    opacity: isActive || item.sun ? 1 : 0.75,
                  }}
                />
                <span
                  className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-mono-space transition-opacity duration-200 sp-card ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                  }`}
                  style={{ borderRadius: 999 }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
