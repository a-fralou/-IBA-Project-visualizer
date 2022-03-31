import { IconsTypes } from '../../../_shared/icons/types';

export type ElementTypes = {
    iconName: any;
    title: string;
    id: string;
    type: string;
    canvasItem?: any;
};

export type SectionTypes = {
    title: string;
    id: string;
    elements: ElementTypes[];
};

export type WidgetsSectionTypes = {
    data: SectionTypes;
};

export type IsDetailsOpened = {
    isOpened: boolean;
};

export type WidgetItemTypes = {
    item: ElementTypes;
    icons: IconsTypes;
};
