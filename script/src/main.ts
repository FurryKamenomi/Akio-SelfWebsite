/// <reference path="../def/global.d.ts"/>
import * as ModuleCore from './module/index.js';

; (function (this: typeof window) {
  var i18n = new ModuleCore.Ci18n;
  var common = new ModuleCore.Ccommon;
  i18n.Process();





  this.akio = <any>{
    modules: {
      i18n: i18n,
      common: common
    },
    currentPages: [
      'home', 'search', 'tag',
      'article', 'about', 'link',

      'blog' // Virtual pages, jump to articles
    ]
  };

  var times = 0
  Object.defineProperty(this.akio, 'errorTimes', {
    get: () => {
      return times
    },
    set: (val: number) => {
      if (times >= 10) /* Max Errors */ {
        document.body.innerHTML = `
        <style>
          body {
            background: white !important;
          }
          div {
            font-weight: bold;
            font-size: 1em;
            color: red
          }
        </style>
        <div>
          "Error: Too Much Errors! Feedback to Github https://github.com/FurryCreakler/Akio-SelfWebsite"
        </div>
        `;
      }
      times = val;
    }
  });






  
  if (!akio.currentPages.includes(common.LocationSearch.split('=')[0]))
    common.LocationSearch = 'home';

  if (!common.LocationSearch.startsWith('blog')) {
    JmpPages(common.LocationSearch);
  }
  else {
    var a = (<any>common.LocationSearch).parseJson();
    console.log(a);
  };

  function JmpPages(code: string) {
    fetch('/content/page/' + code + '.html')
      .then(val => val.text())
      .then(raw => {
        document
          .querySelector('div[component="main@content"]')!
          .innerHTML = raw;
      })
      .catch(() => {
        JmpPages('home');
        akio.errorTimes += 1;
      })
  };
}).call(window);