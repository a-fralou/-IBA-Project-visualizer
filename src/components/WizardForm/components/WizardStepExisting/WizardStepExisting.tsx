import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid } from '@mui/material';
import ButtonFileUpload from '../../../_shared/ButtonFileUpload';
import { StyledTitle } from './styledComponents';

export const WizardStepExisting = () => {
    return (
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }} justifyContent="center">
            <Grid item xs={8}>
                <Box m={5}>
                    <StyledTitle sx={{ mb: 5, fontWeight: 'normal !important' }} component="div" variant="subtitle">
                        Import an existing Volt application from a .volt file.
                    </StyledTitle>

                    <StyledTitle component="div" variant="h6">
                        Select a .volt file to import:
                    </StyledTitle>
                    <ButtonFileUpload />
                    <FormControl component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                sx={{ mt: 2 }}
                                control={<Checkbox checked color="secondary" name="gilad" />}
                                label={
                                    <StyledTitle component="div" variant="h6">
                                        Remove previously defined users and groups from this application?
                                    </StyledTitle>
                                }
                            />
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="jason" />}
                                label={
                                    <StyledTitle component="div" variant="h6">
                                        Deploy application?
                                    </StyledTitle>
                                }
                            />
                            <FormControlLabel
                                control={<Checkbox disabled color="secondary" name="antoine" />}
                                label={
                                    <StyledTitle component="div" variant="h6">
                                        Import data?
                                    </StyledTitle>
                                }
                            />
                        </FormGroup>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>
    );
};
