import styled from 'styled-components';
import { IsSelectedTypes } from './types';

export const Option = styled.button`
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0 3px;
    cursor: pointer;
    visibility: hidden;
    position: relative;
`;

export const Page = styled.div<IsSelectedTypes>`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 30px;
    align-items: center;
    padding: 0 6px 0 15px;
    background-color: ${(props) => (props.isSelected ? '#c9d7de' : 'transparent')};
    cursor: pointer;

    &:hover {
        background-color: #d3d9de;
    }

    &:hover ${Option} {
        visibility: visible;
    }

    & > ${Option} {
        visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    }
`;

export const PageTitle = styled.button<IsSelectedTypes>`
    font-size: 12px;
    font-weight: ${(props) => (props.isSelected ? 'bold' : '300')};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: text;
`;

export const PageTitleInput = styled.input`
    font-size: 12px;
    font-weight: bold;
`;

export const OptionsList = styled.div<{ isOpened: boolean }>`
    position: absolute;
    bottom: -100px;
    right: -100px;
    z-index: 999;
    display: ${(props) => (props.isOpened ? 'initial' : 'none')};
`;

export const OptionTile = styled.button`
    cursor: pointer;
    height: 35px;
    width: 140px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 3px 5px;

    &:hover {
        background-color: #e3e2e2;
    }
`;

export const OptionText = styled.span`
    color: grey;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 0 0 5px;
    font-family: Roboto, sans-serif; ;
`;
