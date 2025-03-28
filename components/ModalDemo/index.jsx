import Button from '@material-ui/core/Button';
import DemoStyle from '../DemoStyle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class ModalDemo extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return ( <
            div className = { classes.root } >
            <
            Dialog open = { open }
            onClose = { this.handleClose } >
            <
            DialogTitle > Messages - inbox < /DialogTitle> <
            DialogContent >
            <
            DialogContentText > You have a new notification! < /DialogContentText> < /
            DialogContent > <
            DialogActions >
            <
            Button color = "primary"
            onClick = { this.handleClose } >
            Close <
            /Button> < /
            DialogActions > <
            /Dialog> <
            Typography variant = "h3"
            gutterBottom >
            Stay Healthy - Chat <
            /Typography> <
            Typography variant = "subtitle1"
            gutterBottom >
            Messages - Unread <
            /Typography> <
            Button variant = "contained"
            color = "secondary"
            onClick = { this.handleClick } >
            Inbox <
            /Button> < /
            div >
        );
    }
}

ModalDemo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default DemoStyle(withStyles(styles)(ModalDemo));