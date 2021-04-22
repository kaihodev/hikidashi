import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.optransition)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

// eslint-disable-next-line
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Convenient, simple, functional JavaScript.">

      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1" />
        <meta name="theme-color" content="#e94b27" />

        <meta property="og:type" content="website" />

        <meta name="author" content="Kaihō Dev" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <meta property="og:image" content="https://opengraph.github.com/repo/kaihodev/hikidashi" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/png" href="/hikidashi/img/hikidashi.png" />
        <link rel="shortcut icon" type="image/png" href="/hikidashi/img/hikidashi.png" />
        <link rel="apple-touch-icon" href="/hikidashi/img/hikidashi.png" />
        <meta name="msapplication-TileImage" content="/hikidashi/img/hikidashi.png" />
      </Head>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
