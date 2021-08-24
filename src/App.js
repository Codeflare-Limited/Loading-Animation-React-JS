import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  toggleLoader = () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <div className="btnContainer">
          {this.state.loading ? (
            <Spinner
              style={{ marginBottom: 27 }}
              animation="border"
              variant="danger"
            />
          ) : null}

          <Button
            onClick={() => this.toggleLoader()}
            variant={"primary"}
            size="lg"
          >
            {this.state.loading ? "Hide Loader" : "Show Loader"}
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
