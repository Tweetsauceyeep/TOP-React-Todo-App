import './App.css';
import React, {Component} from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksArray: [],
      tasks: {text: '', id: uniqid()},
    };
  }

  handleChange = e => {
    this.setState({
      tasks: {text: e.target.value, id: this.state.tasks.id},
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      tasksArray: this.state.tasksArray.concat(this.state.tasks),
      tasks: {text: '', id: uniqid()},
    });
  };

  render() {
    const {tasks, tasksArray} = this.state;
    return (
      <div className="App" style={{marginTop: 20}}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Todo..."
            onChange={this.handleChange}
            value={tasks.text}
          />
          <button type="submit">Submit</button>
        </form>
        <Overview tasksArray={tasksArray} />
      </div>
    );
  }
}

export default App;
