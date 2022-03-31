import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import styled from 'styled-components';
import { TextFieldWidthProps, CheckBoxProps } from './types';

export const Container = styled.div`
    width: 100%;
    max-width: 300px;
    font-family: Roboto, sans-serif;
    color: #000000;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgb(242, 244, 245);
`;

export const PropertiesNameContainer = styled.div`
    display: flex;
    align-items: center;
    height: 23px;
    margin: 10px 6px 2px;
    left: 0px;
    top: 0px;
`;

export const PropertiesIDContainer = styled.div`
    display: flex;
    align-items: center;
    height: 23px;
    margin: 0px 0px 5px 26px;
    font: 14px / 1.55 Roboto, sans-serif;
`;

export const StyledBorderColorIcon = styled(BorderColorOutlinedIcon)`
    color: #000000;
    margin-right: 5px;
`;

export const TextFieldProperties = styled(Input)`
    margin-left: 5px;
    font: 12px / 1.55 Roboto, sans-serif;
    padding: 0;
    border-radius: 0;
    width: auto;
    input {
        margin: 0;
        padding: 0 5px;
        height: 23px;
    }
    .MuiSvgIcon-root {
        display: none;
    }
    &:focus,
    &:focus-within,
    &:hover {
        background-color: #ffffff;
        border: 1px solid #aaaaaa;
        .MuiSvgIcon-root {
            display: flex;
        }
    }
`;

export const TabsProperties = styled(Tabs)`
    border-bottom: 1px solid #dedede;
    root {
        padding: 0px;
        min-height: 0px;
    }
    .Mui-selected {
        color: #000000;
        font-weight: bold;
    }
    .MuiTabs-indicator {
        background-color: #3d5466;
    }
`;

export const TabsContainer = styled.div`
    border-top: 1px solid #dedede;
    padding: 0px;
    margin: 0px;
`;

export const TabProperties = styled(Tab)`
    color: #000000;
    font: 12px;
    text-transform: none;
    padding: 0;
    font-weight: inherit;
    color: gray;
`;

export const WidthConfigContainer = styled.div`
    padding-top: 15px;
    left: 0px;
    top: 0px;
    font-size: 12px;
    font-weight: normal;
`;
export const WidthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 35px;
    padding-top: 10px;
`;

export const WidthContainerNames = styled.span`
    margin-right: 5px;
`;

export const WidthContainerNamePx = styled.span`
    margin-left: 5px;
`;

export const EventsDescriptionName = styled.p`
    margin-bottom: 5px;
    margin-top: 10px;
`;

export const EventsDescriptionList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #0066b3;
`;

export const EventsDescriptionContainer = styled.div`
    font-size: 12px;
    margin-top: 15px;
`;

export const StyledIconsContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const TextFieldDescription = styled(TextField)`
    outline: none;
    box-shadow: 0;
    background: #ffffff;
    margin: 0px;
    padding: 0px;
    .MuiInputBase-root {
        color: #000000;
        padding: 0;
        font-size: 12px;
        fontfamily: Roboto, sans-serif;
        padding-left: 3px;
    }
    .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #000000;
    }
`;

export const StyledNameWithIcon = styled.span`
    padding-right: 5px;
`;

export const StyledSelectCarousel = styled.div`
    margin-left: 20px;
    margin-top: 10px;
    padding-bottom: 5px;
`;

export const StyledCheckBoxDisplay = styled.div<CheckBoxProps>`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const CheckboxDisplayStage = styled(Checkbox)`
    padding: 0;
    margin: 0;
    .MuiSvgIcon-root {
        font-size: 17px;
    }
`;

export const WidthTextField = styled(TextField)<TextFieldWidthProps>`
    width: ${(props) => props.width && `${props.width}px`};
    background: #ffffff;
    margin: 0px;
    .MuiInputBase-input {
      text-align: ${(props) => props.textalign || 'left'};
      padding: 2px;
      margin: 0px;
      font-family: Roboto, sans-serif;
      font-size: 12px;
    },
`;

export const StyledCheckBox = styled.span<CheckBoxProps>`
    position: relative;
    display: flex;
    justify-content: center;
    margin-right: 5px;
`;

export const StyledSelect = styled.select`
    max-width: 100%;
    width: 100%;
    border-radius: 0;
    font-size: 12px;
    padding: 3px 3px 3px 3px;
    border: 1px solid #d4dbdf;
    &:focus {
        border: 1px solid #d4dbdf;
    }
`;

export const StyledContentContainer = styled.div`
    padding: 0px 15px 15px 15px;
`;
