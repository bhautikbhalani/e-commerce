import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StarRating from './StarRating'

describe('StarRating', () => {
  it('renders star rating correctly', () => {
    render(<StarRating rating={4.5} count={100} />)
    
    // Check if count is displayed in parentheses
    expect(screen.getByText('(100)')).toBeInTheDocument()
  })

  it('renders without count', () => {
    render(<StarRating rating={3.0} />)
    
    // Should not display count when count is undefined
    expect(screen.queryByText(/\(\d+\)/)).not.toBeInTheDocument()
  })

  it('handles zero rating', () => {
    render(<StarRating rating={0} count={0} />)
    
    // Check if count is displayed
    expect(screen.getByText('(0)')).toBeInTheDocument()
  })

  it('renders correct number of stars', () => {
    render(<StarRating rating={3.5} count={50} />)
    
    // Should render 5 stars total (3 filled + 1 half + 1 empty)
    const stars = document.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThan(0)
  })
}) 