import { IExporter } from "uxele-core";
import { lang } from "uxele-i18n";
import FileSaver from "file-saver";
export class LocalExporter implements IExporter {

  name: string = lang("download");
  iconCls: string = "fas fa-download"
  exportBlob(blob: Blob, name: string): Promise<any> {
    FileSaver.saveAs(blob, name);
    return Promise.resolve();
  }
  
}