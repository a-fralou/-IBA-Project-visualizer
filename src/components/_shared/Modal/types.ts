export interface ModalProps {
    title?: string;
    open?: boolean;
    closeModal?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}
