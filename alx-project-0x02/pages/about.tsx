import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
import { type ButtonProps } from '@/interface';

const About: React.FC = () => {
	return (
		<div>
			<Header />
			<h1>About Us</h1>
			<Button size= "small" shape="rounded-full" />
		</div>
	);
}

export default About;

