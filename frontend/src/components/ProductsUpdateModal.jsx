import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CircleCheckBig, CircleX, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { updateProduct } from "../api";

function ProductsUpdateModal({ show, handleClose, product }) {
  // Initializes formData empty as default
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  /*
    Uses a useEffect that “listens” for changes in the product to
    update the state every time the product changes
  */
  useEffect(() => {
    setFormData({
      name: product?.name || "",
      category: product?.category || "",
      price: product?.price || "",
      stock: product?.stock || "",
    });
  }, [product]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateProduct(product.id, formData);
    handleClose();
  };

  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center gap-3">
          <Pencil size={30} />
          <h2 className="mb-0">Edit</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5 mt-4 mb-4">
        <Form id="productUpdateForm" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Category</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Price</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Stock</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control
                type="text"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          onClick={handleClose}
          className="p-2 d-flex align-items-center gap-2 shadow-sm"
        >
          <CircleX size={20} />
          Cancel
        </Button>
        <Button
          variant="outline-success"
          className="p-2 d-flex align-items-center gap-2 shadow-sm"
          onClick={() =>
            document.getElementById("productUpdateForm").requestSubmit()
          }
        >
          <CircleCheckBig size={20} />
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductsUpdateModal;
