import React from 'react';
import clsx from 'clsx';
import styles from './radiotoggle.module.scss';

interface RadioToggle {
  enabled: boolean,
  onClick(): void,
  children: JSX.Element | string
}

export default function RadioToggle({ enabled, onClick, children }:RadioToggle):JSX.Element {
  return (
    <div onClick={onClick} className={styles.radiotoggle} style={{ cursor: 'pointer' }}>
      {/* CIRCLE */}
      <div className={styles.circle_container}>
        <div className={styles.circle}>
          <div className={styles.circle_between}>
            <div className={clsx(styles.circle_inside, enabled && styles.burple)}/>
          </div>
        </div>
      </div>
      {/* TEXT */}
      <div>{children}</div>

    </div>
  );
}