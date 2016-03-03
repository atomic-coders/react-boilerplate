import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import App from './App';
import TestPage from './TestPage';

export default class AppRouter extends React.Component {
    constructor() {
        super();
        this.routes = (<Route path="/" component={App}>
            <Route path="test" component={TestPage}/>
        </Route>);
    }

    componentWillMount() {
        this.forceUpdate(); // a little hack to help us re-render when this module is reloaded
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={browserHistory}>{this.routes}</Router>
            </Provider>
        );
    }
}

AppRouter.propTypes = {
    store: React.PropTypes.object
};
