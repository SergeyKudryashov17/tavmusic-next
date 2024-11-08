import { iconType } from "../iconType";

export const PackageIcon = ({ className, style, width = 52, height = 52, fill = '#FF181F' }: iconType) => {
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
            <path d="M16.25 9.25166L35.75 20.41M7.15 15.1667L26 26M26 26L44.85 15.1667M26 26V47.6667M45.5 
            17.3333C45.4992 16.5734 45.2986 15.8271 44.9183 15.1692C44.538 14.5113 43.9914 13.9649 43.3333 
            13.585L28.1667 4.91832C27.5079 4.538 26.7607 4.33777 26 4.33777C25.2393 4.33777 24.4921 4.538 
            23.8333 4.91832L8.66667 13.585C8.00857 13.9649 7.46196 14.5113 7.08167 15.1692C6.70138 15.8271 
            6.50078 16.5734 6.5 17.3333V34.6667C6.50078 35.4266 6.70138 36.1729 7.08167 36.8308C7.46196 
            37.4887 8.00857 38.035 8.66667 38.415L23.8333 47.0817C24.4921 47.462 25.2393 47.6622 26 
            47.6622C26.7607 47.6622 27.5079 47.462 28.1667 47.0817L43.3333 38.415C43.9914 38.035 44.538 
            37.4887 44.9183 36.8308C45.2986 36.1729 45.4992 35.4266 45.5 34.6667V17.3333Z" 
            stroke={fill} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" />
        </svg>
    )
}