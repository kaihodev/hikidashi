import Sampler from './Sampler';
export default class ArraySampler extends Sampler {
    static sample<T>(arr: T[], fromIndex?: number, toIndex?: number): T;
    static shuffle<T>(arr: T[]): T[];
}
