import Container from "react-bootstrap/Container";
import ProductsTable from "./ProductsTable";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import { List } from "lucide-react";

function ProductsView() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.resources.products))
      .catch(console.error);
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex align-items-center gap-3">
        <List size={40} />
        <h1 className="fs-2">Products</h1>
      </div>
      <p className="text-secondary">
        All available products.
      </p>
      <hr className="mt-3 mb-3" />
      <ProductsTable products={products} />
    </Container>
  );
}

export default ProductsView;
