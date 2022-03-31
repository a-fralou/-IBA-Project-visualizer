import styled from 'styled-components';

export const StyledHeader = styled.header`
    grid-area: header;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    background-color: #1c262e;
`;

export const StyledHelpButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 100%;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background: none;
    :hover {
        background-color: #354958;
    }
`;

export const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

export const StyledMenuItem = styled.button`
    display: flex;
    padding: 0px 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    border: none;
    text-decoration: none;
    background: none;
    :hover {
        background-color: #354958;
    }
    svg {
        path {
            fill: #dae1e6;
        }
    }
`;

export const MenuItemText = styled.span`
    padding: 0px 4px;
    font-size: 14px;
    font-weight: bold;
    color: white;
`;
