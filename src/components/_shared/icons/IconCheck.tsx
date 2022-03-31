import { SVGProps } from 'react';

export const IconCheck = (props: SVGProps<SVGSVGElement>) => {
    const { fill } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="rule_filledIcon" width="16" height="16" viewBox="0 0 16 16" x="96" y="32" fill={fill}>
            <path d="M8 1c-3.9 0-7 3.1-7 7s3.1 7 7 7c3.9 0 7-3.1 7-7s-3.1-7-7-7zM7 11l-2.7-2.7 0.9-0.8 1.8 1.8 4-3.9 0.9 0.8-4.9 4.8z" />
        </svg>
    );
};
