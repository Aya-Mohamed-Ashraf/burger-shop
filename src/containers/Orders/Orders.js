import React, { Component, Fragment } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../components/hoc/withErrorHandler/withErrorHandler';



class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ orders: fetchedOrders, loading: false });
            }).catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {

        return (
            <Fragment>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </Fragment>
        );
    }
}

export default withErrorHandler(Orders, axios);