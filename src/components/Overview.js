import React, {Component} from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tasksArray.map(item => {
          return (
            <div key={item.id} style={{display:"flex", justifyContent:'center', }}>
              <div style={{marginRight:'10px'}}>{`Todo ${item.position}: ${item.text}`}</div>
              <button>x</button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Overview;
