import { iconType } from "../iconType";
import {ReactNode} from "react";

export const CloseIcon = (
  {className, style, width = 15, height = 15}: iconType
):ReactNode => {
  return (
    <svg
      className={className}
      style={{...style}}
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6.44868L12.2309 1.71774C12.5213 1.42742 12.992 1.42742 13.2823 1.71774C13.5726 2.00805
            13.5726 2.47874 13.2823 2.76906L8.55132 7.5L13.2823 12.2309C13.5726 12.5213 13.5726 12.992 13.2823
            13.2823C12.992 13.5726 12.5213 13.5726 12.2309 13.2823L7.5 8.55132L2.76906 13.2823C2.47874 13.5726
            2.00805 13.5726 1.71774 13.2823C1.42742 12.992 1.42742 12.5213 1.71774 12.2309L6.44868 7.5L1.71774
            2.76906C1.42742 2.47874 1.42742 2.00805 1.71774 1.71774C2.00805 1.42742 2.47874 1.42742 2.76906 1.71774L7.5
            6.44868Z"
        fill="#BCBFC2"
      />
    </svg>
  )
}