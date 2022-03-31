import styled from 'styled-components';

export const StyledWizardForm = styled.div`
    position: relative;
    .choise-plan {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        min-height: 270px;
        padding: 30px;
    }
`;

export const StyledWizardFormTitle = styled.h3`
    color: #000;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 3em !important;
    font-size: 18px;
    margin: 0;
`;

export const StyledWizardFormFooter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #aaa;
    padding-top: 15px;
`;

export const StyledWizardFormRadio = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const StyledWizardFormAction = styled.div`
    position: relative;
    button {
        margin-left: 15px;
    }
`;
