export type DroppingItemType = {
    type?: string;
    props?: {
        i: string;
        h: number;
        w: number;
    };
} | null;

interface IComponentItems {
    [key: string]: {
        type?: string;
        props?: {
            i?: string;
            h?: number;
            w?: number;
            x?: number;
            y?: number;
        };
    };
}

export type ComponentItemsType = IComponentItems | null;

export interface ICanvasContext {
    droppingItem: DroppingItemType;
    dropItemToCanvas: (el: DroppingItemType) => void;
}

export type WidgetsType = {
    [key: string]: () => JSX.Element;
};
