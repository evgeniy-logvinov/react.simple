import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

function TicketFirstStep({ shop }) {
    const classes = useStyles();
    const products = shop.basket.products || [];
    const countSumm = products.reduce((summ, el) => summ + el.count, 0);
    const priceSumm = products.reduce((summ, el) => summ + el.price * el.count, 0);

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Count</TableCell>
                        <TableCell align="left">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(product => (
                        <TableRow key={product.name}>
                            <TableCell component="th" scope="row">
                                <Avatar src={product.logoImage} className={classes.bigAvatar} />
                            </TableCell>
                            <TableCell>
                                {product.name}
                            </TableCell>
                            <TableCell align="left">{product.description}</TableCell>
                            <TableCell align="left">{product.count}</TableCell>
                            <TableCell align="left">{product.price}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow key="all">
                        <TableCell component="th" scope="row">
                        </TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left">{countSumm}</TableCell>
                        <TableCell align="left">{priceSumm}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </Paper>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const mapStateToProps = (state) => {
    return {
        security: { ...state.security },
        shop: { ...state.shop },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketFirstStep);


