import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  const mockProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: vi.fn()
  }

  it('renders pagination component', () => {
    render(<Pagination {...mockProps} />)
    
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('highlights current page', () => {
    render(<Pagination {...mockProps} />)
    
    const currentPageButton = screen.getByText('1')
    expect(currentPageButton).toHaveClass('bg-blue-600')
  })

  it('calls onPageChange when page is clicked', () => {
    render(<Pagination {...mockProps} />)
    
    const pageButton = screen.getByText('3')
    fireEvent.click(pageButton)
    
    expect(mockProps.onPageChange).toHaveBeenCalledWith(3)
  })

  it('shows previous button when not on first page', () => {
    render(<Pagination {...mockProps} currentPage={3} />)
    
    expect(screen.getByText('Previous')).toBeInTheDocument()
  })

  it('shows next button when not on last page', () => {
    render(<Pagination {...mockProps} currentPage={3} />)
    
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('calls onPageChange when previous button is clicked', () => {
    render(<Pagination {...mockProps} currentPage={3} />)
    
    const prevButton = screen.getByText('Previous')
    fireEvent.click(prevButton)
    
    expect(mockProps.onPageChange).toHaveBeenCalledWith(2)
  })

  it('calls onPageChange when next button is clicked', () => {
    render(<Pagination {...mockProps} currentPage={3} />)
    
    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)
    
    expect(mockProps.onPageChange).toHaveBeenCalledWith(4)
  })

  it('handles single page', () => {
    render(<Pagination {...mockProps} totalPages={1} />)
    
    expect(screen.queryByText('Previous')).not.toBeInTheDocument()
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })
}) 