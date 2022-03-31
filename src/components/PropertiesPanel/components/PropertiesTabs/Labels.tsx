import { FC } from 'react';
import { LabelProps } from '../../types';
import { IconAbout } from '../../../_shared/icons/IconAbout';
import { StyledIconsContainer, StyledNameWithIcon } from '../../styledComponents';

export const Label: FC<LabelProps> = ({ children, infoIcon }) => {
    return (
        <StyledIconsContainer>
            <StyledNameWithIcon>{children}</StyledNameWithIcon>
            {infoIcon && <IconAbout />}
        </StyledIconsContainer>
    );
};
