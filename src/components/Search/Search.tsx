import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { Button } from '../Button';
import styles from './Search.module.scss';

interface SearchProps {
	hasError: boolean,
	onSubmit: (text: string) => void,
}

type FormField = {
	username: HTMLInputElement,
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
	
	const handleSubmit = (Event: React.FormEvent<HTMLFormElement & FormField>) => {
		Event.preventDefault();
		const text = Event.currentTarget.username.value;

		if (text) {
			onSubmit(text);
			Event.currentTarget.reset();
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