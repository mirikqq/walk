import { atom } from 'nanostores';

export const counter = atom<number>(0);

export const inc = (value: number) => counter.set(value);

export const dec = (value: number) => counter.set(value);
