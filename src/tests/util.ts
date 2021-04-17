import { Event, Suite } from 'benchmark';

function benchCycle(e: Event) {
  console.log(String(e.target));
}

function benchFinish(this: Suite) {
  console.log(
    `\nfast: ${this.filter('fastest').map('name')}\nslow: ${this.filter(
      'slowest'
    ).map('name')}`
  );
}

export interface Bench {
  name: string;
  fn: Function;
}

export function bench(...benches: Bench[]) {
  const suite = new Suite();

  for (let i = 0; i !== benches.length; ++i)
    suite.add(benches[i].name, benches[i].fn);

  suite.on('cycle', benchCycle).on('complete', benchFinish).run();
}
