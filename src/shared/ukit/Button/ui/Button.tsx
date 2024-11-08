import { ButtonPropsType, ButtonSize } from '../ButtonTypes';
import './Button.scss';

export const Button = ({ 
    children, 
    onClick, 
    isPrimary = true, 
    isFullView = false, 
    isCenter = false,
    size = ButtonSize.XS, 
    className 
}: ButtonPropsType) => {
    const fullClass = isFullView ? 'Button_full' : '';
    const primaryClass = isPrimary ? 'Button_primary' : '';
    const sizeClass = `Button_${size}`;
    const centerClass = isCenter ? `Button_center` : '';

    return (
        <button 
            className={`Button ${fullClass} ${primaryClass} ${sizeClass} ${centerClass} ${className ?? ''}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}