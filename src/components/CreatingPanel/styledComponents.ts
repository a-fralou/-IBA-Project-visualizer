import styled from 'styled-components';
import { Button, IconButton, Box, BoxProps } from '@mui/material';

export const CreatingPanelElement = styled.div`
    display: flex;
    width: 100%;
    padding-top: 16px;
`;

export const CreatingButton = styled(Button)`
    margin-right: 8px;
    max-width: 180px;
    width: 100%;
`;

export const CreatingHelpIcon = styled(IconButton)`
    margin: auto;
    color: #5596e6;
`;

export const StyledBox = styled(Box)<BoxProps>`
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    border: solid 1px #efefef;
    background: #ffffff;
    box-sizing: border-box;
    cursor: pointer;
    &:focus,
    &:hover {
        border-color: #aaaaaa;
    }
`;
