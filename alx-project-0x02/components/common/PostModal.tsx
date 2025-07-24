import { type CardProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<CardProps> = ({ onClose, onSubmit }) => {
	const [post, setPost] = useState<PostData>({
		title: "",
		content: ""
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(post);
		onClose();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setPost((prevPost) => ({ ...prevPost, [name]: value}));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title</label>
					<input type="string" id="title" name="title" value={post.title} onChange={handleChange} />
				</div>

				<div>
					<label htmlFor="content">Content</label>
					<input type="string" id="content" name="content" value{post.content} onChange={handleChange} />
				</div>
				
				<div>
					<button type="button" onClick={onClose}>Cancel</button>
					<button type="submit">Add Post</button>
				</div>
			</form>
		</div>
	);
}

export default PostModal;


