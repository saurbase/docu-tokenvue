import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docPaths = [
  {
    title: 'Start the gateway',
    href: '/docs/getting-started',
    description:
      'Create a workspace, connect an LLM provider, issue a virtual key, and send the first request through TokenVue.',
  },
  {
    title: 'Configure controls',
    href: '/docs/category/gateway',
    description:
      'Manage provider configuration, virtual keys, guardrails, routing policies, retries, and fallback behavior.',
  },
  {
    title: 'Review operations',
    href: '/docs/connect/insights',
    description:
      'Use Insights, Logs, Breaches, Billing, and Token Calculator pages to understand usage, cost, latency, and policy events.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>TokenVue Docs</p>
            <Heading as="h1" className={styles.heroTitle}>
              Operate LLM traffic through one control plane.
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Read overview
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual} aria-label="TokenVue dashboard preview">
            <img src="/img/docs/in-1.png" alt="TokenVue insights dashboard" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="TokenVue documentation for virtual keys, LLM provider configuration, guardrails, routing, insights, logs, billing, workspaces, and user access.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.docPaths}>
          <div className="container">
            <Heading as="h2">Documentation Paths</Heading>
            <div className={styles.pathGrid}>
              {docPaths.map((path) => (
                <Link className={styles.pathCard} to={path.href} key={path.href}>
                  <span>{path.title}</span>
                  <p>{path.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
