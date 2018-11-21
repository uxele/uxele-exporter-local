import { IExporter } from "uxele-core";
export declare class LocalExporter implements IExporter {
    name: string;
    iconCls: string;
    exportBlob(blob: Blob, name: string): Promise<any>;
}
