import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import appActions from '../actions/AppActions';
import {connect} from 'react-redux';
import Notification from './Notification';

export class App extends React.Component {

    componentWillMount() {
        this.context.router.listen(() => {
            this.props.dismissNotification();
        });
    }

    render() {
        const {alertType, message, dismissNotification} = this.props;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <a href="/">React Boilerplate</a>
                            </LinkContainer>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/test">
                            <NavItem>Test</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <Notification alertType={alertType} message={message} onDismiss={dismissNotification}/>
                {this.props.children}
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

App.propTypes = {
    dismissNotification: React.PropTypes.func,
    message: React.PropTypes.string,
    alertType: React.PropTypes.string,
    children: React.PropTypes.object
};

export default connect(state => state.AppReducer, appActions)(App);
