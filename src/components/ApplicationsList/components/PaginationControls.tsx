import { Divider, Stack } from '@mui/material';

import { Option } from '../styledComponents';
import { PaginationControlsProps } from '../types';

export const PaginationControls = ({ disablePrevButton, disableNextButton, onClickNextPage, onClickPrevPage }: PaginationControlsProps) => {
    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
            <Option disabled={disablePrevButton} onClick={onClickPrevPage}>
                Previous
            </Option>
            <Option disabled={disableNextButton} onClick={onClickNextPage}>
                Next
            </Option>
        </Stack>
    );
};
