import { useState, useEffect, useMemo } from "react";
import type { Product } from "../utils/types";
import { fetchProductsFromAPI } from "../utils/helper";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState<string>("name");

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
          setError("Failed to fetch products");
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

  return {
    loading,
    error,
    allProducts: products,
    categories,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
  };
};
