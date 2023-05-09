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
import { useSelector } from 'react-redux';

export default function App() {

    const items = useSelector((state) => state.allCart.items);

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
                                    <MDBBtn href='#'>Add to Cart</MDBBtn>
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