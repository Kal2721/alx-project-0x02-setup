import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<main>
				<h1>Home Page</h1>
				<Card title="Cats" content="Cats are cute domestic animals" />
			</main>
		</div>
	);
}

export default Home;
