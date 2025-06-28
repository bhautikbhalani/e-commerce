import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import CartProvider from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

// 🧩 Partial mock to preserve MemoryRouter
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    // Optionally mock specific hooks here, e.g., useNavigate
  };
});

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "A test product description",
  category: "electronics",
  image: "test-image.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

// Test wrapper with router + cart provider
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    <CartProvider>{children}</CartProvider>
  </MemoryRouter>
);

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText("IN STOCK")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  it("renders product image with correct alt text and href", () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    );

    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");

    const link = screen.getByRole("link", {
      name: /view details for test product/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/product/1");
  });
});
