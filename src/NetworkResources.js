class NetworkResources {
  constructor(loader) {
    this.loader = loader;
  }

  load() {
    const reader = this.loader.getInput();
    const str = reader.read();
    return str;
  }
}

class NetworkLoader {
  getInput() {
    return null;
  }
}
