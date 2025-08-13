import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CircleCheckBig, CircleX, MessageCircleWarning } from "lucide-react";

function ConfirmationModal({ show, handleClose, onConfirm }) {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="d-flex align-items-center gap-3">
          <MessageCircleWarning size={30} />
          <h2 className="mb-0">Confirmation</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to perform this action? It is irreversible.
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          className="d-flex align-items-center gap-2"
          onClick={handleClose}
        >
          <CircleX size={20} />
          Cancel
        </Button>
        <Button
          variant="outline-success"
          className="d-flex align-items-center gap-2"
          onClick={() => onConfirm()}
        >
          <CircleCheckBig size={20} />
          Yeah! I'm sure
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
