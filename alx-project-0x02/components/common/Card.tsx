import { type CardProps } from "@/interfaces";

const Card: React.FC = (props) => {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</div>
	);
}

export default Card;
