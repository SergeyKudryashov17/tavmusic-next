import { iconType } from "../iconType";

export const ClockIcon = ({ className, style, width = 12, height = 12 }: iconType) => {
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
            <path d="M6 3V6L8 7M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#777E90" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}