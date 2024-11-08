import logo from '../assets/logo.png';
import { LogoPropsType } from '../LogoPropsType';
import Image from 'next/image';
import './Logo.scss';

export const Logo = ({ classNameContainer, classNameImg }: LogoPropsType) => {
    return (
        <div className={`Logo ${classNameContainer}`}>
            <Image 
                src={logo} 
                className={`Logo__img ${classNameImg || ''}`}
                alt="TAV Music"
            />
        </div>
    )
}