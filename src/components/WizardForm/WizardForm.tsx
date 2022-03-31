import { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Grid, Button, DialogContent, Divider, DialogActions, Box } from '@mui/material';
import { StyledWizardForm, StyledWizardFormTitle } from './styledComponents';
import CreatingRadioButton from '../CreatingPanel/components/CreatingRadioButton';
import { IconAppBlank } from '../_shared/icons/IconAppBlank';
import { IconAppSpreadsheet } from '../_shared/icons/IconAppSpreadsheet';
import { IconAppImport } from '../_shared/icons/IconAppImport';
import { WizardFormProps } from './types';
import WizardFormSteps from './components/WizardFormSteps';

const options = [
    {
        label: 'From Blank',
        value: 1,
        description: 'Start with an empty canvas to design the application you want.',
        icon: <IconAppBlank />,
    },
    {
        label: 'From Spreadsheet',
        value: 2,
        description: 'Create an application from an Excel spreadsheet and import the data.',
        icon: <IconAppSpreadsheet />,
    },
    {
        label: 'From Existing',
        value: 3,
        description: 'Import an existing Volt application from a .volt file.',
        icon: <IconAppImport />,
    },
];

export const WizardForm = ({ closeModal }: WizardFormProps) => {
    const [radioBtn, setRadioBtn] = useState(1);
    const [steps, setSteps] = useState(1);
    const [activeStep, setActiveStep] = useState(0);

    const handleRadio = (e: number) => {
        setRadioBtn(e);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        if (radioBtn === 2) {
            setSteps(3);
        } else {
            setSteps(1);
        }
    }, [radioBtn]);

    return (
        <StyledWizardForm>
            <DialogContent>
                {activeStep < 1 ? (
                    <>
                        <StyledWizardFormTitle>
                            Choose the way you want to create your
                            <br />
                            application.
                        </StyledWizardFormTitle>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-plan-label"
                                onChange={(e) => handleRadio(+e.target.value)}
                                name="radio-buttons-plan"
                            >
                                <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
                                    {options.map(({ label, value, description, icon }) => (
                                        <Grid item xs={2} sm={4} md={4} key={`${value}`}>
                                            <FormControlLabel
                                                sx={{ margin: 0, height: '100%' }}
                                                key={`${value}`}
                                                value={value}
                                                control={<Radio sx={{ display: 'none' }} />}
                                                label={
                                                    <CreatingRadioButton
                                                        className="choise-plan"
                                                        label={label}
                                                        description={description}
                                                        icon={icon}
                                                        checked={radioBtn === value}
                                                    />
                                                }
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </>
                ) : (
                    <WizardFormSteps activeStep={activeStep} choise={radioBtn} />
                )}
            </DialogContent>

            <Divider />
            <DialogActions sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Button variant="outlined" size="small" onClick={closeModal}>
                        Cancel
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {activeStep !== 0 && (
                        <Button variant="outlined" size="small" onClick={handleBack} sx={{ mr: '20px' }}>
                            Back
                        </Button>
                    )}
                    {activeStep !== steps && (
                        <Button variant="contained" size="small" onClick={handleNext} disabled={activeStep === steps}>
                            Next
                        </Button>
                    )}
                    {activeStep === steps && (
                        <Button variant="contained" size="small" disabled sx={{ ml: 1 }}>
                            Create
                        </Button>
                    )}
                </Box>
            </DialogActions>
        </StyledWizardForm>
    );
};
