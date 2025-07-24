import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<main>
				<h1>Home Page</h1>
				<Card title="Cats" content="Cats are cute domestic animals" />
				<PostModal />
				<button type="button">Open Modal</button>
			</main>
		</div>
	);
}

export default Home;
