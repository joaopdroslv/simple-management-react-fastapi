import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Trash, SquarePen } from "lucide-react";
import Spinner from "react-bootstrap/Spinner";

function ProductsTable({ products, onEditProduct, onDeleteProduct }) {
  return (
    <Table striped hover className="shadow-sm">
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
                    onClick={() => onEditProduct(product)}
                  >
                    <SquarePen size={20} />
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="d-flex align-items-center gap-2"
                    onClick={() => onDeleteProduct(product)}
                  >
                    <Trash size={20} />
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="d-flex- align-items-center text-center p-3">
              <Spinner animation="border" />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default ProductsTable;
