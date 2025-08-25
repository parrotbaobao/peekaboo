import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.css';

export default function Categories(): JSX.Element {
    return (
        <section className={styles.categories}>
            <div className="container">
                <Heading as="h2" className="text--center">
                    学习分类
                </Heading>
                <div className={styles.categoryGrid}>
                    <Link to="docs/angular" className={styles.categoryCard}>
                        <div className={styles.categoryIcon}>
                            <FontAwesomeIcon icon={faAngular} />
                        </div>
                        <h3 className={styles.categoryTitle}>Angular</h3>
                        <p className={styles.categoryDescription}>
                            Angular 框架学习笔记和最佳实践
                        </p>
                    </Link>
                    <Link to="docs/react" className={styles.categoryCard}>
                        <div className={styles.categoryIcon}>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <h3 className={styles.categoryTitle}>React</h3>
                        <p className={styles.categoryDescription}>
                            React 开发技巧和组件设计
                        </p>
                    </Link>
                    <Link to="docs/vue" className={styles.categoryCard}>
                        <div className={styles.categoryIcon}>
                            <FontAwesomeIcon icon={faVuejs} />
                        </div>
                        <h3 className={styles.categoryTitle}>Vue</h3>
                        <p className={styles.categoryDescription}>
                            Vue.js 应用开发和性能优化
                        </p>
                    </Link>
                    </div>
            </div>
        </section>
    );
} 