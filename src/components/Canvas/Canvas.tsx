import { useContext, useState } from 'react';
import RGL, { Layout, WidthProvider } from 'react-grid-layout';
import { CanvasContext } from '../../context/canvas.context';
import Widgets from '../CanvasWidgets';
import { StyledWrapper } from './styledComponents';
import { ComponentItemsType } from './types';

const ReactGridLayout = WidthProvider(RGL);

export const Canvas = () => {
    const { droppingItem } = useContext(CanvasContext);
    const [items, setItems] = useState<Layout[]>([]);
    const [componentItems, setComponentItem] = useState<ComponentItemsType>(null);

    const handleDrop = (layout: Layout[], layoutItem: Layout): void => {
        if (droppingItem && Widgets[`${droppingItem.type}`]) {
            setItems((prev) => [...prev, layoutItem]);
            setComponentItem((prev: ComponentItemsType) => ({ ...prev, [layoutItem.i]: { ...droppingItem } }));
        }
    };

    const handleResize = (layout: Layout[]): void => {
        setItems(layout);
    };

    return (
        <StyledWrapper>
            <ReactGridLayout
                className="drop-zone"
                isDraggable
                isResizable
                rowHeight={30}
                cols={12}
                compactType={null}
                isDroppable
                droppingItem={droppingItem?.props}
                onDrop={handleDrop}
                onResize={handleResize}
            >
                {componentItems &&
                    items.map((item) => {
                        const Item = Widgets[`${componentItems[item.i].type}`];

                        return (
                            <div key={item.i} data-grid={item} id={item.i} className="drop-block">
                                <Item />
                            </div>
                        );
                    })}
            </ReactGridLayout>
        </StyledWrapper>
    );
};
