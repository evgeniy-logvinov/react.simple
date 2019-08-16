import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 10,
    },
    mainGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
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

function ProfilePage({ actions, userInfo }) {
    const classes = useStyles();
    const [email, setEmail] = useState(''); // '' is the initial state value
    const [first, setFirst] = useState(''); // '' is the initial state value
    const [last, setLast] = useState(''); // '' is the initial state value
    const [phone, setPhone] = useState(''); // '' is the initial state value
    const [open, setOpen] = useState(false);

    async function handleSave() {
        try {
            await actions.updateUser({ email, phone, name: { first, last } });
            await actions.getUserInfo();
            setOpen(true);
        } catch (err) {
            alert(err.message);
        }
    }

    function handleClose() {
        setOpen(false);
    }

    useEffect(() => {
        async function getProducts() {
            try {
                await actions.getUserInfo();
                setFirst(userInfo.name.first)
                setLast(userInfo.name.last)
                setEmail(userInfo.email)

                if (userInfo.phone) {
                    setPhone(userInfo.phone)
                }
            } catch (err) {
                alert(err.message);
            }
        }

        getProducts();
        console.log('test')
    }, [actions, userInfo.name.first, userInfo.name.last, userInfo.phone, userInfo.email])

    return (
        <Paper className={classes.container}>
            <form className={classes.form} noValidate autoComplete="off">
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Grid item xs={2}>
                        <Avatar src={userInfo.logoImage} className={classes.bigAvatar} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={first}
                            onInput={e => setFirst(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            value={last}
                            onInput={e => setLast(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onInput={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="phone"
                            id="phone"
                            value={phone}
                            onInput={e => setPhone(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Info Saved"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        User information saved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper >
    );
}

const mapStateToProps = (state) => {
    return { ...state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);