import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBContainer, MDBRow, MDBCol,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className='mb-3 mt-4'>
                    {items.map((item) => (
                        <MDBCol key={item.id} size='md'>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src={item.image} fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>{item.name}</MDBCardTitle>
                                    <MDBCardText>{item.price}</MDBCardText>
                                    <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

