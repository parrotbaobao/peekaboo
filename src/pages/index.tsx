import React from 'react';
import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageHeader from '../components/home/HomepageHeader';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main style={{ overflow: 'hidden' }}>
        <Features />
        <Categories />
      </main>
    </Layout>
  );
}
