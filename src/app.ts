import * as fs from 'fs';
import { Frame } from './frame';

const factor: number = 5;

const height: number = 500;
const width: number = 500;

const frames: Frame[] = [
    new Frame(
        [3, 14.5, 5.25],
        [24.875, 18.875],
    ),
    new Frame(
        [3.75, 14, 6],
        [33.75, 28.625],
    ),
    new Frame(
        [0, 13.125, 5.625],
        [35, 30.375],
    ),
    new Frame(
        [1, 9, 4.5],
        [26, 22.625],
    ),
    new Frame(
        [2.375, 11.375, 5],
        [31.75, 27.375],
    ),
];

for (let index = 0; index < frames.length; index ++) {
    const frame: Frame = frames[index];

    const svg: string = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="${height}" width="${width}">
        <g transform="translate(${(width - frame.getWidth(factor)) / 2}, ${(height - frame.getHeight(factor)) / 2})">
            ${frame.toString(factor, index + 1)}
        </g>
    </svg>`;

    if (fs.existsSync(`./frame-${index + 1}.svg`)) {
        fs.unlinkSync(`./frame-${index + 1}.svg`);
    }

    fs.writeFileSync(`./frame-${index + 1}.svg`, svg, 'utf8');
}
