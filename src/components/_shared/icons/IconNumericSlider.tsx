import { SVGProps } from 'react';

export const IconNumericSlider = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="fieldNumericSliderIcon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        x="128"
        y="64"
        {...props}
    >
        <path d="M10.333 2v3.2h-1.667v-3.2h-1.667v4.8h3.333v3.2h1.667v-8z" />
        <path d="M14 12v1h-6.092c-0.209-0.599-0.774-1-1.408-1s-1.199 0.401-1.408 1h-3.092v-1h-1v3h1v-1h3.092c0.209 0.599 0.774 1 1.408 1s1.199-0.401 1.408-1h6.092v1h1v-3h-1z" />
    </svg>
);
