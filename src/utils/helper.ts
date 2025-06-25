import type { Product } from './types';

export const API_URL = 'https://fakestoreapi.com/products';

export const fetchProductsFromAPI = async (): Promise<Product[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data;
};
