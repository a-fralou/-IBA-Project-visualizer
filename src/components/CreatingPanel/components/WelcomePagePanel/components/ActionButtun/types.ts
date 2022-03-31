import { ReactNode } from 'react';
import { GridProps } from '@mui/material';

export type ActionClick = {
    key?: string;
    value?: string | number | URL;
};

export interface ActionButtonProps extends GridProps {
    title: string;
    description: string;
    icon: ReactNode;
    action?: ActionClick;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
