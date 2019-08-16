import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 128,
        height: 128,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 100,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

function TicketSecondStep({ actions, userInfo }) {
    const classes = useStyles();

    useEffect(() => {
        async function getProducts() {
            try {
                await actions.getUserInfo();
            } catch (err) {
                alert(err.message);
            }
        }

        getProducts();
    }, [actions])

    return (
        <Paper className={classes.container}>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid container direction="column" alignItems="flex-start" justify="space-between">
                    <Grid item xs={2}>
                        <Avatar src={userInfo.logoImage} className={classes.bigAvatar} />

                        <TextField
                            label="First Name"
                            className={classes.textField}
                            value={userInfo.name.first}
                            margin="normal"
                            disabled
                        />
                        <TextField
                            label="Last Name"
                            className={classes.textField}
                            value={userInfo.name.last}
                            margin="normal"
                            disabled
                        />
                        <TextField
                            label="Email"
                            className={classes.textField}
                            value={userInfo.email}
                            margin="normal"
                            disabled
                        />
                        <TextField
                            label="Phone"
                            className={classes.textField}
                            value={userInfo.phone}
                            margin="normal"
                            disabled
                        />

                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketSecondStep);