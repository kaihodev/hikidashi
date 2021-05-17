export default class Sampler {
  static randBetween(a: number, b: number): number {
    return a + this.randUInt(b);
  }
  static randUInt(under: number): number {
    return 0 | Math.random() * under;
  }
}
