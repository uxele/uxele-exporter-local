"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uxele_i18n_1 = require("uxele-i18n");
var file_saver_1 = __importDefault(require("file-saver"));
var LocalExporter = /** @class */ (function () {
    function LocalExporter() {
        this.name = uxele_i18n_1.lang("download");
        this.iconCls = "fas fa-download";
    }
    LocalExporter.prototype.exportBlob = function (blob, name) {
        file_saver_1.default.saveAs(blob, name);
        return Promise.resolve();
    };
    return LocalExporter;
}());
exports.LocalExporter = LocalExporter;
//# sourceMappingURL=/Users/kxiang/work/projects/psdetch/v3-new/uxele-exporter-local/src/LocalExporter.js.map