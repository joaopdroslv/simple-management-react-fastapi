import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function ProductsFilter() {
  return (
    <Form className="mt-4 mb-4">
      <Form.Group as={Row} className="mb-3">
        <Col sm="2" className="d-flex align-items-center">
          <Form.Label>
            <strong>Name</strong>
          </Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control type="text" name="name" defaultValue="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm="2" className="d-flex align-items-center">
          <Form.Label>
            <strong>Category</strong>
          </Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control type="text" name="category" defaultValue="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm="2" className="d-flex align-items-center">
          <Form.Label>
            <strong>Price</strong>
          </Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control type="text" name="price" defaultValue="..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm="2" className="d-flex align-items-center">
          <Form.Label>
            <strong>Stock</strong>
          </Form.Label>
        </Col>
        <Col sm="10">
          <Form.Control type="text" name="stock" defaultValue="..." />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ProductsFilter;
