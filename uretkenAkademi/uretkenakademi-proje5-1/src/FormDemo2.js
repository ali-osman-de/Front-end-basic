import React, { Component } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
  };
  onChangeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " veri alındı!");
    alertify.success(this.state.password + " veri alındı!");
    alertify.success(this.state.city + " veri alındı!");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your e-mail"
              type="email"
              onChange={this.onChangeHandle}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={this.onChangeHandle}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">Select City</Label>
            <Input
              id="city"
              name="city"
              type="select"
              placeholder="Select your city"
              onChange={this.onChangeHandle}
            >
              <option>İstanbul</option>
              <option>Bursa</option>
              <option>Kayseri</option>
              <option>Ankara</option>
              <option>İzmir</option>
            </Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default FormDemo2;
