import { ActionButtonWrap, ActionButtonTitle, ActionButtonSubTitle } from './styledComponents';
import { ActionButtonProps } from './types';

export const ActionButton = ({ title, description, icon, onClick }: ActionButtonProps) => (
    <ActionButtonWrap onClick={onClick}>
        {icon}
        <ActionButtonTitle>{title}</ActionButtonTitle>
        <ActionButtonSubTitle>{description}</ActionButtonSubTitle>
    </ActionButtonWrap>
);
