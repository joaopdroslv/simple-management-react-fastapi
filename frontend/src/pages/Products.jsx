import Container from "react-bootstrap/Container";
import ProductsTable from "../components/ProductsTable";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import { List, CirclePlus, Search } from "lucide-react";
import Button from "react-bootstrap/Button";
import ProductsCreateModal from "../components/ProductsCreateModal";
import ProductsUpdateModal from "../components/ProductsUpdateModal";
import ConfirmationModal from "../components/ConfirmationModal";
import { deleteProduct } from "../api";
import ProductCard from "../components/ui/ProductCard";
import ProductsFilter from "../components/ProductsFilter";

function Products() {
  const [products, setProducts] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleOpenUpdateModal = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedProduct(null);
    setShowUpdateModal(false);
  };

  const handleOpenConfirmationModal = (product) => {
    setProductToDelete(product);
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setProductToDelete(null);
    setShowConfirmationModal(false);
  };

  const handleDeleteProductConfirmed = async () => {
    if (!productToDelete) return;

    await deleteProduct(productToDelete.id);
    // Removing the delete product from the table
    setProducts((prev) =>
      prev.filter((product) => product.id !== productToDelete.id)
    );
    handleCloseConfirmationModal();
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

    if (!showCreateModal && !showUpdateModal) {
      // If the modal is not open, set up a interval to fetch data repeatedly
      const intervalId = setInterval(fetchProducts, 30000);
      return () => clearInterval(intervalId); // Cleanup: clear the interval; it will be re-established if modal remains closed
    }

    return undefined; // No cleanup needed if modal is open
  }, [showCreateModal, showUpdateModal]); // Runs effect when showCreateModal changes

  return (
    <>
      <header
        className="d-flex align-items-center shadow-sm"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--light-grey)",
          height: "125px",
        }}
      >
        <Container className="d-flex align-items-center gap-3">
          <List size={30} />
          <h1 className="mb-0">Products</h1>
        </Container>
      </header>

      <section className="mt-5 mb-4">
        <Container className="bg-white rounded p-5 shadow-sm">
          <ProductsFilter />
          <div className="d-flex justify-content-end align-items-center gap-3">
            <Button
              variant="outline-success"
              className="p-2 d-flex align-items-center gap-2 shadow-sm mt-4"
              onClick={handleOpenCreateModal}
            >
              <CirclePlus size={24} />
              Add a product
            </Button>
          </div>
        </Container>
      </section>

      <section className="mt-4 mb-4">
        <Container className="bg-white rounded p-5 shadow-sm">
          {/* <ProductsTable
            products={products}
            onEditProduct={handleOpenUpdateModal}
            onDeleteProduct={handleOpenConfirmationModal}
          /> */}
          {[
            {
              id: 1,
              name: "Something",
              category: "Electronics",
              price: 99.99,
              stock: 99,
              available: true,
            },
            {
              id: 2,
              name: "Another Thing",
              category: "Clothing",
              price: 49.99,
              stock: 50,
              available: true,
            },
            {
              id: 3,
              name: "Cool Gadget",
              category: "Electronics",
              price: 199.99,
              stock: 20,
              available: true,
            },
          ].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={handleOpenUpdateModal}
              onDelete={handleOpenConfirmationModal}
            />
          ))}
        </Container>
      </section>

      <ProductsCreateModal
        show={showCreateModal}
        handleClose={handleCloseCreateModal}
      />

      <ProductsUpdateModal
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        product={selectedProduct}
      />

      <ConfirmationModal
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        onConfirm={handleDeleteProductConfirmed} // post-confirmation callback function
      />
    </>
  );
}

export default Products;
