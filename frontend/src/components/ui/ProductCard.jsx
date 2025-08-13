import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Trash, Pencil, ArrowDownUp } from "lucide-react";
import Badge from "react-bootstrap/Badge";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <Card className="mt-3 mb-3 p-1 d-flex justify-content-center">
      <Card.Body as={Row}>
        <Col sm={1}>
          <p>
            <strong>#</strong>
          </p>
          <p>{product.id}</p>
        </Col>
        <Col sm={2}>
          <p>
            <strong>Name</strong>
          </p>
          <p>{product.name}</p>
        </Col>
        <Col>
          <p>
            <strong>Category</strong>
          </p>
          <p>{product.category}</p>
        </Col>
        <Col>
          <p>
            <strong>Unit Price</strong>
          </p>
          <p>$ {product.price}</p>
        </Col>
        <Col>
          <p>
            <strong>Stock Amount</strong>
          </p>
          <p>{product.stock}</p>
        </Col>
        <Col>
          <p>
            <strong>Is Available</strong>
          </p>
          <p>
            {product.available ? (
              <Badge bg="success">Yes</Badge>
            ) : (
              <Badge bg="danger">No</Badge>
            )}
          </p>
        </Col>
        <Col>
          <p>
            <strong>Actions</strong>
          </p>
          <div className="d-flex gap-2">
            <Button
              variant="outline-success"
              size="sm"
              className="p-2 d-flex align-items-center"
              style={{ borderRadius: "100px" }}
              onClick={() => onEdit(product)}
            >
              <Pencil size={14} />
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              className="p-2 d-flex align-items-center"
              style={{ borderRadius: "100px" }}
              onClick={() => onDelete(product)}
            >
              <Trash size={14} />
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              className="p-2 d-flex align-items-center"
              style={{ borderRadius: "100px" }}
            >
              <ArrowDownUp size={14} />
            </Button>
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
