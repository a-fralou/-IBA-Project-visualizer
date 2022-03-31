import styled, { css } from 'styled-components';
import { ButtonProps, ButtonSize, ButtonType } from './types';

export const ButtonElement = styled.button.attrs((props: ButtonProps) => ({
    type: props.htmlType,
    size: props.size,
    typeStyle: props.type,
}))`
    display: inline-flex;
    justify-content: center;
    border: 1px solid;
    cursor: pointer;
    outline: none;
    font: 13.49px Roboto, sans-serif;

    ${({ size }) => {
        const defaultStyle = css`
            padding: 4.5px 24px;
        `;

        switch (size) {
            case ButtonSize.sm:
                return defaultStyle;

            case ButtonSize.md:
                return css`
                    padding: 5.5px 17px;
                `;
            case ButtonSize.lg:
                return css`
                    padding: 8.5px 22px;
                `;

            default:
                return defaultStyle;
        }
    }}
    ${({ typeStyle }) => {
        const defaultStyle = css`
            color: #fff;
            background: #0066b3;
            border-color: #0066b3;
            &:focus,
            &:hover {
                background: #00518f;
            }
            &:active {
                background: #003d6b;
            }
        `;

        switch (typeStyle) {
            case ButtonType.primary:
                return defaultStyle;

            case ButtonType.secondary:
                return css`
                    color: #0066b3;
                    background: #fff;
                    border-color: #0066b3;
                    &:focus,
                    &:hover,
                    &:active {
                        background: #eef4fc;
                    }
                `;

            default:
                return defaultStyle;
        }
    }}
    
    &[disabled] {
        color: #00000040;
        border-color: #d9d9d9;
        background: #f5f5f5;
        cursor: not-allowed;
    }
`;
