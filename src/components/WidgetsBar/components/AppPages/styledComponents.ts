import styled from 'styled-components';
import { IsOpenedTypes } from './types';

export const Wrapper = styled.article`
    width: 100%;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
    outline: none;
    box-sizing: border-box;
    border: none;
    padding: 0 3px;

    &:hover {
        background-color: #dae1e6;
        cursor: pointer;
    }
`;

export const Title = styled.button`
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: bold;
    background-color: transparent;
    width: 80%;
    border: none;
    cursor: pointer;
`;

export const Option = styled.button`
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0 3px;
    cursor: pointer;
`;

export const StyledIcon = styled.img<IsOpenedTypes>`
    transform: ${(props) => (props?.isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease;
`;

export const List = styled.div`
    position: relative;
`;
