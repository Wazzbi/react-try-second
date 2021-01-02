import React, { Component } from 'react'; //! import thru imrc NECESARRY IMPORT checkout extension Simple React Snippets

class Counter extends Component {
    // import thru cc and add class name (checkout extension Simple React Snippets)
    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // TODO:  zkusit updejtovat tags a vyjmout v rendru KEY jak se to bude chovat
    state = {
        //value: this.props.counter.value, // expecting passed value thru attribute (e.g. counters.jsx row 19)
        tags: ['tag1', 'tag2', 'tag3']
    };

    // we can add styles to element by creating object with styles
    // and then aplly like this <span style={ this.styles }>blabla</span>
    // second option is to add it directly like <span style={{ fontSize: 10 }}>blabla</span>
    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'
    // }

    //* conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        }

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    //? moved to counter.jsx that is controller of this component when local state deleted
    //* note used via reference (/w brackets in the end)
    //* if NOT used like arrow function then needed to implement contructor as above
    // handleIncrement = () => {
    //     //console.warn('Increment Clicked', this);
    //     //* setState is built-in fn from imported Component
    //     this.setState({ value: this.state.value + 1 });
    // };

    render() {
        return (
            <>
                {this.props.children}
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                <div>{this.renderTags()}</div>
            </>
        );
    }

    //? in case to pass parameter on event then use wrapper arrow function
    //? <button onClick={() => this.handleIncrement()} >Increment</button>

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value; // jsx is capable to add something like <h1>Zero</h1> instead plain 'Zero'
    }
}

export default Counter;
