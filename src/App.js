import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/litera/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import classNames from "classnames";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      title: this.state.newUser.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.unshift(newItem);

    //update state
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="addItem">
          Write Something!
          <br />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="writer"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.newUser}
            onChange={e => this.updateInput("newUser", e.target.value)}
          ></input>
          <textarea
            className="form-control mb-3"
            aria-label="Text area"
            type="text"
            placeholder="Type anything"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="btn btn-success btn-block"
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
        </div>
        <div className="container-fluid" id="addItem">
          <CardDeck>
            <Row>
              {this.state.list.map(item => {
                return (
                  <Col sm="2">
                    <Card
                      key={item.id}
                      style={{ width: "18rem" }}
                      classNames={"block"}
                    >
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.value}</Card.Text>
                      </Card.Body>
                    </Card>
                    <div className="mt-3"></div>
                  </Col>
                );
              })}
            </Row>
          </CardDeck>
        </div>
      </div>
    );
  }
}
export default App;
