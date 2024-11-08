/* Hooks */
import { useEffect, useState } from "react";

/* Types */
import { IProduct } from "@/entities/Product";
import type { TabsProps } from 'antd';

/* Feature */
import ProductGallery from "@/features/ProductGallery";

/* UI */
import Button from "@/shared/ukit/Button";
import Counter from "@/shared/ukit/Counter";
import { ConfigProvider, Tabs } from 'antd';
import { CartFillIcon } from "@/shared/icons";

/* Style */
import './ProductInfo.scss';

/* Utils */
import ProductCharsList from "./ProductChars";
import { getFormatCost, getShortText } from "@/shared/utils";
import { 
    isAddedToCart, 
    addProductToCart, 
    removeProductFromCart, 
    changeQuantityProduct 
} from "@/shared/helpers";


export const ProductInfo = ({ ...productData }: IProduct) => {
    const addedToCart = isAddedToCart(productData.id);

    const [flagInCart, setFlagInCart] = useState<boolean>(addedToCart);
    const [countProduct, setCountProduct] = useState<number>(1);

    const shortDesc = productData.description ? getShortText(productData.description, 130) : '';
    const formatCost = getFormatCost(productData.cost);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Описание',
            children: (
                <div className="ProductInfo__tabContent">
                    { productData.description }
                </div>
            ),
        },
        {
            key: '2',
            label: 'Характеристики',
            children: (
                <div className="ProductInfo__tabContent">
                    <ProductCharsList list={productData.characteristics}/>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Отзывы',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        },
        {
            key: '4',
            label: 'Доставка',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        },
        {
            key: '5',
            label: 'Оплата',
            children: (
                <div className="ProductInfo__tabContent">
                    Нет информации
                </div>
            ),
        }
    ];

    function addToCart() {
        addProductToCart(productData);
        if (countProduct > 1) {
            changeQuantityProduct(productData.id, countProduct);
        }

        setFlagInCart(true);
    }

    function removeToCart() {
        removeProductFromCart(productData.id);
        setFlagInCart(false);
    }

    function increaseCount() {
        setCountProduct(countProduct + 1);
    }

    function decreaseCount() {
        const newCount = countProduct > 1 ? countProduct - 1 : 1;
        setCountProduct(newCount);
    }

    useEffect(() => {
        changeQuantityProduct(productData.id, countProduct)
    }, [countProduct]);

    return (
        <div className="ProductInfo">
            <div className="ProductInfo__main">
                <ProductGallery 
                    className="ProductInfo__gallery" 
                    photoList={[productData.image.src]} 
                />
                <div className="ProductInfo__data">
                    <div className="ProductInfo__title">
                        { productData.name }
                    </div>
                    <div className="ProductInfo__cost">
                        { formatCost } ₽
                    </div>
                    <div className="ProductInfo__description">
                        { shortDesc }
                    </div>            
                    <div className="ProductInfo__controls">
                        { !flagInCart ? (
                            <Button 
                                className="ProductInfo__btnToCart"
                                onClick={addToCart}
                            >
                                <CartFillIcon fill="#FFFFFF" style={{ marginRight: '15px' }} />
                                В корзину
                            </Button>
                        ) : (
                            <Button 
                                isPrimary={false} 
                                className="ProductInfo__btnRemoveCart"
                                onClick={removeToCart}>
                                <CartFillIcon fill="#FF181F" style={{ marginRight: '15px' }} />
                                Убрать
                            </Button>
                        )}

                        <Counter 
                            className="ProductInfo__counter" 
                            count={countProduct} 
                            onIncrease={increaseCount}
                            onDecrease={decreaseCount}
                        />
                    </div>
                </div>
            </div>

            <div className="ProductInfo__tabs">
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                inkBarColor: 'var(--accent-color)',
                                itemActiveColor: 'var(--accent-color)',
                                itemSelectedColor: 'var(--accent-color)',
                                itemHoverColor: 'var(--light-accent-color)',
                                titleFontSize: 16
                            },
                        },
                    }}
                >
                    <Tabs 
                        defaultActiveKey="1" 
                        items={items} 
                    />
                </ConfigProvider>
            </div>
        </div>
    );
}