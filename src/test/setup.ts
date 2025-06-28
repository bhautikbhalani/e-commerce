// Basic test setup for Vitest
// This file will be expanded once dependencies are installed

import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock basic browser APIs
if (typeof window !== 'undefined') {
  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
  })

  // Mock scrollTo
  window.scrollTo = () => {}
}

// Mock React Router
vi.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => children,
  Routes: ({ children }: { children: React.ReactNode }) => children,
  Route: ({ children }: { children: React.ReactNode }) => children,
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => 
    `<a href="${to}">${children}</a>`,
  useNavigate: () => vi.fn(),
  useLocation: () => ({ pathname: '/' }),
}))

// Mock Swiper
vi.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => children,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock Swiper modules
vi.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
})) 