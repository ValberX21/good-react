const ProductCar = ({ prod, productSelected }) => {

    const clickAction = () => {
        productSelected(prod);
    };

    return (
        <li
            onClick={clickAction}
            style={{
                marginBottom: "12px",
                color: "white",
                borderBottom: "1px solid #444",
                paddingBottom: "8px",
            }}>
            <div><strong>Product Name:</strong> {prod.name}</div>
            <div><strong>Price:</strong> ${prod.price.toFixed(2)}</div>
        </li>
    );
};

export default ProductCar;
