import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CartProvider from './CartContext'
import useCart from './useCart'

// Test component to use the cart context
const TestComponent = () => {
  const { cartItems, addToCart } = useCart()
  
  return (
    <div>
      <div data-testid="cart-count">{cartItems.length}</div>
      <button 
        onClick={() => addToCart({ id: 1, title: 'Test', price: 10, description: '', category: '', image: '', rating: { rate: 0, count: 0 } })}
        data-testid="add-button"
      >
        Add Item
      </button>
    </div>
  )
}

describe('CartContext', () => {
  it('provides cart context to children', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )
    
    expect(screen.getByTestId('cart-count')).toBeInTheDocument()
    expect(screen.getByTestId('add-button')).toBeInTheDocument()
  })

  it('initializes with empty cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
  })
}) 