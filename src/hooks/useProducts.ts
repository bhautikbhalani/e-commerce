import { useState, useEffect, useMemo } from 'react';
import type { Product } from '../utils/types';
import { fetchProductsFromAPI } from '../utils/helper';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [sortBy, setSortBy] = useState<string>('name');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const productsPerPage = 8;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchProductsFromAPI();
                setProducts(data);
                setError(null);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Failed to fetch products');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const categories = useMemo(() => {
        return [...new Set(products.map((product) => product.category))];
    }, [products]);

    const filteredAndSortedProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            const matchesCategory = !selectedCategory || product.category === selectedCategory;
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
            return matchesCategory && matchesPrice;
        });

        // Sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'popularity':
                    return b.rating.count - a.rating.count;
                case 'rating':
                    return b.rating.rate - a.rating.rate;
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        return filtered;
    }, [products, selectedCategory, priceRange, sortBy]);

    const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

    const currentProducts = useMemo(() => {
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        return filteredAndSortedProducts.slice(start, end);
    }, [filteredAndSortedProducts, currentPage]);

    // Reset page on filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, priceRange, sortBy]);

    return {
        loading,
        error,
        products: currentProducts,
        totalProducts: filteredAndSortedProducts.length,
        totalPages,
        currentPage,
        setCurrentPage,
        categories,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
    };
};
