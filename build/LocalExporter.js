"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uxele_i18n_1 = require("uxele-i18n");
var file_saver_1 = __importDefault(require("file-saver"));
var LocalExporter = /** @class */ (function () {
    function LocalExporter() {
    }
    LocalExporter.prototype.exportCanvas = function (canvas, format, name, quality) {
        return new Promise(function (resolve, reject) {
            canvas.toBlob(function (result) {
                if (result) {
                    file_saver_1.default.saveAs(result, name);
                    resolve();
                }
                else {
                    reject(new Error(uxele_i18n_1.lang("error_canvas_convert_file_fail", format, "toBlob returned null")));
                }
            }, format, quality);
        });
    };
    LocalExporter.prototype.exportSvg = function (svg, name) {
        var blob = new Blob([svg], { type: "image/svg+xml" });
        file_saver_1.default.saveAs(blob, name);
        return Promise.resolve();
    };
    return LocalExporter;
}());
exports.LocalExporter = LocalExporter;
//# sourceMappingURL=/Users/kxiang/work/projects/psdetch/v3-new/uxele-exporter-local/src/LocalExporter.js.map