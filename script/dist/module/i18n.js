var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
export class Ci18n {
    constructor(_CurLang = 'zh-cn', _LangPath = '/asset/lang/') {
        this._CurLang = _CurLang;
        this._LangPath = _LangPath;
        this._LangJSON = undefined;
        this._CurLang = this._CurLang.toLowerCase();
        if (this._LangPath.endsWith('/'))
            this._LangPath += '/';
        this.RefreshLanguage();
    }
    ;
    Language(lang) {
        if (lang == undefined)
            return this._CurLang;
        this._CurLang = lang.toLowerCase();
        this.RefreshLanguage();
    }
    ;
    PickItem(item) {
        var _a;
        return ((_a = this._LangJSON) === null || _a === void 0 ? void 0 : _a[item]) || null;
    }
    ;
    Process() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._LangJSON)
                yield this.RefreshLanguage();
            document
                .querySelectorAll('[use-i18n]')
                .forEach((node) => {
                var _a;
                var i18n_default = (_a = node.getAttribute('use-i18n')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                if (i18n_default === undefined)
                    return;
                node.textContent = i18n_default.replaceAll(/{{.*}}/g, i18n_key => this._LangJSON[i18n_key.slice(2, -2)] || this._LangJSON.voidItem);
            });
            return this;
        });
    }
    ;
    RefreshLanguage(strict = false) {
        if (!strict
            && this._LangJSON
            && this._LangJSON.langType.toLowerCase() === this._CurLang)
            return;
        var langFile = this._LangPath + this._CurLang + '.lang.json';
        return fetch(langFile)
            .then(val => val.json())
            .then(json => this._LangJSON = json)
            .catch(console.error);
    }
    ;
}
;
//# sourceMappingURL=i18n.js.map