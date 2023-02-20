import React, { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';
import styles from './Search.module.scss';

interface SearchProps {
	hasError: boolean,
	onSubmit: (text: string) => void,
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
	const searchRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (Event: React.FormEvent) => {
		Event.preventDefault();

		const text = searchRef.current ? searchRef.current.value : '';
		
		if (text && searchRef.current) {
			onSubmit(text);
			searchRef.current.value = '';
		}
	}

	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SearchIcon />
				</label>
				<input 
					className={styles.textField}
					ref={searchRef}
					type='text'
					id='search'
					name='username'
					placeholder='Search GitHub username...'
				/>
				{hasError && (
					<div className={styles.error}>
						No result
					</div>
				)}
				<Button>Search</Button>
			</div>
		</form>
	);
}