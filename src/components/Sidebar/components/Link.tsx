import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkTypes } from '../types';
import { LinkTo, StyledIcon } from '../styledComponents';

export const Link = ({ to, icon, activeIcon }: LinkTypes) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    const getIsActivePathname = () => {
        return location?.pathname?.includes(to);
    };

    useEffect(() => {
        setIsActive(() => getIsActivePathname());
    }, [setIsActive, location]);

    return (
        <LinkTo to={`/${to}`} data-tip={to} aria-label={to}>
            <StyledIcon src={isActive ? activeIcon : icon} alt={to} />
        </LinkTo>
    );
};
