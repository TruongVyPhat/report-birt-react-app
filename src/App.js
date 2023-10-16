import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Card style={{ marginTop: "10px" }}>
          <Card.Header>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose Viewer
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">.pdf (default)</Dropdown.Item>
                <Dropdown.Item href="#/action-2">.doc</Dropdown.Item>
                <Dropdown.Item href="#/action-3">.xls</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <Iframe
              url="http://localhost:8080/api/report?name=sample_report&output=HTML"
              width="100%"
              height="600px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
