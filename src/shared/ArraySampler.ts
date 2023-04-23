import Sampler from './Sampler';

export default class ArraySampler extends Sampler {
  static sample<T>(arr: T[], fromIndex = 0, toIndex = 0): T {
    return arr[this.randBetween(fromIndex, toIndex)];
  }

  static shuffle<T>(arr: T[]): T[] {
    let L, i = L = arr.length;
    while (i--) {
      const j = this.randUInt(L);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
}
