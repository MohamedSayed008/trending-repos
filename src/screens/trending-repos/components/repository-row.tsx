import styles from '@styles/trending.module.css';
import React, { HTMLAttributes, useState } from 'react';
import { RepositoriesRes } from '@pages/api/repos';
import { StarIcon } from '@components/icons/star-icon';
import { ForkIcon } from '@components/icons/fork-icon';

interface RepositoryRow extends HTMLAttributes<HTMLDivElement> {
  repo: RepositoriesRes;
}
export function RepositoryRow(props: RepositoryRow) {
  const { repo, ...rest } = props;
  const {
    repositoryName,
    url,
    description,
    language = '',
    forks,
    starsSince,
    totalStars,
    username,
    builtBy = [],
  } = repo;

  const [isStared, setIsStared] = useState(false);

  return (
    <div
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid #1D262A',
      }}
      {...rest}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '75%', paddingRight: '12px' }}>
          <a
            style={{
              fontSize: '20px',
              flex: '1',
              marginBottom: '2px',
              color: '#58a6ff',
              display: 'block',
              cursor: 'pointer',
            }}
            href={url}
            target='_blank'
          >
            {username}/<span style={{ fontWeight: 'bold' }}>{repositoryName}</span>
          </a>
          <span style={{ fontSize: '14px', flex: '1', color: '#7D848C' }}>{description}</span>
        </div>

        <button
          className={styles.button}
          style={{ marginRight: '8px' }}
          onClick={() => setIsStared((prevSponsor) => !prevSponsor)}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!isStared && <StarIcon style={{ marginRight: '8px' }} />}
            {isStared ? 'Starred' : 'Star'}
          </div>
        </button>
      </div>
      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#8B949E',
          fontSize: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '16px' }}>{language}</span>
          <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <StarIcon /> <span style={{ marginLeft: '4px' }}>{totalStars}</span>
          </div>

          <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <ForkIcon /> <span style={{ marginLeft: '4px' }}>{forks}</span>
          </div>
          <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>Built by</span>
            {builtBy.map((developer) => (
              <a key={developer.url} href={developer.url}>
                <img
                  src={developer.avatar}
                  height='30'
                  width='30'
                  alt={`${developer.username} avatar`}
                  style={{ borderRadius: '50%', marginRight: '4px' }}
                />
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
          <StarIcon />
          <span style={{ marginLeft: '4px', color: '#8B949E', fontSize: '12px' }}>{starsSince} stars today</span>
        </div>
      </div>
    </div>
  );
}
