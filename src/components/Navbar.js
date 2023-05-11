import { useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';



export default function App() {
    const { cart, totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand>Phone Store</MDBNavbarBrand>
                <span>

                    <Link to="/"> All products </Link>
                </span>
                <MDBBtn color='dark'>
                    <Link to="/cart"> Cart : {totalQuantity}</Link>
                </MDBBtn>
            </MDBContainer>
        </MDBNavbar>
    );
}