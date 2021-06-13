import { TrendingListHeader } from '@components/trending-list-header';
import { DeveloperRow } from '@screens/trending-devs/components/developer-row';
import styles from '@styles/trending.module.css';
import React from 'react';
import { useGetTrendingDevs } from '@hooks/use-get-trending-devs';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const DevLoadingRow = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={80}
    viewBox='0 0 1000 80'
    backgroundColor='#1c2225'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
    <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
    <rect x='800' y='11' rx='3' ry='3' width='83' height='21' />
    <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
    <circle cx='20' cy='20' r='20' />
    <rect x='225' y='8' rx='3' ry='3' width='88' height='6' />
    <rect x='225' y='18' rx='3' ry='3' width='88' height='6' />
    <rect x='225' y='28' rx='3' ry='3' width='88' height='6' />
    <rect x='705' y='11' rx='3' ry='3' width='78' height='21' />
  </ContentLoader>
);

export function TrendingDevsScreen() {
  const [{ isLoading, hookData, error }] = useGetTrendingDevs();
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
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
            <DevLoadingRow />
          </div>
        )}
        {hookData?.map((developer, index) => {
          const { rank, avatar = '', name, username, url, popularRepository } = developer;
          const { repositoryName, url: repoUrl, description } = popularRepository ?? {};
          return (
            <DeveloperRow
              key={rank}
              avatarUrl={avatar}
              devName={name}
              devUsername={username}
              devUrl={url}
              repoUrl={repoUrl}
              repoDescription={description}
              repoName={repositoryName}
              rank={rank}
            />
          );
        })}
      </div>
      {!isLoading && !hookData?.length && error && (
        <p className={styles.description}>Ops! Something went wrong {error} </p>
      )}
    </div>
  );
}
