import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Trash, SquarePen, Pencil, ArrowDownUp } from "lucide-react";
import Spinner from "react-bootstrap/Spinner";

function ProductsTable({ products, onEdit, onDelete }) {
  return (
    <Table hover style={{cursor: "pointer"}}>
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
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="p-2 d-flex align-items-center shadow-sm"
                    style={{ borderRadius: "100px" }}
                    onClick={() => onEdit(product)}
                  >
                    <Pencil size={16} />
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
                    variant="outline-info"
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
