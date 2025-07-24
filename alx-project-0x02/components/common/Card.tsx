import { CardProps } from "@/interfaces";

const CardComponents: React.FC = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);
}

export default CardComponents;
