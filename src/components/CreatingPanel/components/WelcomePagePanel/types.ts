export interface TitleProps {
    component?: string;
}

export interface WelcomePagePanelProps {
    show: boolean;
    openModal: (n: number) => void;
    onClose?: React.MouseEventHandler<HTMLElement>;
}
