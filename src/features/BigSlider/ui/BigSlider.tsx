import SlickSlider from '@/shared/ukit/SlickSlider';
import './BigSlider.scss';
import Button, { ButtonSize } from '@/shared/ukit/Button';
import background from '@/shared/assets/img/guitars.png';

export const BigSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    console.log(background);

    return (
        <div className="BigSlider">
            <SlickSlider settings={settings}>
                <div className="BigSlider__slide">
                    <div className="BigSlider__background" style={{ backgroundImage: `url(${background.src})` }}></div>
                    <div className="BigSlider__shadow"></div>
                    <h1 className="BidSlider__title">Доставляем <br />музыку</h1>
                    <p className="BidSlider__text">
                        Доставляем музыкальное оборудование для всех и каждого
                    </p>
                    <Button 
                        size={ButtonSize.L} 
                        isPrimary={true}
                        isCenter={true}
                    >
                        Перейти каталог
                    </Button>
                </div>
                <div className="BigSlider__slide">
                    <div className="BigSlider__background" style={{ backgroundImage: `url(${background.src})` }}></div>
                    <div className="BigSlider__shadow"></div>
                    <h1 className="BidSlider__title">Доставляем <br />музыку</h1>
                    <p className="BidSlider__text">
                        Доставляем музыкальное оборудование для всех и каждого
                    </p>
                    <Button 
                        size={ButtonSize.L} 
                        isPrimary={true}
                        isCenter={true}
                    >
                        Перейти каталог
                    </Button>
                </div>
                <div className="BigSlider__slide">
                    <div className="BigSlider__background" style={{ backgroundImage: `url(${background.src})` }}></div>
                    <div className="BigSlider__shadow"></div>
                    <h1 className="BidSlider__title">Доставляем <br />музыку</h1>
                    <p className="BidSlider__text">
                        Доставляем музыкальное оборудование для всех и каждого
                    </p>
                    <Button 
                        size={ButtonSize.L} 
                        isPrimary={true}
                        isCenter={true}
                    >
                        Перейти каталог
                    </Button>
                </div>
            </SlickSlider>
        </div>
    )
}