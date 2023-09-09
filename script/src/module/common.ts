export class Ccommon {
  public get LocationSearch() {
    var data = window.location.search.slice(1);
    (<any>data).__proto__['parseJson'] = function(this: string) {
      var block = this.split('&'), ret = { };

      block.forEach(val => {
        var [key, val] = val.split('=');
        (<any>ret)[key] = val;
      });

      return ret;
    }
    return data;
  }

  public set LocationSearch(val: string) {
    window.location.search = val;
  }
};