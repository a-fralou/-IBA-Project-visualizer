import styled, { css } from 'styled-components';
import { RadioButtonProps, RadioPalette } from './types';

export const StyledLabel = styled.div<RadioButtonProps>`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #efefef;
    text-align: center;
    box-shadow: 2px 2px 2px #efefef;
    font-size: 14px;
    background: white;
    white-space: normal;
    position: relative;
    cursor: pointer;
    &:hover,
    &:focus {
        border-color: #aaa;
    }
    &:active {
        border-color: #0066bc;
    }
    input {
        display: none;
    }

    ${({ checked }) =>
        checked &&
        css`
            border-color: #0066bc;
            &:hover,
            &:focus {
                border-color: #0066bc;
            }
        `}}
`;

export const StyledRadioCheck = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
`;

export const StyledRadioTitle = styled.h4`
    margin: 0 0 5px;
    font-size: 15px;
`;

export const StyledRadioDescription = styled.p`
    margin: 0;
`;

export const StyledRadioIcon = styled.div`
    margin-bottom: 20px;
`;

export const StyledRadioPaletteWrap = styled.div<RadioPalette>`
    display: flex;
`;

export const StyledRadioPalette = styled.div<RadioPalette>`
    width: 20px;
    height: 20px;
    border: ${({ border }) => border};
    background-color: ${({ fill }) => fill};
    margin-left: 10px;
`;
