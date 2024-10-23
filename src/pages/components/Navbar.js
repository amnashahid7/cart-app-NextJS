import React, { useEffect } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Link from "next/link";


export default function Navbar() {


    return (
        <MDBNavbar dark bgColor="dark">
            <MDBContainer fluid>
                <MDBNavbarBrand><i style={{ fontWeight: "bolder" }}>Outfitters</i></MDBNavbarBrand>
                <span style={{ color: "white" }}>
                    <Link href={"/"}>All Products</Link>
                </span>
                <MDBBtn color="light">
                    <Link style={{ textDecoration: "none", color: "inherit" }} href={"/cart-page"}>Cart </Link>
                </MDBBtn>

            </MDBContainer>
        </MDBNavbar>
    );
}
