import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import CartProvider from '../context/CartContext'

// Mock product data
const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'A test product description',
  category: 'electronics',
  image: 'test-image.jpg',
  rating: {
    rate: 4.5,
    count: 100
  }
}

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>
    {children}
  </CartProvider>
)

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const mockOnViewDetails = () => {}
    
    render(
      <TestWrapper>
        <ProductCard 
          product={mockProduct} 
          onViewDetails={mockOnViewDetails}
        />
      </TestWrapper>
    )

    // Check for title
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    
    // Check for price
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    
    // Check for "IN STOCK" text
    expect(screen.getByText('IN STOCK')).toBeInTheDocument()
    
    // Check for "Add to Cart" button
    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })

  it('calls onViewDetails when view details button is clicked', () => {
    const mockOnViewDetails = vi.fn()
    
    render(
      <TestWrapper>
        <ProductCard 
          product={mockProduct} 
          onViewDetails={mockOnViewDetails}
        />
      </TestWrapper>
    )

    // Click on the image button (which triggers onViewDetails)
    const imageButton = screen.getByRole('button', { name: /view details for test product/i })
    imageButton.click()

    expect(mockOnViewDetails).toHaveBeenCalledWith(mockProduct)
  })

  it('renders product image with correct alt text', () => {
    const mockOnViewDetails = () => {}
    
    render(
      <TestWrapper>
        <ProductCard 
          product={mockProduct} 
          onViewDetails={mockOnViewDetails}
        />
      </TestWrapper>
    )

    const image = screen.getByAltText('Test Product')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'test-image.jpg')
  })
}) 