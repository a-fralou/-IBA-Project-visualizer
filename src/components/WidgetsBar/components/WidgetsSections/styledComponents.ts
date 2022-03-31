import styled from 'styled-components';
import { IsDetailsOpened } from './types';

export const Wrapper = styled.div`
    padding: 3px;
`;

export const TitleButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    border: 1px solid transparent;
    cursor: pointer;
    width: 100%;
    &:hover {
        border: 1px solid black;
    }
`;

export const Title = styled.span`
    font: 12px / 1.55 Roboto, sans-serif;
    font-weight: bold;
`;

export const IconWrapper = styled.div<IsDetailsOpened>`
    transform: ${(props) => (props?.isOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease;
`;

export const List = styled.div<IsDetailsOpened>`
    display: ${(props) => (props?.isOpened ? 'initial' : 'none')};
`;

export const Tile = styled.div`
    margin: 4px 0;
    padding: 0 5px;
    cursor: move;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:hover {
        background-color: #d3d9de;
    }
`;

export const TileIcon = styled.img`
    height: 15px;
    width: 15px;
`;

export const TileTitle = styled.span`
    font-size: 12px;
    font-weight: 100;
    color: #383838;
    padding: 0 5px;
    font-family: Roboto, sans-serif;
`;
