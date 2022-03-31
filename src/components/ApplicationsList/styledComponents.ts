import styled, { css } from 'styled-components';
import { Link as NavLink } from 'react-router-dom';

import { ExpanderTypes, IsEditableTypes, OptionTypes } from './types';

export const ApplicationsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
    padding-top: 16px;
`;

export const Line = styled.div`
    &:last-child {
        padding-bottom: 25px;
    }
`;

export const DividingLine = styled.div`
    margin: 5px 0px;
    position: relative;
    border-bottom: 1px solid #ddd;
`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
`;

export const ControlsButton = styled.button`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    color: #0066b3;
    background: none;
    cursor: pointer;
    border: none;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
    svg {
        path {
            fill: #0066b3;
        }
    }
`;

export const Wrapper = styled.div`
    border: 1px solid #cccc;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 10%);
    margin-bottom: 14px;
    width: 100%;
    min-width: 350px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Preview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-grow: 2;
`;

export const Expander = styled.button`
    padding-top: 6px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const StyledIcon = styled.img<ExpanderTypes>`
    height: 16px;
    width: 16px;

    transform: ${(props) => (props.isOpened ? 'rotate(-180deg)' : 'rotate(0deg)')};
    transition: transform 0.2s;
`;

export const TitleWrapper = styled.div<IsEditableTypes>`
    padding: 0 0 0 5px;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.isEditable &&
        css`
            flex-grow: 2;
        `}
`;

export const Title = styled.span`
    box-sizing: border-box;
    letter-spacing: 0;
    display: inline-block !important;
    padding: 2px;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border: 1px solid transparent;

    &:hover {
        background: #fafafa;
        border: 1px solid #cccccc;
    }
`;

export const TitleInput = styled.input`
    padding: 2px 2px 2px 2px;
    width: 95%;
    box-sizing: border-box;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0;
    font-weight: 700;
    background: #fafafa;
    border: 1px solid #cccccc;
    outline: none;

    &:active {
        border: 1px solid #ccc4cc;
    }
`;

export const Update = styled.div`
    padding: 6px 0 0;
    font-size: 12px;
`;

export const UpdateTitle = styled.span`
    font-weight: bold;
`;

export const UpdateValue = styled.span`
    padding: 0 0 0 5px;
`;

export const StatusWrapper = styled.div``;

export const Tag = styled.div<{ color: string }>`
    background-color: ${(props) => props?.color};
    padding: 2px 12px;
    border-radius: 10px;
    font-size: 0.9em;
    text-align: center;
`;

export const OptionsList = styled.div`
    padding: 22px 0 17px 25px;
    display: flex;
    flex-direction: row;
`;

export const Option = styled.button<OptionTypes>`
    display: flex;
    align-items: center;
    padding: 0 7px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #0066b3;
    border-left: 1px solid #ccc;

    ${(props) =>
        props?.disabled &&
        css`
            text-decoration: none;
            color: gray;
            cursor: default;
            pointer-events: none;
        `}

    &:hover {
        text-decoration: ${(props) => (props?.disabled ? 'none' : 'underline')};
    }

    &:first-child {
        border-left: none;
    }
`;

export const Details = styled.div<ExpanderTypes>`
    max-height: ${(props) => (props.isOpened ? '1500px' : '0')};
    overflow: hidden;

    transition: all 0.2s;
`;

export const Property = styled.span`
    font-weight: bold;
    font-size: 14px;
    padding: 0 0 0 40px;
`;

export const Value = styled.span`
    padding: 0 0 25px 5px;
    font-size: 14px;
`;

export const Description = styled(Property)`
    display: block;
`;

export const DescriptionValue = styled(Value)`
    display: block;
    padding: 0 0 10px 40px;
`;

export const WrapperMore = styled.div`
    position: relative;
    border-left: 1px solid #ccc;
    max-height: 21px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: white;
`;

export const ListMore = styled.div`
    position: absolute;
    z-index: 1;
    bottom: -140px;
    left: 0;
    width: 100px;
    max-width: 100px;
    box-shadow: 0 1px 5px rgb(0 0 0 / 25%);
`;

export const OptionMore = styled.button`
    padding: 6px 10px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    cursor: pointer;
    background: white;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ShowItemsOption = styled(Option)<OptionTypes & { selected: boolean }>`
    text-decoration: ${({ selected }) => (selected ? 'none' : 'underline')};
`;

export const Link = styled(NavLink)`
    text-decoration: none;
`;
