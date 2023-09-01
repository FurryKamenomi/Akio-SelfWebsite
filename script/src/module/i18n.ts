interface ILangBase {
  langType: string,
  voidItem: string,
  [prop: string]: string
};

export class Ci18n {
  private _LangJSON?: ILangBase = undefined;

  public constructor(
    private _CurLang: string = 'zh-cn',
    private _LangPath: string = '/asset/lang/'
  ) {
    this._CurLang = this._CurLang.toLowerCase();
    if (this._LangPath.endsWith('/'))
      this._LangPath += '/';

    this.RefreshLanguage();
  };

  public Language(): string;
  public Language(lang: string): void
  public Language(lang?: string): string | void {
    if (lang == undefined)
      return this._CurLang;
    this._CurLang = lang.toLowerCase();
    this.RefreshLanguage();
  };

  public PickItem(item: string): string | null {
    return this._LangJSON?.[item] || null;
  };

  public async Process() {
    if (!this._LangJSON)
      await this.RefreshLanguage();

    document
      .querySelectorAll('[use-i18n]')
      .forEach((node) => {
        var i18n_default = node.getAttribute('use-i18n')?.toLowerCase();
        if (i18n_default === undefined)
          return;

        node.textContent = i18n_default.replaceAll(
          /{{.*}}/g,
          i18n_key => this._LangJSON![i18n_key.slice(2, -2)] || this._LangJSON!.voidItem
        );
      });

    return this;
  };

  public RefreshLanguage(strict: boolean = false) {
    if (!strict
      && this._LangJSON
      && this._LangJSON.langType.toLowerCase() === this._CurLang
    ) return;

    var langFile = this._LangPath + this._CurLang + '.lang.json';
    return fetch(langFile)
      .then(val => val.json())
      .then(json => this._LangJSON = json)
      .catch(console.error);
  };
};