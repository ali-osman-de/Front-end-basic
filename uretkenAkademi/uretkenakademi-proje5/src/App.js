import React, { Component } from "react";
import Cel from "./Cel";
import Fah from "./Fah";
import Kel from "./Kel";
import Navi from "./Navi";
import { Container, Col, Row, Button } from "reactstrap";

class App extends Component {
  state = {
    derece: 0,
  };

  SıcaklıkDegistir = () => {
    this.setState({ derece: this.state.derece + 1 });
  };

  SıcaklıkSıfırla = () => {
    this.setState({ derece: 0 });
  };

  render() {
    let dereceCel = this.state.derece;
    let dereceFah = this.state.derece * (9 / 5) + 32;
    let dereceKel = this.state.derece + 273.15;

    return (
      <div>
        <Container>
          <Navi />
          <Row>
            <Col
              xs="6"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial",
                marginTop: "50px",
              }}
            >
              <h1
                style={{
                  marginTop: "50px",
                }}
              >
                Bugün Hava Nasıl ?
              </h1>
              <h5
                style={{
                  marginTop: "50px",
                }}
              >
                Şu an ki sıcaklık: {this.state.derece}
              </h5>
              <div
                style={{
                  marginTop: "50px",
                }}
              >
                <Button color="warning" onClick={() => this.SıcaklıkDegistir()}>
                  Sıcaklık Artır
                </Button>
              </div>
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Button color="dark" onClick={() => this.SıcaklıkSıfırla()}>
                  Sıcaklık Sıfırla
                </Button>
              </div>
            </Col>

            <Col
              xs="6"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial",
                marginTop: "50px",
              }}
            >
              <h4
                style={{
                  marginTop: "60px",
                }}
              >
                3 Birimde Sıcaklık Ölçümü
              </h4>
              <Cel dereceCel={dereceCel} />
              <Fah dereceFah={dereceFah} />
              <Kel dereceKel={dereceKel} />
            </Col>
          </Row>

          <Row>
            <Col xs="6">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
