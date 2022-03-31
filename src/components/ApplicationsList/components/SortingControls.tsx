import { Stack, Divider } from '@mui/material';
import { MouseEventHandler, useCallback } from 'react';
import { IconChevron } from '../../_shared/icons/IconChevron';
import { Option } from '../styledComponents';
import type { SortingControlsProps } from '../types';

export const SortingControls = ({ sortBy, onSortingChange }: SortingControlsProps) => {
    const handleSortByNameClick: MouseEventHandler = () => onSortingChange(sortBy === 'nameDecr' ? 'nameIncr' : 'nameDecr');
    const handleSortByDateClick: MouseEventHandler = () => onSortingChange(sortBy === 'dateDecr' ? 'dateIncr' : 'dateDecr');

    const renderChevronIcon = useCallback(
        (sortCategory: 'name' | 'date') => {
            const chevronIconVariant = sortBy.endsWith('Decr') ? 'down' : 'up';
            return sortBy.startsWith(sortCategory) ? <IconChevron variant={chevronIconVariant} /> : null;
        },
        [sortBy]
    );

    return (
        <Stack flexDirection="row">
            Sort by:
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <Option onClick={handleSortByNameClick}>
                    Name
                    {renderChevronIcon('name')}
                </Option>
                <Option onClick={handleSortByDateClick}>
                    Date
                    {renderChevronIcon('date')}
                </Option>
            </Stack>
        </Stack>
    );
};
