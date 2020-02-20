import React, { Component } from 'react'
import {
    Container, 
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap';
import Spinner from './spinner/Spinner';

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import './ShoppingList.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getItems, deleteItem} from '../store/actions/itemActions';

 class ShoppingList extends Component {
        
    componentDidMount(){
        this.props.onGetItems()
    }
    render() {
        const {items} = this.props.item;
        const list = this.props.loading ? <Spinner/> :  <div>
        <Container>  
            <ListGroup>
                <TransitionGroup className="Shopping-list">
                    {items.map(({_id, name}) => (
                       <CSSTransition key={_id} timeout={200} className="myList">
                           <ListGroupItem>
                               <Button 
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => this.props.onDeleteItem(_id)}>
                                   &times;
                                </Button> 
                               {` ${name}`}
                           </ListGroupItem>
                       </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    </div>
        return list
    }
}

ShoppingList.propTypes = {
    onGetItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    loading: state.item.loading
})

const mapDispatchToProps = dispatch => {
    return {
        onGetItems: () => dispatch(getItems()),
        onDeleteItem: (id) => dispatch(deleteItem(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);