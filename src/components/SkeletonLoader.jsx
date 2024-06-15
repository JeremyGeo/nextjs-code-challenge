// components/SkeletonLoader.js
import styles from './css/SkeletonLoader.module.css'; // Assuming you have a CSS module for skeleton loader

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.textPlaceholder}></div>
      <div className={styles.textPlaceholder}></div>
    </div>
  );
};

export default SkeletonLoader;
