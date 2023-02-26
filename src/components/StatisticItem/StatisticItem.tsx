import styles from './StatisticItem.module.scss';

interface StatisticItemProps {
	text: string,
	value: number,
}

export const StatisticItem = ({text, value}: StatisticItemProps) => (
	<div className={styles.info}>
		<div className={styles.infoTitle}>{text}</div>
		<div className={styles.infoNumber}>{value}</div>
	</div>
);
