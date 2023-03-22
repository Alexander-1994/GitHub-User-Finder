import { Container } from "./components/Container";
import { TheHeader } from "./components/TheHeader";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { defaultUser } from "./mock";

export default function App() {
	return (
		<Container>
			<TheHeader />
			<Search hasError onSubmit={() => {}} />
			<UserCard {...defaultUser} />
		</Container>
	);
}