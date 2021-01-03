import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  //* you can input values via attributes (row 19) or as children (row 20 + counter.jsx row 50)
  render() {
    // deconstruct props to get rid of redundant *this.props*
    const { counters, onReset, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
