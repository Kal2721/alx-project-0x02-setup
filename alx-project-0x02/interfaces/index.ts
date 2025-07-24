export interface CardProps {
	title: string;
	content: string;
	onClose: () => void;
	onSubmit: (post: PostData) => void;
}


