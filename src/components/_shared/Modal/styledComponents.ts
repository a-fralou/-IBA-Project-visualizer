import styled from 'styled-components';
import Modal from 'reactjs-popup';

export const StyledModal = styled(Modal)`
    // use your custom style for ".popup-overlay"
    &-overlay {
        background: rgb(0 0 0 / 40%);
    }
    // use your custom style for ".popup-content"
    &-content {
        border: 3px solid rgba(2, 2, 2, 0.4);
        border-radius: 3px;
        box-shadow: 0 0 15px rgb(0 0 0 / 40%);
        background: #fff;
        max-width: 900px;
        width: 100%;
    }
`;

export const StyledModalHeader = styled.div`
    color: #fff;
    background: #1c262e;
    padding: 10px 15px;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    font-weight: bold;
`;

export const StyledModalBody = styled.div`
    padding: 20px;
`;

export const StyledModalCloseButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
    font-size: 30px;
    width: 36px;
`;
