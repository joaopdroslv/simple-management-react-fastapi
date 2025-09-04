import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductsFilter() {
  return (
    <Form className="mt-4 mb-4 ps-5 pe-5">
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>By name</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="name" defaultValue="" />
          </Col>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>By category</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="category" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>By supplier</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="category" defaultValue="" />
          </Col>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>More than (Unit price)</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="price" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Less than (Unit price)</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="price" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>More than (Stock quantity)</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="stock" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Less than (Stock quantity)</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="stock" defaultValue="" />
          </Col>
        </Form.Group>
      </Row>

      <Row sm="4" className="d-flex align-items-center">
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Is visible</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="stock" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Is available</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="stock" defaultValue="" />
          </Col>
        </Form.Group>
      </Row>
    </Form>
  );
}

export default ProductsFilter;
