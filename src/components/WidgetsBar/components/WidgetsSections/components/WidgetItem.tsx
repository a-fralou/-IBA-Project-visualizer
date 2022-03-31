import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '@mui/material/Tooltip';
import { Tile, TileTitle } from '../styledComponents';
import { WidgetItemTypes } from '../types';
import { CanvasContext } from '../../../../../context/canvas.context';

export const WidgetItem = ({ item, icons }: WidgetItemTypes) => {
    const { dropItemToCanvas } = useContext(CanvasContext);
    const Icon = icons[item.iconName];

    const handleSetElement = () => {
        dropItemToCanvas({ ...item.canvasItem, props: { ...item.canvasItem.props, i: uuidv4() } });
    };

    return (
        <Tooltip title="Default tooltip" placement="right" unselectable="on" onDragStart={handleSetElement}>
            <Tile draggable="true">
                <Icon height={15} width={15} />
                <TileTitle>{item.title}</TileTitle>
            </Tile>
        </Tooltip>
    );
};
