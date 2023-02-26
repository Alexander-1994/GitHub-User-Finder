import { LocalGithubUser } from '../../../../types';
import { StatisticItem } from '../StatisticItem';
import styles from './UserStatistic.module.scss';

interface UserStatisticProps extends Pick<LocalGithubUser, 'repos' | 'following' | 'followers'> {}

export const UserStatistic = ({repos, following, followers}: UserStatisticProps) => (
	<div className={styles.userStatistic}>
		<StatisticItem text='Repos' value={repos} />
		<StatisticItem text='Following' value={following} />
		<StatisticItem text='Followers' value={followers} />
	</div>
);
