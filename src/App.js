import React, { Component } from 'react';
import {Button, FormControl} from 'react-bootstrap';
import brain from 'brain.js';
import {data} from './TrainingData';
import './App.css';

class App extends Component {
  constructor(props,context) {
    super(props,context);

    this.runNetwork = this.runNetwork.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      tweet: ''
    }
  }

  runNetwork(network, tweet) {
    var output = network.run(tweet);
    console.log(output);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ tweet: value });
  }

  render() {

    const network = new brain.NeuralNetwork();
    network.train(data);

    return (
      <div>
        <FormControl
          type="text"
          maxLength={280}
          placeholder="Tweet something..."
          onChange={this.handleChange}
        />
        <Button 
          bsStyle="primary"
          onClick={this.runNetwork(network, this.state.tweet)}>
          Run!
        </Button>
      </div>
    );
  }
}

export default App;