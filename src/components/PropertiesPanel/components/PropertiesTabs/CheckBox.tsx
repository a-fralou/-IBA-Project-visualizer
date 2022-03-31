import { FC } from 'react';
import { CheckboxDisplayStage, StyledCheckBoxDisplay, StyledCheckBox } from '../../styledComponents';

export const CheckBox: FC = ({ children }) => {
    return (
        <StyledCheckBoxDisplay>
            <StyledCheckBox>
                <CheckboxDisplayStage defaultChecked />
            </StyledCheckBox>
            {children}
        </StyledCheckBoxDisplay>
    );
};
