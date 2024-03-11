import Link from 'next/link';
import styles from './dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Dashboard page</h1>
      <Link href="dashboard/panel">panel</Link>
    </div>
  );
}
