import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ProductsUpdateModal from "./ProductsUpdateModal";
import Badge from "react-bootstrap/Badge";
import { Trash, SquarePen } from "lucide-react";

function ProductsTable({ products }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenUpdateModal = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedProduct(null);
    setShowUpdateModal(false);
  };

  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
                <td>
                  {product.available ? (
                    <Badge bg="success">Yes</Badge>
                  ) : (
                    <Badge bg="danger">No</Badge>
                  )}
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="d-flex align-items-center gap-2"
                      onClick={() => handleOpenUpdateModal(product)}
                    >
                      <SquarePen size={24} />
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="d-flex align-items-center gap-2"
                    >
                      <Trash size={24} />
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                Loading products...
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <ProductsUpdateModal
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        product={selectedProduct}
      />
    </>
  );
}

export default ProductsTable;
