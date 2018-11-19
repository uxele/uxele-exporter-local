import { IExporter } from "uxele-core";
export declare class LocalExporter implements IExporter {
    exportCanvas(canvas: HTMLCanvasElement, format: string, name: string, quality: number): Promise<void>;
    exportSvg(svg: string, name: string): Promise<void>;
}
