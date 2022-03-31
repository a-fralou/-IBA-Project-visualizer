import { SVGProps } from 'react';

type Variant = 'up' | 'left' | 'right' | 'down';

interface IconChevronProps extends SVGProps<SVGSVGElement> {
    variant?: Variant;
}

export const IconChevron = (props: IconChevronProps) => {
    const { variant = 'down' } = props;

    let transform;
    switch (variant) {
        case 'up':
            transform = 'rotate(180deg)';
            break;
        case 'left':
            transform = 'rotate(90deg)';
            break;
        case 'right':
            transform = 'rotate(-90deg)';
            break;
        default:
            // down
            transform = 'rotate(0deg)';
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="chevronDownIcon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            x="224"
            y="0"
            style={{ transform }}
            {...props}
        >
            <path fill="#dae1e6" d="M8 11l-5-5 0.7-0.7 4.3 4.3 4.3-4.3 0.7 0.7z" />
        </svg>
    );
};
