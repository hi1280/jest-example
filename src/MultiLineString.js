class MultiLineString {
  static join() {
    let str = "";
    for (let i = 0; i < arguments.length; i++) {
      str = `${str + arguments[i]}\n`;
    }
    return str;
  }
}
