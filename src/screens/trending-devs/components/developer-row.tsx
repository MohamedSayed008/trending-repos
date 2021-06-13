import styles from '@styles/trending.module.css';
import React, { HTMLAttributes, useState } from 'react';
import { FlameIcon } from '@components/icons/flame-icon';
import { RepoIcon } from '@components/icons/repo-icon';
import { HeartIcon } from '@components/icons/heart-icon';

interface DeveloperRow extends HTMLAttributes<HTMLDivElement> {
  rank: number;
  avatarUrl: string;
  devName: string;
  devUsername: string;
  devUrl: string;
  repoUrl: string;
  repoName: string;
  repoDescription: string;
}
export function DeveloperRow(props: DeveloperRow) {
  const { rank, avatarUrl, devName, devUsername, devUrl, repoUrl, repoName, repoDescription, ...rest } = props;

  const [isSponsored, setIsSponsored] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid #1D262A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...rest}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '40%',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '16px' }}>{rank}</span>
        <img
          src={avatarUrl}
          height='50'
          width='50'
          alt={`${devName} avatar`}
          style={{ borderRadius: '50%', marginRight: '16px' }}
        />
        <div>
          <a
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              flex: '1',
              marginBottom: '2px',
              color: '#58a6ff',
              display: 'block',
              cursor: 'pointer',
            }}
            href={devUrl}
            target='_blank'
          >
            {devName}
          </a>
          <span style={{ fontSize: '16px', flex: '1', color: '#7D848C' }}>{devUsername}</span>
        </div>
      </div>
      <div style={{ width: '40%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <FlameIcon style={{ color: '#DB6E27', marginRight: '4px' }} />
          <p style={{ color: '#7D848C', margin: 0, fontSize: '12px' }}>POPULAR REPO</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <RepoIcon style={{ color: '#8b949e', marginRight: '4px' }} />
          <a style={{ color: '#58a6ff', fontSize: '16px', fontWeight: 'bold' }} href={repoUrl} target='_blank'>
            {repoName}
          </a>
        </div>
        <p style={{ color: '#7D848C', margin: 0, fontSize: '12px' }}>{repoDescription}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className={styles.button}
          style={{ marginRight: '8px' }}
          onClick={() => setIsSponsored((prevSponsor) => !prevSponsor)}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!isSponsored && <HeartIcon style={{ color: '#DB61A2', marginRight: '8px' }} />}
            {isSponsored ? 'Sponsored' : 'Sponsor'}
          </div>
        </button>
        <button className={styles.button} onClick={() => setIsFollowed((prevSponsor) => !prevSponsor)}>
          {isFollowed ? 'Followed' : 'Follow'}
        </button>
      </div>
    </div>
  );
}
