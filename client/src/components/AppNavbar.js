import React, { Component } from 'react'
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink ,
    Container,
    Input
} from 'reactstrap';

 class AppNavbar extends Component {
     state = {
        isOpen: true,
        color: 'dark'
     }

     toggle = () => {
         this.setState({
             isOpen: !this.state.isOpen
         })
     }
     changeColor = (e) => {
        this.setState({
            color: e.target.value
        })
     }
    render() {
        // console.log(this.state.isOpen)
        return (
            <div>
                <Navbar color={this.state.color} dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping-List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={!this.state.isOpen} navbar>
                            <Nav className="ml-auto">
                                <NavItem>
                                    <NavLink href="https://www.facebook.com/farukahmed.faruk.102">Facebook</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                
            </div>
        )
    }
}
export default AppNavbar;