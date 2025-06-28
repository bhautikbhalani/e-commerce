import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductDetailModal from './ProductDetailModal'

describe('ProductDetailModal', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 29.99,
    description: 'This is a test product description',
    image: 'test-image.jpg',
    category: 'Electronics',
    rating: {
      rate: 4.5,
      count: 100
    }
  }

  const mockProps = {
    product: mockProduct,
    isOpen: true,
    onClose: vi.fn(),
    onAddToCart: vi.fn()
  }

  it('renders product detail modal when open', () => {
    render(<ProductDetailModal {...mockProps} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByText('This is a test product description')).toBeInTheDocument()
  })

  it('displays product information correctly', () => {
    render(<ProductDetailModal {...mockProps} />)
    
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('(100)')).toBeInTheDocument()
  })

  it('shows add to cart button', () => {
    render(<ProductDetailModal {...mockProps} />)
    
    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })

  it('calls onAddToCart when add to cart button is clicked', () => {
    render(<ProductDetailModal {...mockProps} />)
    
    const addToCartButton = screen.getByText('Add to Cart')
    fireEvent.click(addToCartButton)
    
    expect(mockProps.onAddToCart).toHaveBeenCalledWith(mockProduct)
  })

  it('calls onClose when close button is clicked', () => {
    render(<ProductDetailModal {...mockProps} />)
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    expect(mockProps.onClose).toHaveBeenCalled()
  })

  it('does not render when not open', () => {
    render(<ProductDetailModal {...mockProps} isOpen={false} />)
    
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument()
  })

  it('does not render when product is null', () => {
    render(<ProductDetailModal {...mockProps} product={null} />)
    
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument()
  })
}) 