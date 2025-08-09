import Container from "react-bootstrap/Container";
import ProductsTable from "../components/ProductsTable";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import { List, CirclePlus } from "lucide-react";
import Button from "react-bootstrap/Button";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.resources.products))
      .catch(console.error);
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex align-items-center gap-3">
        <List size={36} />
        <h1 style={{ marginBottom: "0px" }}>Listing all products</h1>
      </div>
      <hr className="mt-3 mb-3" />
      <div className="d-flex justify-content-end align-items-center mt-4 mb-4">
        <Button variant="success" className="d-flex align-items-center gap-3">
          <CirclePlus size={24} />
          Add
        </Button>
      </div>
      <ProductsTable products={products} />
    </Container>
  );
}

export default Products;
