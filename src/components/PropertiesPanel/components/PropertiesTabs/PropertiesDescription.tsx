import { TextFieldDescription, StyledIconsContainer } from '../../styledComponents';
import { Label } from './Labels';

export const PropertiesDescription = () => (
    <div>
        <StyledIconsContainer>
            <Label infoIcon>Description: </Label>
        </StyledIconsContainer>
        <TextFieldDescription multiline rows={4} fullWidth />
    </div>
);
