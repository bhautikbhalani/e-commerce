import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterSidebar from "./FilterSidebar";

describe("FilterSidebar", () => {
  const mockProps = {
    categories: ["Electronics", "Clothing", "Books"],
    selectedCategories: [],
    onCategoryChange: vi.fn(),
    priceRange: { min: 0, max: 1000 },
    onPriceRangeChange: vi.fn(),
    selectedSort: "price-low",
    onSortChange: vi.fn(),
    isOpen: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
    window.dispatchEvent(new Event("resize"));
  });

  it("renders filter sidebar", () => {
    render(<FilterSidebar {...mockProps} />);
    expect(screen.getAllByText("Filters").length).toBeGreaterThan(0);
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Price Range")).toBeInTheDocument();
  });

  it("displays category options", () => {
    render(<FilterSidebar {...mockProps} />);
    expect(screen.getByLabelText("Electronics")).toBeInTheDocument();
    expect(screen.getByLabelText("Clothing")).toBeInTheDocument();
    expect(screen.getByLabelText("Books")).toBeInTheDocument();
  });

  it("calls onCategoryChange when category is selected", () => {
    render(<FilterSidebar {...mockProps} />);
    const categoryOption = screen.getByLabelText("Electronics");
    fireEvent.click(categoryOption);
    expect(mockProps.onCategoryChange).toHaveBeenCalledWith(["Electronics"]);
  });

  it("calls onCategoryChange when category is deselected", () => {
    render(
      <FilterSidebar {...mockProps} selectedCategories={["Electronics"]} />
    );
    const categoryOption = screen.getByLabelText("Electronics");
    fireEvent.click(categoryOption);
    expect(mockProps.onCategoryChange).toHaveBeenCalledWith([]);
  });

  it("calls onPriceRangeChange when min range is changed", () => {
    render(<FilterSidebar {...mockProps} />);
    const minSlider = screen.getByLabelText(/Min/i);
    fireEvent.change(minSlider, { target: { value: "100" } });
    expect(mockProps.onPriceRangeChange).toHaveBeenCalledWith({
      ...mockProps.priceRange,
      min: 100,
    });
  });

  it("calls onPriceRangeChange when max range is changed", () => {
    render(<FilterSidebar {...mockProps} />);
    const maxSlider = screen.getByLabelText(/Max/i);
    fireEvent.change(maxSlider, { target: { value: "900" } });
    expect(mockProps.onPriceRangeChange).toHaveBeenCalledWith({
      ...mockProps.priceRange,
      max: 900,
    });
  });

  it("hides sidebar visually when isOpen is false", () => {
    render(<FilterSidebar {...mockProps} isOpen={false} />);
    const sidebar = screen.getByLabelText("Product Filters");
    expect(sidebar).toHaveClass("-translate-x-full");
  });  
});
