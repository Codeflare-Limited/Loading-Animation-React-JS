import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Button } from "react-bootstrap";
import "./App.css";
import { Link } from "react-router-dom";

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
        <ul className="nav-link-style">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
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
