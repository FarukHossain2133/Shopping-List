import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    ModalFooter
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../store/actions/itemActions';

class ItemModel extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }

        // Add item via add item action
        this.props.onAddItem(newItem)
    }

    render(){
        return(
            <div>
                <Container>
                    <Button 
                        color="dark"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}>
                        Add Item
                    </Button>
                    <Modal 
                        isOpen = {this.state.modal}
                        toggle = {this.toggle}>

                        <ModalHeader toggle={this.toggle}>
                            Add to Shopping List
                        </ModalHeader>
                            <Form onSubmit = {this.onSubmit}>
                                <ModalBody>
                                    <FormGroup>
                                        <Label for = "item">Item</Label>
                                        <Input 
                                            type="text"
                                            name="name"
                                            id="item"
                                            placeholder="Add Shopping Item"
                                            onChange={this.onChange}/>
                                    </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="submit" color="success" onClick={this.toggle}>Add Item</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
            onAddItem: (item) => dispatch(addItem(item))
        }
    }
export default connect(null, mapDispatchToProps)(ItemModel);