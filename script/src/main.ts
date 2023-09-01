/// <reference path="../def/library.d.ts"/>
import * as ModuleCore from './module/index.js';

var i18n = new ModuleCore.Ci18n;
i18n.Process();

document.addEventListener('DOMContentLoaded', function () {
  ; (() => {
    var UAType = new UAParser(navigator.userAgent).getDevice().type;
    var PlatformStyleNode = this.querySelector('link[detect-platform][rel="stylesheet/less"]') as HTMLLinkElement;
    PlatformStyleNode.setAttribute(
      'href', [
        '/asset/style/index',
        UAType === 'mobile' ? 'mobile' : 'desktop',
        'less'
      ].join('.'));
  }).call(this);
});