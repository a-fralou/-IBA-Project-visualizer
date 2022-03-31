import styled from 'styled-components';
import { Box, Checkbox, Table, TableCell, TableContainer, TableRow } from '@mui/material';

export const StyleBlockSetting = styled(Box)`
    border: 1px solid #efefef;
    height: 100%;
`;

export const StyleItemSetting = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #e5eff7;
    border-left: 5px solid #0066b3;
    span {
        font-size: 12px;
        font-weight: bold;
    }
`;

export const StyledTable = styled(Table)`
    table-layout: auto;
    width: 100%;
    border: 0;
`;

export const StyledTableContainer = styled(TableContainer)`
    table-layout: auto;
    width: 100%;
    border: 0;
`;

export const StyledTableCellHead = styled(TableCell)`
    width: 100px;
    padding: 5px;
    font-weight: normal;
    border: 0;
    &:first-child {
        width: 15px;
    }
    &:last-child {
        padding-left: 15px;
    }
`;

export const StyledTableRow = styled(TableRow)`
    border: 0;
`;

export const StyledCheckbox = styled(Checkbox)`
    padding: 0;
`;

export const StyledTableCellBody = styled(TableCell)`
    padding: 5px;
    border: 0;
    &:last-child {
        padding-left: 15px;
    }
`;

export const StyleHeadSetting = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #efefef;
    padding: 10px 8px;
    color: #000;
    font-size: 15px;
    font-weight: normal;
    span {
        font-size: 12px;
        font-weight: bold;
    }
`;

export const StyleSubHeadSetting = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #efefef;
    padding: 10px 8px;
    color: #000;
    font-size: 15px;
    font-weight: bold;
    span {
        font-size: 14px;
        color: #0066b3;
        font-weight: normal;
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    height: 24px;
`;
