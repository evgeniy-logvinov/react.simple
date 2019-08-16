import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductPage from './ProductPage';
import { Link, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    card: {
        height: 400,
        maxWidth: 345,
        borderColor: 'red',
        borderSize: '1px',
    },
    cardContent: {
        height: 200,
    },
    cardDescription: {
        overflow: 'hidden',
    },
    cardName: {
        overflow: 'hidden',
    },
    media: {
        height: 140,
    },
    price: {
        marginLeft: 70,
    }
});

const ProductCard = ({ item, match, actions, shop }) => {
    const classes = useStyles();
    const product = shop.basket.products.find(el => el.id === item.id)
    const count = product ? product.count : 0;

    const handleAddProduct = () => {
        actions.addProductToBasket(item);
    }

    const handleRemoveProduct = () => {
        actions.removeProductFromBasket(product);
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.logoImage}
                    title={item.name}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="subtitle2" className={classes.cardName}>
                        {item.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" className={classes.cardDescription}>
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary" component={Link} to={`${match.url}/${item.id}`}>
                    Learn More
                </Button> */}
                <Button size="small" variant="contained" color="secondary" onClick={handleAddProduct}>
                    <Icon fontSize="small" className={classes.icon}>add_shopping_cart</Icon>
                </Button>
                <Typography gutterBottom variant="subtitle1">
                    {count}
                </Typography>
                <Button disabled={count === 0} size="small" variant="contained" color="secondary" onClick={handleRemoveProduct}>
                    <DeleteIcon fontSize="small" />
                </Button>
                <Typography gutterBottom variant="subtitle1" className={classes.price}>
                    $ {item.price}
                </Typography>
            </CardActions>
            <Route path={`${match.url}/:productId`} component={ProductPage} />
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductCard));
