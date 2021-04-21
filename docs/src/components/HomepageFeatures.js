import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        Simple API based on common sense. Our no-bloat-no-complexity philosophy makes your codebase easy to maintain.

      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('../../static/img/fast.svg').default,
    description: (
      <>
        Built for the new age. Hikidashi performs orders of magnitude faster than other libraries like lodash and ramda.
      </>
    ),
  },
  {
    title: 'Modular',
    Svg: require('../../static/img/abstract.svg').default,
    description: (
      <>
        Simple file-structure lets you pick exactly what you need. Webpack, esbundle, and minification friendly, ensuring small file sizes.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
