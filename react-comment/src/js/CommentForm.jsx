import React from "react";

export default class CommentForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const author = this.refs.author.value.trim();
		const commentText = this.refs.commentText.value.trim();
		if(!author || !commentText) {
			return;
		}
		this.props.onCommentSubmit(author, commentText);
		this.refs.author.value = '';
		this.refs.commentText.value = '';
	}

	render() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
		        <input type="text" placeholder="Your name" ref="author"/>
		        <input type="text" placeholder="Say something..." ref="commentText"/>
		        <input type="submit" value="Submit" />
		    </form>
			);
	}
}

CommentForm.propTypes = {
	onCommentSubmit: React.PropTypes.func.isRequired
}