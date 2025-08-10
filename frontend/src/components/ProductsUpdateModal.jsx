import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CircleCheckBig, SquarePen } from "lucide-react";

function ProductsUpdateModal({ show, handleClose, product }) {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center gap-3">
          <SquarePen size={30} />
          <h2 style={{ marginBottom: "0px" }}>Edit</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product ? (
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Col sm="2" className="d-flex align-items-center">
                <Form.Label>
                  <strong>Name</strong>
                </Form.Label>
              </Col>
              <Col sm="10">
                <Form.Control type="text" defaultValue={product.name} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm="2" className="d-flex align-items-center">
                <Form.Label>
                  <strong>Category</strong>
                </Form.Label>
              </Col>
              <Col sm="10">
                <Form.Control type="text" defaultValue={product.category} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm="2" className="d-flex align-items-center">
                <Form.Label>
                  <strong>Price</strong>
                </Form.Label>
              </Col>
              <Col sm="10">
                <Form.Control type="text" defaultValue={product.price} />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm="2" className="d-flex align-items-center">
                <Form.Label>
                  <strong>Stock</strong>
                </Form.Label>
              </Col>
              <Col sm="10">
                <Form.Control type="text" defaultValue={product.stock} />
              </Col>
            </Form.Group>
          </Form>
        ) : (
          <p>No product selected.</p>
        )}
      </Modal.Body>
      {product ? (
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outline-success"
            onClick={handleClose}
            className="d-flex align-items-center gap-2"
          >
            <CircleCheckBig size={20} />
            Confirm
          </Button>
        </Modal.Footer>
      ) : (
        <p>No product selected.</p>
      )}
    </Modal>
  );
}

export default ProductsUpdateModal;
