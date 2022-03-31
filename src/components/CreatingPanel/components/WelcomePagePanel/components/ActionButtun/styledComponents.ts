import styled from 'styled-components';
import { StyledBox } from '../../../../styledComponents';

export const ActionButtonWrap = styled(StyledBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 12px 8px 8px 8px;
    text-align: center;
    vertical-align: top;
    color: #383838;
`;

export const ActionButtonTitle = styled.span`
    padding: 8px 0px 0px;
    font-size: 15px;
    font-weight: bold;
    display: block;
`;

export const ActionButtonSubTitle = styled.span`
    font-size: 12px;
    font-weight: normal;
    display: block;
`;
