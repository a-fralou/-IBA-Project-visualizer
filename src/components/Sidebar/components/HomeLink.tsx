import logoIcon from '../../../assets/logo.svg';
import { LinkTo, StyledLogoIcon } from '../styledComponents';

export const HomeLink = () => {
    return (
        <LinkTo to="/manage" data-tip="manage" aria-label="manage">
            <StyledLogoIcon src={logoIcon} alt="home" />
        </LinkTo>
    );
};
