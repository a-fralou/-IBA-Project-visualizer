export const ButtonSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;

export const ButtonType = {
    primary: 'primary',
    secondary: 'secondary',
} as const;

export const ButtonHtmlType = {
    button: 'button',
    submit: 'submit',
    reset: 'reset',
} as const;

type ButtonSizeUnion = typeof ButtonSize[keyof typeof ButtonSize];
type ButtonTypeUnion = typeof ButtonType[keyof typeof ButtonType];
type ButtonHtmlTypeUnion = typeof ButtonHtmlType[keyof typeof ButtonHtmlType];

export interface ButtonProps {
    title?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    htmlType?: ButtonHtmlTypeUnion;
    type?: ButtonTypeUnion;
    size?: ButtonSizeUnion;
    children?: React.ReactNode;
}
