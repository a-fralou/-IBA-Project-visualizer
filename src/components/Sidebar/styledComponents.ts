import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
    height: 100vh;
    width: 48px;
    background: rgb(28, 38, 46);
    position: absolute;
    left: 0px;
    top: 0px;
    box-sizing: border-box;
`;

export const LinkTo = styled(NavLink)`
    box-sizing: border-box;
    height: 48px;
    width: 100%;
    border-left: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #374a5d;
    }

    &.active {
        background: #273641;
        border-left: 2px solid orange;
    }
`;

export const StyledLogoIcon = styled.img`
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    width: 30px;
`;

export const StyledIcon = styled.img`
    display: inline-block;
    height: 20px;
    width: 20px;
`;
