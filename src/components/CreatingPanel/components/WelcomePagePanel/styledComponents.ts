import { Box, Grid, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import { WelcomePagePanelProps, TitleProps } from './types';

type PostsInfoWithoutConent = Pick<WelcomePagePanelProps, 'show'>;

export const Container = styled(Box)<PostsInfoWithoutConent>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    font-family: Roboto, sans-serif;
    color: black;
    width: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin: 0 auto;
    border: 1px solid #ccc;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    position: relative;
`;

export const Title = styled(Typography)<TitleProps>`
    font-size: 26px;
    font-weight: normal;
    color: #383838;
    margin: 0px 25px 20px;
`;

export const Text = styled(Typography)`
    font-weight: normal;
`;

export const PositionListButtons = styled(Grid)`
    padding: 24px 0;
    font-size: 15px;
    line-height: 19px;
`;

export const ClosedButton = styled(IconButton)`
    position: absolute;
    top: 10px;
    right: 10px;
`;
