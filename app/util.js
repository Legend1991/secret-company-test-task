export default class Util {
    static insertToString (src, index, str) {
        return src.slice(0, index) + str + src.slice(index);
    }

    static numberWithSpaces (x) {
        return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
    }
  }
  