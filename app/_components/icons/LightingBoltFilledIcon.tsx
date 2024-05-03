import { ComponentPropsWithoutRef } from "react";

export const LigthingboltFilledIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      className="lightingbolt-filled-icon"
      width={props.size}
      height={props.size}
      viewBox="0 0 63 63"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          fill="#7b38ef"
          d="M 32.5,-0.5 C 34.1667,-0.5 35.8333,-0.5 37.5,-0.5C 36.8268,7.87259 35.8268,16.2059 34.5,24.5C 41.1667,24.5 47.8333,24.5 54.5,24.5C 54.628,26.6547 54.128,28.6547 53,30.5C 44.904,41.048 37.0706,51.7147 29.5,62.5C 27.8333,62.5 26.1667,62.5 24.5,62.5C 25.1732,54.1274 26.1732,45.7941 27.5,37.5C 20.8333,37.5 14.1667,37.5 7.5,37.5C 7.37201,35.3453 7.87201,33.3453 9,31.5C 17.096,20.952 24.9294,10.2853 32.5,-0.5 Z"
        />
      </g>
    </svg>
  );
};
