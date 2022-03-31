import { ReactElement, SVGProps } from 'react';

export type IconsTypes = { [key: string]: (props: SVGProps<SVGSVGElement>) => ReactElement<SVGProps<SVGSVGElement>> };
