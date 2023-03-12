import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

class Content extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({
      data: response.data,
    });
  };
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>User Name</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Content;
