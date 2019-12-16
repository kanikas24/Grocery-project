import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Add extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn align-center flex">
        <Row className="align-items-center">
          
          <Col xs="6" sm="12" className="align-items-center">
            <Card>
              <CardHeader>
                <strong>Add Products</strong>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input type="text" id="productName" placeholder="Enter your product name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="productDesc">Product Description</Label>
                  <Input type="textarea-input" rows="5" placeholder="Description..." id="productDesc" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input type="text" id="Quantity" placeholder="Enter quantity of product" />
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="Brand">Product Brand</Label>
                      <Input type="text" id="brand" placeholder="Enter brand of product" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="supplier"> Product Supplier</Label>
                      <Input type="text" id="postal-code" placeholder="Product Supplier" />
                    </FormGroup>
                  </Col>
                </FormGroup>
                 <FormGroup>
                  <Label htmlFor="Cost">Price(₹)</Label>
                  <Input type="text" id="cost" placeholder="Product Price" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="Discount">Discount offered(if any)</Label>
                  <Input type="text" id="discount" placeholder="Discount in percent" />
                </FormGroup>
              </CardBody>
              <Col sm xs="12" className="text-center" style = {{marginBottom:10}}>
                <Button color="success" className="btn-pill">
                  <i className="fa fa-lightbulb-o"></i>&nbsp;Submit
                </Button>
              </Col>
            </Card>

          </Col>

        </Row>
       
      </div>
    );
  }
}

export default Add;
