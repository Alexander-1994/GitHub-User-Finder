import { LocalGithubUser } from '../../types';
import { UserPhoto } from './components/UserPhoto';
import { UserTitle } from './components/UserTitle';
import { UserStatistic } from './components/UserStatistic';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
	const {
		name, 
		login, 
		created,
		repos,
		following,
		followers,
		avatar,
		bio
	} = props;

	return (
		<div className={styles.userCard}>
			<UserPhoto 
				avatar={avatar}
				name={name}
			/>
			<UserTitle 
				name={name}
				login={login}
				created={created}
			/>
			<p className={`${styles.bio}${bio ? '' : ` ${styles.empty}`}`}>
				{bio ?? 'This profile has no bio'}
			</p>
			<UserStatistic 
				repos={repos}
				following={following}
				followers={followers}
			/>
		</div>
	)
}