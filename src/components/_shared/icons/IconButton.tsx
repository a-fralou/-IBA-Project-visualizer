import { SVGProps } from 'react';

export const IconButton = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="fieldButtonIcon" width="16" height="16" viewBox="0 0 16 16" x="224" y="32" {...props}>
        <path
            fill="none"
            stroke="#363636"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1"
            d="M3.5 3.5h9c1.105 0 2 0.895 2 2v5c0 1.105-0.895 2-2 2h-9c-1.105 0-2-0.895-2-2v-5c0-1.105 0.895-2 2-2z"
        />
        <path d="M5 6h6c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-6c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z" />
    </svg>
);
