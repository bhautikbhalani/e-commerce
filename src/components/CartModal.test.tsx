import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CartModal from './CartModal'

// Mock the CartContext
vi.mock('../context/CartContext', () => ({
  useCart: () => ({
    isCartOpen: true,
    closeCart: vi.fn(),
    cartItems: [
      {
        id: 1,
        name: 'Test Product',
        price: 29.99,
        image: 'test-image.jpg',
        quantity: 2
      }
    ],
    removeFromCart: vi.fn(),
    updateQuantity: vi.fn(),
    clearCart: vi.fn(),
    totalItems: 2,
    totalPrice: 59.98
  })
}))

describe('CartModal', () => {
  it('renders cart modal when open', () => {
    render(<CartModal />)
    
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('displays cart items correctly', () => {
    render(<CartModal />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('displays total price', () => {
    render(<CartModal />)
    
    expect(screen.getByText('$59.98')).toBeInTheDocument()
  })

  it('shows empty cart message when no items', () => {
    // Mock empty cart
    vi.mocked(require('../context/CartContext').useCart).mockReturnValue({
      isCartOpen: true,
      closeCart: vi.fn(),
      cartItems: [],
      removeFromCart: vi.fn(),
      updateQuantity: vi.fn(),
      clearCart: vi.fn(),
      totalItems: 0,
      totalPrice: 0
    })

    render(<CartModal />)
    
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
  })
}) 