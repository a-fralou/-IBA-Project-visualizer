import { FC } from 'react';
import { StyledContentContainer } from '../../styledComponents';
import { TabOneProps } from '../../types';

export const TabOne: FC<TabOneProps> = ({ index, value, children }) => {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
            <StyledContentContainer>{children}</StyledContentContainer>
        </div>
    );
};
