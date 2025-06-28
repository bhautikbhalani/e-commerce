export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem extends Product {
    quantity: number;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemoveItem: (id: number) => void;
}

export interface PriceRange {
    min: number;
    max: number;
  }
  
  export interface FilterSidebarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    priceRange: PriceRange;
    onPriceRangeChange: (range: PriceRange) => void;
    selectedSort: string;
    onSortChange: (value: string) => void;
    isOpen: boolean;
    onClose: () => void;
  }

export interface ProductDetailModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (product: Product) => void;
}

export interface StarRatingProps {
    rating: number;
    count?: number;
}

export interface ProductCardProps {
    product: Product;
}