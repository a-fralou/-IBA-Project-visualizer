import { useMemo, useState } from 'react';

import { ApplicationCard } from './components/ApplicationCard';
import { PaginationControls } from './components/PaginationControls';
import { SortingControls } from './components/SortingControls';
import { ControlsPanel } from './components/ControlsPanel';
import { ShowItemsControls } from './components/ShowItemsControls';
import { ApplicationsListContainer } from './styledComponents';
import { ApplicationsListProps, SortingOption } from './types';
import { sortItems } from './utils';

const DEFAULT_ITEMS_ON_PAGE_COUNT = 5;
const DEFAULT_SORTING_OPTION: SortingOption = 'dateDecr';

export const ApplicationsList = ({ itemsData }: ApplicationsListProps) => {
    const [itemsOnPage, setItemsOnPage] = useState<number>(DEFAULT_ITEMS_ON_PAGE_COUNT);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<SortingOption>(DEFAULT_SORTING_OPTION);

    const handleChangeItemsOnPage = (itemsCount: number) => {
        setItemsOnPage(itemsCount);
        setCurrentPage(1);
    };

    const handleGoToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handleGoToPrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleSortingChange = (sorting: SortingOption) => {
        setSortBy(sorting);
        setCurrentPage(1);
    };

    const numberOfPages = useMemo(() => Math.ceil(itemsData.length / itemsOnPage), [itemsData.length, itemsOnPage]);

    return (
        <ApplicationsListContainer>
            <ControlsPanel>
                <SortingControls sortBy={sortBy} onSortingChange={handleSortingChange} />
                <PaginationControls
                    itemsOnPage={itemsOnPage}
                    onClickNextPage={handleGoToNextPage}
                    onClickPrevPage={handleGoToPrevPage}
                    disablePrevButton={currentPage === 1}
                    disableNextButton={currentPage === numberOfPages}
                />
            </ControlsPanel>
            {itemsData
                .sort(sortItems(sortBy))
                .slice((currentPage - 1) * itemsOnPage, currentPage * itemsOnPage)
                .map((cardData) => (
                    <ApplicationCard key={cardData.id} details={cardData} />
                ))}
            <ControlsPanel>
                <ShowItemsControls itemsOnPage={itemsOnPage} onChangeItemsOnPage={handleChangeItemsOnPage} />
                <PaginationControls
                    itemsOnPage={itemsOnPage}
                    onClickNextPage={handleGoToNextPage}
                    onClickPrevPage={handleGoToPrevPage}
                    disablePrevButton={currentPage === 1}
                    disableNextButton={currentPage === numberOfPages}
                />
            </ControlsPanel>
        </ApplicationsListContainer>
    );
};
