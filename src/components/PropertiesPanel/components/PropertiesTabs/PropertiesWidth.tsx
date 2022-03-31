import {
    WidthConfigContainer,
    WidthContainer,
    WidthContainerNames,
    WidthContainerNamePx,
    StyledSelectCarousel,
    StyledSelect,
    WidthTextField,
} from '../../styledComponents';
import { Label } from './Labels';
import { CheckBox } from './CheckBox';

const parametersWidth = ['Mobile (350px)', 'Tablet (700px)', 'Desktop (1000px)', 'Range', 'Custom'];
const parametersCarousel = ['Change to single column mode', 'Change to carousel mode'];
const parametersPageRole = ['Application', 'Document', 'None'];

export const PropertiesWidth = () => {
    return (
        <WidthConfigContainer>
            <Label>Width: </Label>
            <StyledSelect>
                {parametersWidth.map((param) => (
                    <option value={param} key={param}>
                        {param}
                    </option>
                ))}
            </StyledSelect>
            <WidthContainer>
                <WidthContainerNames>Min width</WidthContainerNames>
                <WidthTextField textalign="right" />
                <WidthContainerNamePx>px</WidthContainerNamePx>
            </WidthContainer>
            <WidthContainer>
                <WidthContainerNames>Max width</WidthContainerNames>
                <WidthTextField textalign="right" />
                <WidthContainerNamePx>px</WidthContainerNamePx>
            </WidthContainer>

            <CheckBox>Enable dynamic layout</CheckBox>
            <WidthContainer>
                <WidthContainerNames>If window width less than</WidthContainerNames>
                <WidthTextField width={60} />
                <WidthContainerNamePx>px</WidthContainerNamePx>
            </WidthContainer>
            <StyledSelectCarousel>
                <StyledSelect>
                    {parametersCarousel.map((param) => (
                        <option value={param} key={param}>
                            {param}
                        </option>
                    ))}
                </StyledSelect>
            </StyledSelectCarousel>

            <CheckBox>Display stage action buttons on this page.</CheckBox>

            <Label infoIcon> Accessibility - Page Role: </Label>

            <StyledSelect>
                {parametersPageRole.map((param) => (
                    <option value={param} key={param}>
                        {param}
                    </option>
                ))}
            </StyledSelect>

            <Label infoIcon>Custom CSS class names: </Label>
            <WidthTextField fullWidth />
        </WidthConfigContainer>
    );
};
