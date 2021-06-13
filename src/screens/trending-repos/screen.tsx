import { TrendingListHeader } from '@components/trending-list-header';
import styles from '@styles/trending.module.css';
import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { useGetTrendingRepos } from '@hooks/use-get-trending-repos';
import { RepositoryRow } from '@screens/trending-repos/components/repository-row';

const RepoLoadingRow = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={100}
    viewBox='0 0 1000 100'
    backgroundColor='#1c2225'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='11' y='10' rx='3' ry='3' width='204' height='9' />
    <rect x='21' y='31' rx='3' ry='3' width='146' height='7' />
    <rect x='17' y='80' rx='3' ry='3' width='50' height='6' />
    <rect x='76' y='80' rx='3' ry='3' width='50' height='6' />
    <rect x='132' y='80' rx='3' ry='3' width='50' height='6' />
    <rect x='189' y='81' rx='3' ry='3' width='38' height='5' />
    <circle cx='243' cy='83' r='9' />
    <circle cx='267' cy='83' r='9' />
    <circle cx='292' cy='83' r='9' />
    <rect x='920' y='73' rx='3' ry='3' width='73' height='9' />
    <rect x='920' y='8' rx='3' ry='3' width='73' height='28' />
    <rect x='23' y='44' rx='3' ry='3' width='146' height='7' />
    <rect x='24' y='58' rx='3' ry='3' width='146' height='7' />
  </ContentLoader>
);

export function TrendingReposScreen() {
  const [{ isLoading, hookData, error }] = useGetTrendingRepos();
  return (
    <div
      style={{
        border: '1px solid #1D262A',
        width: '100%',
        borderRadius: '4px',
        maxHeight: '700px',
        overflow: 'hidden',
      }}
    >
      {/*List Header*/}
      <TrendingListHeader />
      {/*List Screen*/}
      <div style={{ overflow: 'scroll', maxHeight: '620px' }}>
        {isLoading && (
          <div style={{ padding: '16px' }}>
            <RepoLoadingRow />
            <RepoLoadingRow />
            <RepoLoadingRow />
            <RepoLoadingRow />
            <RepoLoadingRow />
            <RepoLoadingRow />
          </div>
        )}
        {hookData?.map((repository, index) => {
          const { rank } = repository;
          return <RepositoryRow key={rank} repo={repository} />;
        })}
      </div>
      {!isLoading && !hookData?.length && error && (
        <p className={styles.description}>Ops! Something went wrong {error} </p>
      )}
    </div>
  );
}
