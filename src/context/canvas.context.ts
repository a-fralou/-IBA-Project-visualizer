import { createContext } from 'react';
import { ICanvasContext } from '../components/Canvas/types';

export const CanvasContext = createContext<ICanvasContext>({
    droppingItem: null,
    dropItemToCanvas: () => {},
});
