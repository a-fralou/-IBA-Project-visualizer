import { useState } from 'react';
import { DroppingItemType } from '../components/Canvas/types';

export const useCanvas = () => {
    const [droppingItem, setDroppingItem] = useState<DroppingItemType>(null);

    const dropItemToCanvas = (el: DroppingItemType) => {
        setDroppingItem(el);
    };

    return { droppingItem, dropItemToCanvas };
};
