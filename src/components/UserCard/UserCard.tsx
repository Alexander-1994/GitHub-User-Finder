import { LocalGithubUser } from 'types';
import { UserStatistic } from 'components/UserStatistic';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
	<div className={styles.userCard}>
		<UserStatistic 
			repos={props.repos}
			following={props.following}
			followers={props.followers}
		/>
	</div>
);
