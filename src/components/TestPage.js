import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/TestPageActions';

class TestPage extends React.Component {
    constructor() {
        super();
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleDecrement(event) {
        event.preventDefault();
        this.props.decrement();
    }

    handleIncrement(event) {
        event.preventDefault();
        this.props.increment();
    }

    render() {
        return (
            <form>
                <button onClick={this.handleDecrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.handleIncrement}>+</button>
            </form>
        );
    }
}

TestPage.propTypes = {
    count: React.PropTypes.number,
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func
};

export default connect(
    state => {
        return {
            count: state.TestPageReducer.count
        };
    },
    actions
)(TestPage);
