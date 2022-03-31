import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
`;

export const Swipe = styled.div`
    box-sizing: border-box;
    height: 5px;
    width: 50px;
    border: 1px solid grey;
    background-color: grey;
    cursor: row-resize;
    border-radius: 3px;
`;

export const Draggable = styled.div`
    padding: 5px 0;
`;

export const Resizable = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;
`;
