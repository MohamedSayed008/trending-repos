import Head from 'next/head';
import styles from '@styles/trending.module.css';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import React from 'react';
import { TrendingDevsScreen } from '@screens/trending-devs/screen';
import { TrendingReposScreen } from '@screens/trending-repos/screen';

///// we could create 2 different pages instead of 2 screens based on URL Param
export default function TrendingPage() {
  const { query } = useRouter();
  const { slug } = query;
  const isRepos = slug === 'repos';
  const isDevs = slug === 'devs';

  return (
    <div className={styles.container}>
      <Head>
        {isRepos && <title>Trending Repositories</title>}
        {isDevs && <title>Trending Develops</title>}
      </Head>

      <header className={styles.header}>
        {/*Heading*/}
        <div style={{ height: '150px', borderBottom: '2px solid #1C2225', width: '100%', textAlign: 'center' }}>
          <h1 className={styles.title} style={{ marginTop: '24px' }}>
            Trending
          </h1>

          {isRepos && <p>See what the GitHub community is most excited about today.</p>}
          {isDevs && <p>These are the develops building the hot tools today</p>}
        </div>
      </header>

      <main className={styles.main}>
        {isDevs && <TrendingDevsScreen />}
        {isRepos && <TrendingReposScreen />}
      </main>
    </div>
  );
}

export const getServerSideProps = async (props: NextPageContext) => {
  ///////////////////////
  // In case we need serverSide rendering to any data , we should check here on userAgent userAgent.toLocaleLowerCase().indexOf('google') > -1;
  /////////////////////
  // const { query } = props;
  // try {
  //   const { data: devs } = await getTrendingDevs();
  //   const { data: repos } = await getTrendingRepos();
  //   return { props: { data: devs } };
  // } catch (e) {
  //   console.log(e);
  // }

  return { props: {} };
};
