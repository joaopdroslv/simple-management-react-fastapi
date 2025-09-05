import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Trash, SquarePen, ArrowDownUp } from "lucide-react";
import Spinner from "react-bootstrap/Spinner";

function ProductsTable({ products, onEdit, onDelete }) {
  return (
    <Table hover style={{ cursor: "pointer" }} className="ps-4 pe-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Supplier</th>
          <th>Is visible</th>
          <th>Is available</th>
          <th>Unit price</th>
          <th>Stock Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.details.name}</td>
              <td>{product.category.name}</td>
              <td>{product.supplier.name}</td>
              <td>
                {product.is_visible ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </td>
              <td>
                {product.is_available ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </td>
              <td>$ {product.details.unit_price.toFixed(2)}</td>
              <td>{product.details.stock_quantity}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="p-2 d-flex align-items-center shadow-sm"
                    style={{ borderRadius: "100px" }}
                    onClick={() => onEdit(product)}
                  >
                    <SquarePen size={16} />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="p-2 d-flex align-items-center shadow-sm"
                    style={{ borderRadius: "100px" }}
                    onClick={() => onDelete(product)}
                  >
                    <Trash size={16} />
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="p-2 d-flex align-items-center shadow-sm"
                    style={{ borderRadius: "100px" }}
                  >
                    <ArrowDownUp size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={7}
              className="d-flex- align-items-center text-center p-3"
            >
              <Spinner animation="border" />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default ProductsTable;
