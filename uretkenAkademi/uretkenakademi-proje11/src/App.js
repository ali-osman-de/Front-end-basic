import React from "react";
import TableCoins from "./TableCoins";
import Navi from "./Navi";
import Head from "./Head";
import News from "./News";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Navi />
      <Head />
      <Container className="my-5">
        <Row>
          <Col xs="7">
            <TableCoins />
          </Col>
          <Col xs="5" className="ps-5">
            <News />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
