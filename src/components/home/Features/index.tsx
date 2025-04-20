import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';

export default function Features(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <div className={styles.featureCard}>
                            <FontAwesomeIcon icon={faCode} className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>技术笔记</h3>
                            <p className={styles.featureDescription}>
                                记录学习过程中的技术要点和最佳实践
                            </p>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className={styles.featureCard}>
                            <FontAwesomeIcon icon={faBook} className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>学习资源</h3>
                            <p className={styles.featureDescription}>
                                整理优质的学习资源和教程
                            </p>
                        </div>
                    </div>
                    <div className="col col--4">
                        <div className={styles.featureCard}>
                            <FontAwesomeIcon icon={faLightbulb} className={styles.featureIcon} />
                            <h3 className={styles.featureTitle}>经验分享</h3>
                            <p className={styles.featureDescription}>
                                分享开发经验和问题解决方案
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 