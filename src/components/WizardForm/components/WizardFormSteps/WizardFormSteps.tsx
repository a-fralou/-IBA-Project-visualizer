import WizardStepBlank from '../WizardStepBlank';
import WizardStepExisting from '../WizardStepExisting';
import WizardStepSpreadsheet from '../WizardStepSpreadsheet';
import { StyledWizardFormSteps } from './styledComponents';
import { WizardFormStepsProps } from './types';

export const WizardFormSteps = ({ activeStep, choise }: WizardFormStepsProps) => {
    const renderStep = () => {
        switch (choise) {
            case 1:
                return <WizardStepBlank />;
            case 2:
                return <WizardStepSpreadsheet activeStep={activeStep} />;
            case 3:
                return <WizardStepExisting />;
            default:
                return <WizardStepBlank />;
        }
    };

    return <StyledWizardFormSteps>{renderStep()}</StyledWizardFormSteps>;
};
