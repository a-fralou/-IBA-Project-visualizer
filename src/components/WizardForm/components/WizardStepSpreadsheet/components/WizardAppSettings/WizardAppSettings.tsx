import { Grid, OutlinedInput, TableBody, TableHead, TableRow } from '@mui/material';
import {
    StyleBlockSetting,
    StyleHeadSetting,
    StyleSubHeadSetting,
    StyleItemSetting,
    StyledTableCellHead,
    StyledTable,
    StyledTableCellBody,
    StyledTableRow,
    StyledSelect,
    StyledTableContainer,
    StyledCheckbox,
} from './styledComponents';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const WizardAppSettings = () => {
    return (
        <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
            <Grid item xs={5}>
                <StyleBlockSetting>
                    <StyleHeadSetting>
                        Sheets
                        <span>Rows found</span>
                    </StyleHeadSetting>
                    <StyleItemSetting>
                        <div>
                            <StyledCheckbox checked />
                            <OutlinedInput sx={{ ml: 1 }} />
                        </div>
                        <span>14</span>
                    </StyleItemSetting>
                </StyleBlockSetting>
            </Grid>

            <Grid item xs={5}>
                <StyleBlockSetting>
                    <StyleHeadSetting>
                        Columns
                        <span>Identified: 8 | Selected: 8</span>
                    </StyleHeadSetting>
                    <StyleSubHeadSetting>
                        Sheet1
                        <span>Select All | De-select All</span>
                    </StyleSubHeadSetting>

                    <StyledTableContainer style={{ width: '100%' }}>
                        <StyledTable aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCellHead />
                                    <StyledTableCellHead>Name</StyledTableCellHead>
                                    <StyledTableCellHead>Type</StyledTableCellHead>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCellBody>
                                            <StyledCheckbox />
                                        </StyledTableCellBody>
                                        <StyledTableCellBody>
                                            <OutlinedInput />
                                        </StyledTableCellBody>
                                        <StyledTableCellBody>
                                            <StyledSelect>
                                                <option>Single Line Entry</option>
                                                <option>test</option>
                                                <option>test</option>
                                                <option>test</option>
                                                <option>test</option>
                                            </StyledSelect>
                                        </StyledTableCellBody>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </StyledTable>
                    </StyledTableContainer>
                </StyleBlockSetting>
            </Grid>
        </Grid>
    );
};
