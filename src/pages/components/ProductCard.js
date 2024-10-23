import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/features/CartSlice';
import Link from 'next/link';

export default function ProductCard() {
    const Products = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (<>
        <div className="m-2">
            <MDBContainer>
                <MDBRow className="mb-3 d-flex" >
                    {Products.map((product) => (
                        <MDBCol key={product.id} size="md">
                            <MDBCard style={{ width: "350px", marginTop: '60px' }}>
                                <MDBCardImage src={product.img} position="top" alt="..." />
                                <MDBCardBody>
                                    <MDBCardTitle>{product.name}</MDBCardTitle>
                                    <MDBCardText>{product.color}</MDBCardText>
                                    <MDBCardText>PKR {product.price}</MDBCardText>
                                    <Link href="/cart-page">
                                        <MDBBtn onClick={() => dispatch(addToCart(product))}>
                                            Add to Cart
                                        </MDBBtn></Link>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    ))}
                </MDBRow>
            </MDBContainer>
        </div>
    </>
    );
}