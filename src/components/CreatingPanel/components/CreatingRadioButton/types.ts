export interface RadioPalette {
    fill?: string;
    border?: string;
}

export interface RadioButtonProps {
    checked?: boolean;
    description?: string;
    label?: string;
    className?: string;
    icon?: React.ReactElement;
    palette?: RadioPalette[];
}
