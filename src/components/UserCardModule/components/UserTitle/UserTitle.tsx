import { LocalGithubUser } from '../../../../types';
import { localDate } from '../../../../util';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {}

export const UserTitle = ({name, login, created}: UserTitleProps) => {
	const joinedDate = localDate.format(new Date(created));

	return (
		<div className={styles.userTitle}>
			<h2>{name}</h2>
			<h3>{login}</h3>
			<span>{joinedDate}</span>
		</div>
	);
}