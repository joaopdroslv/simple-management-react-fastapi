import Container from "react-bootstrap/Container";
import ProductsTable from "../components/ProductsTable";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import { List, CirclePlus } from "lucide-react";
import Button from "react-bootstrap/Button";
import ProductsCreateModal from "../components/ProductsCreateModal";

function Products() {
  const [products, setProducts] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.resources.products))
      .catch(console.error);
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="d-flex align-items-center gap-3">
          <List size={36} />
          <h1 style={{ marginBottom: "0px" }}>Products listing</h1>
        </div>
        <hr className="mt-3 mb-3" />
        <div className="d-flex justify-content-end align-items-center mt-4 mb-4">
          <Button
            variant="success"
            className="d-flex align-items-center gap-3"
            onClick={handleOpenCreateModal}
          >
            <CirclePlus size={20} />
            Add
          </Button>
        </div>
        <ProductsTable products={products} setProducts={setProducts} />
      </Container>

      <ProductsCreateModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
      />
    </>
  );
}

export default Products;
