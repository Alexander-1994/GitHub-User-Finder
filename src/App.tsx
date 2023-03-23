import { useState } from "react";
import { LocalGithubUser } from "./types";
import { Container } from "./components/Container";
import { TheHeader } from "./components/TheHeader";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { defaultUser } from "./mock";
import { userResource } from "./userResource";

export default function App() {
	const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

	const handleSubmit = async (value: string) => {
		const response = await userResource(value);
		setUser(response);
	} 

	return (
		<Container>
			<TheHeader />
			<Search hasError={!user} onSubmit={handleSubmit} />
			{user && (
				<UserCard {...user} />
			)}
		</Container>
	);
}