import type { MouseEventHandler } from 'react';

export type ExpanderTypes = {
    isOpened: boolean;
};

export type IsEditableTypes = {
    isEditable: boolean;
};

export type OptionTypes = {
    disabled?: boolean;
};

export interface PaginationControlsProps {
    itemsOnPage: number;
    disablePrevButton?: boolean;
    disableNextButton?: boolean;
    onClickNextPage: MouseEventHandler;
    onClickPrevPage: MouseEventHandler;
}

export interface ShowItemsControlsProps {
    itemsOnPage: number;
    onChangeItemsOnPage: (itemsOnPage: number) => void;
}

type StatusTypes = {
    title: string;
    color: string;
};

export type DetailsTypes = {
    title: string;
    lastUpdate: string;
    disabled: {
        edit: boolean;
        deploy: boolean;
        viewData: boolean;
        launch: boolean;
    };
    description: string;
    administeredBy: string;
    createdOn: string;
    id: string;
    status: StatusTypes;
};

export interface ApplicationsListProps {
    itemsData: DetailsTypes[];
}

export type SortingOption = 'dateIncr' | 'dateDecr' | 'nameIncr' | 'nameDecr';

export interface SortingControlsProps {
    sortBy: SortingOption;
    onSortingChange: (sorting: SortingOption) => void;
}
