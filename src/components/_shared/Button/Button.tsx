import { PropsWithChildren } from 'react';
import { ButtonElement } from './styledComponents';
import { ButtonHtmlType, ButtonProps } from './types';

export const Button = ({
    children = 'Button',
    title,
    onClick,
    htmlType = ButtonHtmlType.button,
    type,
    size,
    disabled,
}: PropsWithChildren<ButtonProps>): JSX.Element => (
    <ButtonElement title={title} onClick={onClick} size={size} type={type} htmlType={htmlType} disabled={disabled}>
        {children}
    </ButtonElement>
);
