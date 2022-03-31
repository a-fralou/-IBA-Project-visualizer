import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const InputElement = styled.input`
    min-height: 28px;
    height: 100%;
    width: inherit;
    box-sizing: border-box;
    padding: 0;
`;

export const InputIcon = styled.div`
    height: 34px;
    width: 34px;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.75;
    &:hover {
        opacity: 1;
    }
`;
