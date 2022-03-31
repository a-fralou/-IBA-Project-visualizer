import { StyledModal, StyledModalHeader, StyledModalBody, StyledModalCloseButton } from './styledComponents';
import { ModalProps } from './types';

export const Modal = ({ open, children, closeModal, title }: ModalProps) => {
    return (
        <StyledModal open={open} closeOnDocumentClick={false}>
            <StyledModalHeader>
                {title}
                <StyledModalCloseButton type="button" className="close" onClick={closeModal}>
                    &times;
                </StyledModalCloseButton>
            </StyledModalHeader>
            <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
    );
};
