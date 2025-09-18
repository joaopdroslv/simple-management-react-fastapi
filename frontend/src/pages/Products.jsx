import Container from "react-bootstrap/Container";
import ProductsTable from "../components/ProductsTable";
import { getProducts } from "../api";
import { useState, useEffect } from "react";
import { List, CirclePlus } from "lucide-react";
import Button from "react-bootstrap/Button";
import ProductsCreateModal from "../components/ProductsCreateModal";
import ProductsUpdateModal from "../components/ProductsUpdateModal";
import ConfirmationModal from "../components/ConfirmationModal";
import { deleteProduct, getCategories, getSuppliers } from "../api";
import ProductsFilter from "../components/ProductsFilter";

function Products() {
  const [products, setProducts] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    category_id: "",
    supplier_id: "",
    price_higher_than: "",
    price_lower_than: "",
    stock_higher_than: "",
    stock_lower_than: "",
    is_visible: "",
    is_available: "",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 50,
    total: 0,
  });

  useEffect(() => {
    getCategories()
      .then((response) => setCategories(response.categories))
      .catch(console.error);
    getSuppliers()
      .then((response) => setSuppliers(response.suppliers))
      .catch(console.error);
  }, []);

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

  const fetchProducts = async () => {
    setPagination((prev) => ({ ...prev, page: 1 }));

    const normalizedFilters = Object.fromEntries(
      Object.entries(filters).map(([key, value]) => {
        if (value === "") return [key, null]; // Empty strings to null
        if (
          [
            "category_id",
            "supplier_id",
            "stock_higher_than",
            "stock_lower_than",
          ].includes(key)
        )
          return [key, Number(value)];
        if (["price_higher_than", "price_lower_than"].includes(key))
          return [key, parseFloat(value)];
        if (["is_visible", "is_available"].includes(key))
          return [key, value === "true"]; // "true"/"false" to boolean
        return [key, value];
      })
    );

    console.log(filters);
    console.log(normalizedFilters);
    console.log(pagination);

    const response = await getProducts(
      normalizedFilters,
      pagination.page,
      pagination.limit
    );
    setProducts(response.products);
    setPagination({ ...response.pagination });
  };

  useEffect(() => {
    fetchProducts();

    if (!showCreateModal && !showUpdateModal) {
      // If the modal is not open, set up a interval to fetch data repeatedly
      const intervalId = setInterval(fetchProducts, 30000);
      return () => clearInterval(intervalId); // Cleanup: clear the interval; it will be re-established if modal remains closed
    }

    return undefined; // No cleanup needed if modal is open
  }, [
    filters,
    pagination.page,
    pagination.limit,
    showCreateModal,
    showUpdateModal,
  ]);

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
          <h1 className="mb-0">Products management</h1>
        </Container>
      </header>

      <section className="mt-5 mb-4">
        <Container className="bg-white rounded p-5 shadow-sm">
          <ProductsFilter
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            suppliers={suppliers}
          />
        </Container>
      </section>

      <section className="mt-5 mb-4">
        <Container className="bg-white rounded p-5 shadow-sm">
          <div className="d-flex justify-content-end align-items-center mb-4">
            <Button
              variant="outline-primary"
              className="p-2 d-flex align-items-center gap-2 shadow-sm"
              onClick={handleOpenCreateModal}
            >
              <CirclePlus size={24} />
              Add a product
            </Button>
          </div>
          <ProductsTable
            products={products}
            onEdit={handleOpenUpdateModal}
            onDelete={handleOpenConfirmationModal}
          />
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
        onConfirm={handleDeleteProductConfirmed}
      />
    </>
  );
}

export default Products;
