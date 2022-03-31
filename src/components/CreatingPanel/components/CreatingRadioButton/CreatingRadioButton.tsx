import { IconCheck } from '../../../_shared/icons/IconCheck';
import {
    StyledLabel,
    StyledRadioCheck,
    StyledRadioTitle,
    StyledRadioDescription,
    StyledRadioIcon,
    StyledRadioPalette,
    StyledRadioPaletteWrap,
} from './styledComponents';
import { RadioButtonProps } from './types';

export const CreatingRadioButton = ({ checked, description, icon, label, palette, className }: RadioButtonProps) => {
    return (
        <StyledLabel checked={checked} className={className}>
            {checked && (
                <StyledRadioCheck>
                    <IconCheck fill="#0066bc" />
                </StyledRadioCheck>
            )}
            {icon && <StyledRadioIcon>{icon}</StyledRadioIcon>}
            {label && <StyledRadioTitle>{label}</StyledRadioTitle>}
            <StyledRadioDescription>{description}</StyledRadioDescription>
            {palette && (
                <StyledRadioPaletteWrap>
                    {palette?.map(({ fill, border }) => (
                        <StyledRadioPalette key={fill} border={border} fill={fill} />
                    ))}
                </StyledRadioPaletteWrap>
            )}
        </StyledLabel>
    );
};
