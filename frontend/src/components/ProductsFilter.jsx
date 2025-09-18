import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Search, BrushCleaning } from "lucide-react";

function ProductsFilter({ filters, setFilters, categories, suppliers }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev, // Spread previous filters values
      [name]: value, // Overwrite the changed field
    }));
  };

  const handleClear = () => {
    setFilters({
      name: "",
      category_id: "",
      supplier_id: "",
      price_higher_than: "",
      price_lower_than: "",
      stock_higher_than: "",
      stock_lower_than: "",
      is_visible: "",
      is_available: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>By name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={filters.name}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>By category</strong>
          </Form.Label>
          <Form.Select
            name="category_id"
            value={filters.category_id}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.details.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>By supplier</strong>
          </Form.Label>
          <Form.Select
            name="supplier_id"
            value={filters.supplier_id}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          >
            <option value="">Select a supplier</option>
            {suppliers.map((supplier, index) => (
              <option key={index} value={supplier.id}>
                {supplier.details.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Unit price higher than</strong>
          </Form.Label>
          <Form.Control
            type="number"
            name="price_higher_than"
            value={filters.price_higher_than}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Unit price lower than</strong>
          </Form.Label>
          <Form.Control
            type="number"
            name="price_lower_than"
            value={filters.price_lower_than}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Stock quantity higher than</strong>
          </Form.Label>
          <Form.Control
            type="number"
            name="stock_higher_than"
            value={filters.stock_higher_than}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Stock quantity lower than</strong>
          </Form.Label>
          <Form.Control
            type="number"
            name="stock_lower_than"
            value={filters.stock_lower_than}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row sm="4" className="d-flex align-items-center">
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Is visible</strong>
          </Form.Label>
          <Form.Select
            name="is_visible"
            value={filters.is_visible}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          >
            <option value="">Visible/Not visible</option>
            <option value="true">Only visible</option>
            <option value="false">Only not visible</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="d-flex flex-column">
          <Form.Label>
            <strong>Is available</strong>
          </Form.Label>
          <Form.Select
            name="is_available"
            value={filters.is_available}
            onChange={handleChange}
            style={{ cursor: "pointer" }}
          >
            <option value="">Available/Not available</option>
            <option value="true">Only available</option>
            <option value="false">Only not available</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <div className="d-flex justify-content-end align-items-center gap-3">
        {/* <Button
          type="submit"
          variant="outline-success"
          className="p-2 d-flex align-items-center gap-2 shadow-sm mt-4"
        >
          <Search size={24} />
          Apply filters
        </Button> */}
        <Button
          variant="outline-warning"
          className="p-2 d-flex align-items-center gap-2 shadow-sm mt-4"
          onClick={handleClear}
        >
          <BrushCleaning size={24} />
          Clear filters
        </Button>
      </div>
    </Form>
  );
}

export default ProductsFilter;
