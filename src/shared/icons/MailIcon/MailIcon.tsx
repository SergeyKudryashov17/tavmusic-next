import { iconType } from "../iconType";

export const MailIcon = ({ className, style, width = 12, height = 12 }: iconType) => {
    return (
        <svg 
            className={className} 
            style={{ ...style }}
            width={width} 
            height={height} 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M11 3.5L6.515 6.35C6.36064 6.44671 6.18216 6.49801 6 6.49801C5.81784 6.49801 5.63936 6.44671 5.485 6.35L1 3.5M2 2H10C10.5523 2 11 2.44772 11 3V9C11 9.55228 10.5523 10 10 10H2C1.44772 10 1 9.55228 1 9V3C1 2.44772 1.44772 2 2 2Z" stroke="#777E90" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}