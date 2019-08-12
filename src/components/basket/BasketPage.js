import React, { useEffect } from 'react';
import BasketCard from './BasketCard';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flex: 1,
    },
    gridItem: {
        width: 180,
        maxWidth: 345,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

function BasketPage({ actions, shop }) {
    const classes = useStyles();
    const products = shop.basket.products || [];

    useEffect(() => {
        async function getProducts() {
            try {
                await actions.getProducts();
            } catch (err) {
                alert(err.message);
            }
        }

        getProducts();
    }, [actions])

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Products in basket</ListSubheader>
                </GridListTile>
                {products.map(tile => (
                    <GridListTile key={tile.id} className={classes.gridItem} style={{ height: 'auto' }}>
                        <BasketCard item={tile} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};


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

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);

