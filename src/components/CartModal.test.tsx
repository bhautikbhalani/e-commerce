import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CartModal from "./CartModal";
import type { CartItem } from "../utils/types"; // ensure this matches your structure

describe("CartModal", () => {
  const mockItems: CartItem[] = [
    {
      id: 1,
      title: "Test Product",
      price: 29.99,
      image: "test-image.jpg",
      quantity: 2,
      description: "A test product for cart",
      category: "test-category",
      rating: { rate: 4.5, count: 10 },
    },
  ];

  const baseProps = {
    isOpen: true,
    onClose: vi.fn(),
    cartItems: mockItems,
    onUpdateQuantity: vi.fn(),
    onRemoveItem: vi.fn(),
  };

  it("renders cart modal when open", () => {
    render(<CartModal {...baseProps} />);
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("displays cart items correctly", () => {
    render(<CartModal {...baseProps} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("displays total price", () => {
    render(<CartModal {...baseProps} />);
    expect(
      screen.getByText((text) => text.trim().endsWith("$59.98"))
    ).toBeInTheDocument();
    
  });

  it("shows empty cart message when no items", () => {
    render(
      <CartModal
        {...baseProps}
        cartItems={[]} // override with empty
      />
    );
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});
