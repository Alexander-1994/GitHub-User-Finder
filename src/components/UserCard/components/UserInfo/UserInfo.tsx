import { ReactComponent as CompanyIcon } from '../../../../assets/icon-company.svg';
import { ReactComponent as BlogIcon } from '../../../../assets/icon-website.svg';
import { ReactComponent as LocationIcon } from '../../../../assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from '../../../../assets/icon-twitter.svg';

import { LocalGithubUser } from '../../../../types';
import { InfoItemProps, InfoItem } from './components/InfoItem';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser, 'company' | 'blog' | 'location' | 'twitter'> {}

export const UserInfo = ({company, blog, location, twitter}: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <CompanyIcon />,
			text: company,
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
	]

	return (
		<div className={styles.userInfo}>
		  	{
				items.map((item, index) => {
					return <InfoItem {...item} key={index} />
				})
			}
		</div>
	);
}
