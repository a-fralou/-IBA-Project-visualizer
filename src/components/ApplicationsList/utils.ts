import { DetailsTypes, SortingOption } from './types';

export const sortItems = (sortBy: SortingOption) => (firstItem: DetailsTypes, secondItem: DetailsTypes) => {
    switch (sortBy) {
        case 'dateIncr':
            return new Date(firstItem.lastUpdate).getTime() - new Date(secondItem.lastUpdate).getTime();
        case 'dateDecr':
            return new Date(secondItem.lastUpdate).getTime() - new Date(firstItem.lastUpdate).getTime();
        case 'nameIncr':
            return firstItem.title.localeCompare(secondItem.title, 'en', { sensitivity: 'base' });
        case 'nameDecr':
            return secondItem.title.localeCompare(firstItem.title, 'en', { sensitivity: 'base' });
        default:
            return 0;
    }
};
