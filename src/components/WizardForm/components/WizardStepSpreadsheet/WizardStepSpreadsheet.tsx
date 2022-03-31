import { Grid, Step, Stepper, Box, StepLabel, StepIconProps } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { StyledBlankWrap } from './styledComponents';
import WizardStepBlank from '../WizardStepBlank';
import { WizardStepSpreadsheetProps } from './types';
import WizardAppSettings from './components/WizardAppSettings';
import WizardAppChoiseExel from './components/WizardAppChoiseExel';

const steps = ['Choose your Excel spreadsheet', 'Choose fields, names, and types', 'Enter new application details'];

const StepIcon = ({ active, completed }: StepIconProps) => {
    if (active) {
        return <RadioButtonCheckedIcon color="primary" />;
    }

    if (completed && !active) {
        return <RadioButtonCheckedIcon color="primary" />;
    }

    return <RadioButtonUncheckedIcon sx={{ color: '#828282' }} />;
};

export const WizardStepSpreadsheet = ({ activeStep }: WizardStepSpreadsheetProps) => {
    const renderStep = () => {
        switch (activeStep) {
            case 1:
                return <WizardAppChoiseExel />;
            case 2:
                return <WizardAppSettings />;
            case 3:
                return <WizardStepBlank />;
            default:
                return 1;
        }
    };

    return (
        <StyledBlankWrap container justifyContent="center">
            <Grid item xs={8}>
                <Box sx={{ width: '100%', mt: 4, mb: 5 }}>
                    <Stepper alternativeLabel activeStep={activeStep! - 1}>
                        {steps.map((label) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            return (
                                <Step key={label} completed={stepProps.completed}>
                                    <StepLabel StepIconComponent={StepIcon} optional={labelProps.optional}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </Grid>

            {renderStep()}
        </StyledBlankWrap>
    );
};
