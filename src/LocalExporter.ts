import { IExporter } from "uxele-core";
import { lang } from "uxele-i18n";
import FileSaver from "file-saver";
export class LocalExporter implements IExporter {
  exportCanvas(canvas: HTMLCanvasElement, format: string, name: string, quality: number): Promise<void> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((result) => {
        if (result) {
          FileSaver.saveAs(result, name);
          resolve();
        } else {
          reject(new Error(lang("error_canvas_convert_file_fail", format, "toBlob returned null")));
        }
      }, format, quality)
    })
  }
  exportSvg(svg: string, name: string): Promise<void> {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    FileSaver.saveAs(blob, name);
    return Promise.resolve();
  }
}