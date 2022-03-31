import { Link } from './components/Link';
import { HomeLink } from './components/HomeLink';
import designIcon from '../../assets/design-white.svg';
import designActiveIcon from '../../assets/design-active.svg';
import passwordIcon from '../../assets/password-white.svg';
import passwordActiveIcon from '../../assets/password-active.svg';
import workflowIcon from '../../assets/workflow-white.svg';
import workflowActiveIcon from '../../assets/workflow-active.svg';
import styleIcon from '../../assets/style-white.svg';
import styleActiveIcon from '../../assets/style-active.svg';
import htmlIcon from '../../assets/html-white.svg';
import htmlActiveIcon from '../../assets/html-active.svg';
import validationIcon from '../../assets/validation-white.svg';
import validationActiveIcon from '../../assets/validation-active.svg';
import propertiesIcon from '../../assets/properties-white.svg';
import propertiesActiveIcon from '../../assets/properties-active.svg';
import { Wrapper } from './styledComponents';

export const Sidebar = () => {
    return (
        <Wrapper>
            <HomeLink />
            <Link to="visualiser" activeIcon={designActiveIcon} icon={designIcon} />
            <Link to="access" activeIcon={passwordActiveIcon} icon={passwordIcon} />
            <Link to="workflow" activeIcon={workflowActiveIcon} icon={workflowIcon} />
            <Link to="style" activeIcon={styleActiveIcon} icon={styleIcon} />
            <Link to="event" activeIcon={htmlActiveIcon} icon={htmlIcon} />
            <Link to="validation" activeIcon={validationActiveIcon} icon={validationIcon} />
            <Link to="settings" activeIcon={propertiesActiveIcon} icon={propertiesIcon} />
        </Wrapper>
    );
};
