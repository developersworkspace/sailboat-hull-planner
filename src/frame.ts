export class Frame {

    constructor(
        public heights: number[],
        public widths: number[],
    ) {

    }

    public getHeight(factor: number): number {
        return (this.heights[0] + this.heights[1] + this.heights[2]) * factor;
    }

    public getWidth(factor: number): number {
        return (this.widths[0] + this.widths[0]) * factor;
    }

    public toString(factor: number, n: number): string {
        // center top
        const pointAX: number = this.widths[0];
        const pointAY: number = 0;

        // left top
        const pointBX: number = 0;
        const pointBY: number = this.heights[0];

        // left bottom
        const pointCX: number = this.widths[0] - this.widths[1];
        const pointCY: number = this.heights[0] + this.heights[1];

        // center bottom
        const pointDX: number = this.widths[0];
        const pointDY: number = this.heights[0] + this.heights[1] + this.heights[2];

        // right top
        const pointEX: number = this.widths[0] + this.widths[0];
        const pointEY: number = this.heights[0];

        // right bottom
        const pointFX: number = this.widths[0] + this.widths[1];
        const pointFY: number = this.heights[0] + this.heights[1];

        return `${this.toLineString(pointAX, pointAY, pointBX, pointBY, factor)}
            ${this.toLineString(pointBX, pointBY, pointCX, pointCY, factor)}
            ${this.toLineString(pointCX, pointCY, pointDX, pointDY, factor)}
            ${this.toLineString(pointAX, pointAY, pointEX, pointEY, factor)}
            ${this.toLineString(pointEX, pointEY, pointFX, pointFY, factor)}
            ${this.toLineString(pointFX, pointFY, pointDX, pointDY, factor)}
            ${this.centerBeam(2, 2, factor)}
            <text text-anchor="middle" x="${this.getWidth(factor) / 2}" y="${this.getHeight(factor) / 2}">Frame ${n}</text>`;
    }

    protected toLineString(x1: number, y1: number, x2: number, y2: number, factor: number): string {
        return `<line x1="${x1 * factor}" y1="${y1 * factor}" x2="${x2 * factor}" y2="${y2 * factor}" style="stroke:black;stroke-width:1" />`;
    }

    protected centerBeam(height: number, width: number, factor): string {
        const angle: number = Math.atan(this.heights[0] / this.widths[0]);

        const pointAX: number = this.widths[0] - width;
        const pointAY: number = this.heights[0] - (Math.tan(angle) * (this.widths[0] - width));

        const pointBX: number = this.widths[0] - width;
        const pointBY: number = this.heights[0] - (Math.tan(angle) * (this.widths[0] - width)) + height;

        const pointCX: number = this.widths[0] + width;
        const pointCY: number = this.heights[0] - (Math.tan(angle) * (this.widths[0] - width)) + height;

        const pointDX: number = this.widths[0] + width;
        const pointDY: number = this.heights[0] - (Math.tan(angle) * (this.widths[0] - width));

        return `${this.toLineString(pointAX, pointAY, pointBX, pointBY, factor)}
        ${this.toLineString(pointBX, pointBY, pointCX, pointCY, factor)}
        ${this.toLineString(pointCX, pointCY, pointDX, pointDY, factor)}`;
    }

    protected radiansToDegress(radians: number): number {
        return radians * 180 / Math.PI;
    }

}
