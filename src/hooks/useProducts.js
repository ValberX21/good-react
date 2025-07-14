import {useState, useEffect } from 'react';
import axios  from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const addProduct = async (product) => {
        const reponse = await axios.post(`${API_BASE_URL}/inventory/Product`, product);
        setProducts((prev) => [...prev, reponse.data])
    }

    return {products, loading, addProduct};
}