import {Alert} from 'react-bootstrap';
import React from 'react';

export default class Notification extends React.Component {
    render() {
        const {alertType, message, onDismiss} = this.props;
        if (message) {
            return (
                <div className="container">
                    <Alert bsStyle={alertType} onDismiss={onDismiss}>
                        <p>{message}</p>
                    </Alert>
                </div>
            );
        }
        return null;
    }
}

Notification.propTypes = {
    dismissNotification: React.PropTypes.func,
    message: React.PropTypes.string,
    alertType: React.PropTypes.string,
    onDismiss: React.PropTypes.func
};
