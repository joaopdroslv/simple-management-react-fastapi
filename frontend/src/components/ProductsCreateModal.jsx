import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CircleCheckBig, CircleX, CirclePlus } from "lucide-react";

function ProductsCreateModal({ show, handleClose }) {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center gap-3">
          <CirclePlus size={30} />
          <h2 className="mb-0">Create</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-5 pe-5 mt-4 mb-4">
        <Form id="productCreateForm">
          <Form.Group as={Row} className="d-flex align-items-center">
            <Col sm="2">
              <Form.Label className="mb-0">
                <strong>Something</strong>
              </Form.Label>
            </Col>
            <Col sm="10">
              <Form.Control type="text" />
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
          onClick={handleClose}
          className="p-2 d-flex align-items-center gap-2 shadow-sm"
          // onClick={() =>
          //   document.getElementById("productCreateForm").requestSubmit()
          // }
        >
          <CircleCheckBig size={20} />
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductsCreateModal;
