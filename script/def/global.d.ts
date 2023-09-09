/// <reference path="library.d.ts" />

type Ci18n = import("../src/module/i18n").Ci18n;
type Ccommon = import("../src/module/common").Ccommon;

declare var akio: {
  modules: {
    i18n: Ci18n
    common: Ccommon
  },
  errorTimes: number,
  currentPages: string[]
}