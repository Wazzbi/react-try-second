import React, { Component } from 'react'; // import thru imrc !!! NECESARRY IMPORT

class Counter extends Component { // import thru cc and add class name
    state = {
        count: 0,
    };

    // we can add styles to element by creating object with styles
    // and then aplly like this <span style={ this.styles }>blabla</span>
    // second option is to add it directly like <span style={{ fontSize: 10 }}>blabla</span>
    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // }

    render() { 
        return (
            <>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count; // jsx is capable to add something like <h1>Zero</h1> instead plain 'Zero'
    }
}
 
export default Counter;