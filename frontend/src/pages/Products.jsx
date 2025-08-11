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

  /*
    - This useEffect now depends on "showCreateModal"
    - When the modal is closed, it activates the interval to fetch data every 30 seconds
    - When the modal is opened, it cancels the interval because the effect will run again when the modal closes
  */
  useEffect(() => {
    // fetch products function
    const fetchProducts = () => {
      getProducts()
        .then((response) => setProducts(response.resources.products))
        .catch(console.error);
    };

    fetchProducts();

    if (!showCreateModal) {
      // If the modal is not open, set up a interval to fetch data repeatedly
      const intervalId = setInterval(fetchProducts, 30000);
      return () => clearInterval(intervalId); // cleanup: clear the interval; it will be re-established if modal remains closed
    }

    return undefined; // no cleanup needed if modal is open
  }, [showCreateModal]); // runs effect when showCreateModal changes

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
