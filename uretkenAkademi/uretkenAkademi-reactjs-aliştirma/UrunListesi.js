import React, { Component } from "react";
import { ListGroup, ListGroupItem, Alert, Card,CardBody,CardHeader,CardTitle, CardText } from "reactstrap";

class UrunListesi extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title.baslik2}</h1>
        <h6>{this.props.title.ilaveBilgi2}</h6>
        <Alert>
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>

        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>

        <Card
          className="my-2"
          color="warning"
          inverse
        >
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UrunListesi;
