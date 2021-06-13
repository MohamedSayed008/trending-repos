import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import styles from '@styles/trending.module.css';
import { useRouter } from 'next/router';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  isReposActive: boolean;
  isDevsActive: boolean;
}
const Tabs = (props: TabsProps) => {
  const { isReposActive = false, isDevsActive = false, ...rest } = props;
  return (
    <div style={{ display: 'flex' }} {...rest}>
      <Link
        href={{
          pathname: '/trends/[slug]',
          query: { slug: 'repos' },
        }}
        replace
        scroll={false}
      >
        <button className={`${styles.tab} ${isReposActive ? styles.activeTab : ''} ${styles.leftTab}`}>
          Repositories
        </button>
      </Link>

      <Link
        href={{
          pathname: '/trends/[slug]',
          query: { slug: 'devs' },
        }}
        replace
        scroll={false}
      >
        <button className={`${styles.tab} ${isDevsActive ? styles.activeTab : ''} ${styles.rightTab}`}>
          Developers
        </button>
      </Link>
    </div>
  );
};

export function TrendingListHeader() {
  const { query } = useRouter();
  const { slug } = query;
  const isRepos = slug === 'repos';
  const isDevs = slug === 'devs';
  return (
    <div
      style={{
        borderBottom: '1px solid #1D262A',
        backgroundColor: '#1C2225',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Tabs isDevsActive={isDevs} isReposActive={isRepos} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            marginRight: '24px',
          }}
        >
          Language: <span style={{ fontWeight: 'bold' }}>any</span>
        </p>
        <p>
          Date Range: <span style={{ fontWeight: 'bold' }}>Today</span>
        </p>
      </div>
    </div>
  );
}
