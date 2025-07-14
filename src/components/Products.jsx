import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';

const RegisterProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        quantity: 0,
    });

    const { products, loading, addProduct } = useProducts();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            addProduct(product);
            setSuccess(true);
            setError('');
            setProduct({ name: '', price: 0, quantity: 0 });
        } catch (err) {
            console.error(err);
            setError('Failed to register product.');
            setSuccess(false);
        }
    };

    return (
        <div className="register-form-container">
            <h2>Register Product</h2>

            
                <div className="form-row">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Product name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="0.00"
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity:</label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            placeholder="0"
                        />
                    </div>
                </div>

                <button onClick={handleSubmit}>Submit</button>
         

            {success && <p style={{ color: "lightgreen", textAlign: "center" }}>✅ Product registered successfully!</p>}
            {error && <p style={{ color: "red", textAlign: "center" }}>❌ Something went wrong. Try again.</p>}
        </div>
    );
};

export default RegisterProduct;
