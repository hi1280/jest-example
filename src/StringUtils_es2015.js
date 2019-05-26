class StringUtils_es2015 {
  static echo(a) {
    return a;
  }

  static toSnakeCase(str) {
    let snake = str;
    const pattern = /[A-Z]/g;
    let result;
    while ((result = pattern.exec(snake)) !== null) {
      snake = snake.replace(result[0], `_${result[0].toLowerCase()}`);
    }
    return snake.replace(/^_/, "");
  }
}
