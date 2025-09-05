import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Search, BrushCleaning } from "lucide-react";
import { getCategories } from "../api";
import { getSuppliers } from "../api";
import { useEffect, useState } from "react";

function ProductsFilter() {
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      getCategories()
      .then((response) => {
        console.log("Step 2 [categories]");
        console.log(response.categories);
        setCategories(response.categories);
      })
      .catch(console.error);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log("Step 1 [suppliers]");
    const fetchSuppliers = () => {
      getSuppliers()
        .then((response) => {
          console.log("Step 2 [suppliers]");
          console.log(response.suppliers);
          setSuppliers(response.suppliers)
        })
        .catch(console.error);
    };
    fetchSuppliers();
  }, []);

  return (
    <Form>
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
            <Form.Select name="category_id" style={{ cursor: "pointer" }}>
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.details.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>By supplier</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Select name="supplier_id" style={{ cursor: "pointer" }}>
              <option value="">Select a supplier</option>
              {suppliers.map((supplier, index) => (
                <option key={index} value={supplier.id}>
                  {supplier.details.name}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Unit price higher than</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="price_higher_than"
              defaultValue=""
            />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Unit price lower than</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="price_lower_than" defaultValue="" />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Stock quantity higher than</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="stock_higher_than"
              defaultValue=""
            />
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Stock quantity lower than</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" name="stock_lower_than" defaultValue="" />
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
            <Form.Select name="is_visible" style={{ cursor: "pointer" }}>
              <option value="true">Only visible</option>
              <option value="false">Only not visible</option>
              <option value="">Visible/Not visible</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Col}>
          <Col className="d-flex align-items-center">
            <Form.Label>
              <strong>Is available</strong>
            </Form.Label>
          </Col>
          <Col>
            <Form.Select name="is_available" style={{ cursor: "pointer" }}>
              <option value="true">Only available</option>
              <option value="false">Only not available</option>
              <option value="">Available/Not available</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-end align-items-center gap-3">
        <Button
          variant="outline-success"
          className="p-2 d-flex align-items-center gap-2 shadow-sm mt-4"
        >
          <Search size={24} />
          Apply filters
        </Button>
        <Button
          variant="outline-warning"
          className="p-2 d-flex align-items-center gap-2 shadow-sm mt-4"
        >
          <BrushCleaning size={24} />
          Clear filters
        </Button>
      </div>
    </Form>
  );
}

export default ProductsFilter;
