'use client';

import ListProductsCart from "@/features/ListProductsCart";
import { getProductsCart } from "@/shared/helpers";
import Button from "@/shared/ukit/Button";
import Container from "@/shared/ukit/Container";
import Headline, { HeadlineViews } from "@/shared/ukit/Headline";
import Section, { SectionPaggings } from "@/shared/ukit/Section";
import { getFormatCost } from "@/shared/utils";
import { Breadcrumb } from "antd";
import Link from "next/link";
import {ReactNode, useEffect, useState} from "react";
import style from "./CartPage.module.scss";
import {useSelector} from "react-redux";

const CartPage = (): ReactNode => {
    const breadcrumbs = [ 
        { title: <Link href="/">Главная</Link> },
        { title: <div>Корзина</div> }  
    ];

    const productsInCart = useSelector(getProductsCart);
    const getFullPrice = () => productsInCart.reduce(
        (acc, item) => {
            return acc + (item.count * item.product.cost);
        },
    0);
    const [fullPrice, setFullPrice] = useState<number>(getFullPrice());

    useEffect(() => {
        setFullPrice(getFullPrice());
    }, [productsInCart]);

    return (
        <>
            <Section padding={SectionPaggings.S}>
                <Container>
                    <Breadcrumb
                        items={breadcrumbs}
                    />
                    <Headline view={HeadlineViews.H1} style={{ marginBottom: 0 }}>
                        Корзина
                    </Headline>
                </Container>
            </Section>
            <Section style={{ paddingTop: '0' }}>
                <Container>
                    <ListProductsCart />
                    <div className={style.CartFooter}>
                        <div className={style.FullPrice}>
                            <span className={style.FullPrice__label}>Итого:</span>
                            <span className={style.FullPrice__value}>{ getFormatCost(fullPrice) }</span>
                        </div>
                        <Link
                            className={style.LinkNextStep}
                            href="/purchase"
                        >
                            <Button className={style.BtnNextStep}>
                                Перейти к оформлению
                            </Button>
                        </Link>
                    </div>
                </Container>
            </Section>
        </>
    );
}

export default CartPage;