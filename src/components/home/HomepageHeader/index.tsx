import React, { JSX } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export default function HomepageHeader(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className={styles.heroTitle}>
                    {siteConfig.title}
                </Heading>
                <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg"
                        to="docs/angular">
                        开始学习
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="blog">
                        查看博客
                    </Link>
                </div>
            </div>
        </header>
    );
} 