import Benchmark, { Event, Suite } from 'benchmark';

Benchmark.options.initCount = 50;
Benchmark.options.minSamples = 200;

function benchCycle(e: Event) {
  console.log(String(e.target));
}

function benchFinish(this: Suite) {
  console.log(
    // eslint-disable-next-line no-invalid-this
    `\nfast: ${this.filter('fastest').map('name')}\nslow: ${this.filter(
      'slowest',
    ).map('name')}`,
  );
}

export interface Bench {
  name: string;
  fn: () => unknown;
}

export function bench(...benches: Bench[]): void {
  const suite = new Suite();

  for (let i = 0; i !== benches.length; ++i) {
    suite.add(benches[i].name, benches[i].fn);
  }

  suite.on('cycle', benchCycle).on('complete', benchFinish).run();
}
