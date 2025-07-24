import Header from "@/components/layout/Header";
import CardComponent from "@/components/common/Card";

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<main>
				<h1>Home Page</h1>
				<CardComponent title="Cats" content="Cats are cute domestic animals" />
			</main>
		</div>
	);
}

export default Home;
