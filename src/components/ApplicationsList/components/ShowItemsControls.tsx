import { Stack, Divider } from '@mui/material';
import { ShowItemsOption } from '../styledComponents';
import { ShowItemsControlsProps } from '../types';

const showItemsOptions = [5, 10, 20, 30];

export const ShowItemsControls = ({ itemsOnPage, onChangeItemsOnPage }: ShowItemsControlsProps) => (
    <Stack direction="row">
        Shows
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
            {showItemsOptions.map((itemsCount) => (
                <ShowItemsOption key={itemsCount} selected={itemsOnPage === itemsCount} onClick={() => onChangeItemsOnPage(itemsCount)}>
                    {itemsCount}
                </ShowItemsOption>
            ))}
        </Stack>
        items
    </Stack>
);
