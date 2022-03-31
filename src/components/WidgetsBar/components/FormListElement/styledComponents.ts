import styled from 'styled-components';
import { IsDetailsOpenedTypes } from './types';

export const Option = styled.button<IsDetailsOpenedTypes>`
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0 3px;
    cursor: pointer;
    visibility: ${(props) => (props?.isOpened ? 'visible' : 'hidden')};
`;

export const Form = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 30px;
    align-items: center;
    padding: 0 6px 0 15px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: #d3d9de;
    }

    &:hover ${Option} {
        visibility: visible;
    }
`;

export const SubForm = styled(Form)`
    padding: 0 6px 0 30px;
`;

export const IconWrapper = styled.div<IsDetailsOpenedTypes>`
    transform: ${(props) => (props?.isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease;
    display: inline-block;
`;

export const OpenDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
`;

export const FormTitle = styled.button`
    font-size: 12px;
    font-weight: 300;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: text;
`;

export const FormTitleInput = styled.input`
    width: 75%;
    font-size: 12px;
    font-weight: bold;
`;
