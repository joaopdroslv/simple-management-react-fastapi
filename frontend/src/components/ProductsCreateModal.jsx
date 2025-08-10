import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CircleCheckBig, CirclePlus } from "lucide-react";

function ProductsCreateModal({ show, handleClose }) {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center gap-3">
          <CirclePlus size={30} />
          <h2 style={{ marginBottom: "0px" }}>Create</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control type="text" placeholder="..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Category</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control type="text" placeholder="..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Price</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control type="text" placeholder="..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm="2" className="d-flex align-items-center">
              <Form.Label>
                <strong>Stock</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control type="text" placeholder="..." />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
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
    </Modal>
  );
}

export default ProductsCreateModal;
