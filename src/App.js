import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Iframe from "react-iframe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

const link = "http://localhost:8080/api/report?name=sample_report&output=";

function App() {
  const [url, setUrl] = useState(`${link}pdf`);
  const changeOutputType = (type) => {
    setUrl(`${link}${type}`);
  };

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
                <Dropdown.Item onClick={() => changeOutputType("pdf")}>
                  pdf (default)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeOutputType("docx")}>
                  word
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeOutputType("xlsx")}>
                  excel
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <Iframe
              url={url}
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
