import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  href: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Virtual Keys',
    href: '/docs/tokenvue/virtual-key',
    image: '/img/docs/vk-1.png',
    description: (
      <>
        Issue application-facing keys that hide provider credentials, enforce
        usage limits, and keep every request visible.
      </>
    ),
  },
  {
    title: 'Guardrails',
    href: '/docs/tokenvue/guardrail',
    image: '/img/docs/gd-1.png',
    description: (
      <>
        Apply budget, PII, toxicity, injection, and keyword controls before
        requests reach an LLM provider.
      </>
    ),
  },
  {
    title: 'Auto Router',
    href: '/docs/tokenvue/auto-router',
    image: '/img/docs/ar-1.png',
    description: (
      <>
        Move traffic across providers and fallback routes when budgets,
        latency, quotas, or availability change.
      </>
    ),
  },
  {
    title: 'Insights',
    href: '/docs/connect/insights',
    image: '/img/docs/in-1.png',
    description: (
      <>
        Monitor token volume, estimated spend, provider performance, latency,
        service hotspots, and guardrail activity.
      </>
    ),
  },
];

function Feature({title, image, href, description}: FeatureItem) {
  return (
    <Link className={styles.featureCard} to={href}>
      <img className={styles.featureImage} src={image} alt={`${title} screen`} />
      <div className={styles.featureBody}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Core Workflows</Heading>
          <p>
            TokenVue documentation is organized around the gateway setup,
            policy controls, operating views, and team management screens.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
