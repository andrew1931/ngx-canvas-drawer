import { IElement } from '../types';

export const isRectangle = (elem: IElement) => elem.shape === 'rectangle';

export const isCircle = (elem: IElement) => elem.shape === 'ellips';
