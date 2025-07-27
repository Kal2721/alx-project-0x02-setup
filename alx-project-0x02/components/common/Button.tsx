import { type ButtonProps } from '@/interface';


const Button: React.Fc<ButtonProps> = ({
	size = '',
	shape = '',
	...props
}) => {
	return (
		<button className="flex item-center justify-center transition-colors" {...props}>
		</button>
	);
}

export default Button;
