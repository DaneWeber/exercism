class Year {
  constructor(anno) {
    this.anno = anno;
  }
  isLeap() {
    if (this.anno % 4 > 0) {
      return false;
    } else if (this.anno % 100 === 0 && this.anno % 400 !== 0) {
      return false;
    }
    return true;
  }
}

export default Year;
