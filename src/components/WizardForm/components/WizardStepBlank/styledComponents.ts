import { FormControl, Grid } from '@mui/material';
import styled from 'styled-components';

export const StyledBlankWrap = styled(Grid)`
    position: relative;
    max-width: 900px;
`;

export const StyledBlankRadio = styled(FormControl)`
    span {
        width: 100%;
    }
    .color-theme {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        padding: 14px 26px 14px 10px;
        margin: 0;
        margin-bottom: 20px;
        &:last-child: {
            margin-bottom: 0;
        }
    }
`;
