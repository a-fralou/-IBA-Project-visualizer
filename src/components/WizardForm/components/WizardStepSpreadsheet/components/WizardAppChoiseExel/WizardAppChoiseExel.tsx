import { Box, Grid } from '@mui/material';
import ButtonFileUpload from '../../../../../_shared/ButtonFileUpload';
import { IconDataTable } from '../../../../../_shared/icons/IconDataTable';
import { IconDataTableCopy } from '../../../../../_shared/icons/IconDataTableCopy';
import { IconDataTableRightLine } from '../../../../../_shared/icons/IconDataTableRightLine';
import { IconDataTableTopLine } from '../../../../../_shared/icons/IconDataTableTopLine';
import { StyledTitle } from './styledComponents';

export const WizardAppChoiseExel = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Box sx={{ m: 5, textAlign: 'center' }}>
                    <StyledTitle ml={2} component="div" variant="h6">
                        Data needs to be in table format.
                    </StyledTitle>
                    <StyledTitle mb={2} component="div" variant="subtite" style={{ fontWeight: 'normal', fontSize: 13 }}>
                        Spreadsheet (.xls or .xlsx):
                    </StyledTitle>
                    <ButtonFileUpload />
                </Box>
            </Grid>

            <Grid container sx={{ backgroundColor: '#f5f5f5' }}>
                <Grid item xs={12}>
                    <Box sx={{ m: 2, textAlign: 'center' }}>
                        <StyledTitle component="div" variant="h6">
                            How to structure your spreadsheet
                        </StyledTitle>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ m: 5, display: 'flex' }}>
                        <IconDataTable />
                        <StyledTitle ml={2} component="div" variant="h6">
                            Data needs to be in table format.
                        </StyledTitle>
                    </Box>

                    <Box sx={{ m: 5, display: 'flex' }}>
                        <IconDataTableRightLine />
                        <StyledTitle ml={2} component="div" variant="h6">
                            Each column will become a field in the application.
                        </StyledTitle>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{ m: 5, display: 'flex' }}>
                        <IconDataTableTopLine />
                        <StyledTitle ml={2} component="div" variant="h6">
                            Use the first row as a header.
                        </StyledTitle>
                    </Box>
                    <Box sx={{ m: 5, display: 'flex' }}>
                        <IconDataTableCopy />
                        <StyledTitle ml={2} component="div" variant="h6">
                            Use multiple sheets for more than one table.
                        </StyledTitle>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};
