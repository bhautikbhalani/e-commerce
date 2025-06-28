import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FilterSidebar from './FilterSidebar'

describe('FilterSidebar', () => {
  const mockProps = {
    filters: {
      category: '',
      priceRange: '',
      sortBy: ''
    },
    onFilterChange: vi.fn(),
    categories: ['Electronics', 'Clothing', 'Books'],
    priceRanges: ['0-50', '51-100', '101-200'],
    sortOptions: ['price-low', 'price-high', 'name']
  }

  it('renders filter sidebar', () => {
    render(<FilterSidebar {...mockProps} />)
    
    expect(screen.getByText('Filters')).toBeInTheDocument()
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Price Range')).toBeInTheDocument()
    expect(screen.getByText('Sort By')).toBeInTheDocument()
  })

  it('displays category options', () => {
    render(<FilterSidebar {...mockProps} />)
    
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Clothing')).toBeInTheDocument()
    expect(screen.getByText('Books')).toBeInTheDocument()
  })

  it('displays price range options', () => {
    render(<FilterSidebar {...mockProps} />)
    
    expect(screen.getByText('$0 - $50')).toBeInTheDocument()
    expect(screen.getByText('$51 - $100')).toBeInTheDocument()
    expect(screen.getByText('$101 - $200')).toBeInTheDocument()
  })

  it('displays sort options', () => {
    render(<FilterSidebar {...mockProps} />)
    
    expect(screen.getByText('Price: Low to High')).toBeInTheDocument()
    expect(screen.getByText('Price: High to Low')).toBeInTheDocument()
    expect(screen.getByText('Name: A to Z')).toBeInTheDocument()
  })

  it('calls onFilterChange when category is selected', () => {
    render(<FilterSidebar {...mockProps} />)
    
    const categorySelect = screen.getByLabelText('Category')
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } })
    
    expect(mockProps.onFilterChange).toHaveBeenCalledWith('category', 'Electronics')
  })

  it('calls onFilterChange when price range is selected', () => {
    render(<FilterSidebar {...mockProps} />)
    
    const priceSelect = screen.getByLabelText('Price Range')
    fireEvent.change(priceSelect, { target: { value: '0-50' } })
    
    expect(mockProps.onFilterChange).toHaveBeenCalledWith('priceRange', '0-50')
  })

  it('calls onFilterChange when sort option is selected', () => {
    render(<FilterSidebar {...mockProps} />)
    
    const sortSelect = screen.getByLabelText('Sort By')
    fireEvent.change(sortSelect, { target: { value: 'price-low' } })
    
    expect(mockProps.onFilterChange).toHaveBeenCalledWith('sortBy', 'price-low')
  })
}) 