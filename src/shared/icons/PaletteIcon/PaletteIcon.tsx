import { iconType } from "../iconType";

export const PaletteIcon = ({ className, style, width = 52, height = 52, fill = '#FF181F' }: iconType) => {
    return (
        <svg 
            className={className} 
            style={{ ...style }}
            width={width} 
            height={height} 
            viewBox="0 0 52 52" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M29.25 15.1666C29.8483 15.1666 30.3333 14.6816 30.3333 14.0833C30.3333 13.485 29.8483 13 29.25 13C28.6517 13 28.1667 13.485 28.1667 14.0833C28.1667 14.6816 28.6517 15.1666 29.25 15.1666Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M37.9167 23.8333C38.515 23.8333 39 23.3483 39 22.75C39 22.1517 38.515 21.6666 37.9167 21.6666C37.3184 21.6666 36.8333 22.1517 36.8333 22.75C36.8333 23.3483 37.3184 23.8333 37.9167 23.8333Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4167 17.3333C19.015 17.3333 19.5 16.8483 19.5 16.25C19.5 15.6517 19.015 15.1666 18.4167 15.1666C17.8184 15.1666 17.3333 15.6517 17.3333 16.25C17.3333 16.8483 17.8184 17.3333 18.4167 17.3333Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0833 28.1666C14.6817 28.1666 15.1667 27.6816 15.1667 27.0833C15.1667 26.485 14.6817 26 14.0833 26C13.485 26 13 26.485 13 27.0833C13 27.6816 13.485 28.1666 14.0833 28.1666Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 4.33331C14.0833 4.33331 4.33334 14.0833 4.33334 26C4.33334 37.9166 14.0833 47.6666 26 47.6666C28.0063 47.6666 29.5707 46.0503 29.5707 44.0093C29.5707 43.0625 29.1807 42.2001 28.6238 41.5718C27.9955 40.9456 27.6748 40.1591 27.6748 39.1343C27.6666 38.6575 27.7545 38.1838 27.9332 37.7416C28.1119 37.2995 28.3778 36.8978 28.7151 36.5605C29.0523 36.2233 29.454 35.9574 29.8962 35.7787C30.3384 35.6 30.812 35.5121 31.2888 35.5203H35.6135C42.224 35.5203 47.6493 30.0971 47.6493 23.4866C47.5908 13.026 37.8322 4.33331 26 4.33331Z" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}