import { Frame } from './frame';

const factor: number = 5;

const height: number = 500;
const width: number = 500;

const frames: Frame[] = [
    new Frame(
        [3, 19.25, 4.375],
        [24.125, 16.25],
    ),
];

for (const frame of frames) {
    const svg: string = `
    <svg height="${height}" width="${width}">
        <g transform="translate(${(width - frame.getWidth(factor)) / 2}, ${(height - frame.getHeight(factor)) / 2})">
            ${frame.toString(factor)}
        </g>
    </svg>
    `;

    console.log(svg);
}
