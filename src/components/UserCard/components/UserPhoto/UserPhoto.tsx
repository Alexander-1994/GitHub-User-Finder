import { LocalGithubUser } from '../../../../types';
import styles from './UserPhoto.module.scss';

interface UserPhotoProps extends Pick<LocalGithubUser, 'avatar' | 'name'> {}

export const UserPhoto = ({avatar, name}: UserPhotoProps) => (
	<img 
		className={styles.avatar}
		src={avatar}
		alt={name ? name : 'avatar'}
	/>
);
