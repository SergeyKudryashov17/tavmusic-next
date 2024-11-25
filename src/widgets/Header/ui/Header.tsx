'use client'

import './Header.scss';
import Logo from "@/shared/ukit/Logo";
import CartBtn from "@/features/CartBtn";
import Navigation from "@/features/Navigation";
import ContactList from '@/features/ContactList';
import Container from '@/shared/ukit/Container';
import Link from 'next/link';
// import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { getProductsCart } from '@/shared/helpers';
import {useSelector} from "react-redux";

export const Header = () => {
    const productsCart = useSelector(getProductsCart);

    return ( 
        <div className="Header">
            <Container>
                <div className="Header__wrapper">
                    <div className="Header__letfPart">
                        <Link href="/">
                            <Logo classNameContainer="Logo_header"/>
                        </Link>
                        <ContactList />
                    </div>
                        
                    <div className="Header__rightPart">
                        <Navigation />
                        <Link href="/cart">
                            <CartBtn productCount={productsCart.length}/>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}