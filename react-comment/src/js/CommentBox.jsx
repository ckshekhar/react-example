import React from "react";
import ReactDOM from "react-dom";

import CommentList from "./CommentList.jsx";
import CommentForm from "./CommentForm.jsx";

class CommentBox extends React.Component {
	constructor() {
		super();
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
		this.state = {
			data: [],
		};
	}

	handleCommentSubmit(author, text) {
		const {data} = this.state;
		this.setState({data: data.concat({id:Date.now(), author, text})});
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<h1>Comments</h1>
				<CommentList data={data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
			);
	}
}

const mountPoint = document.getElementById('commentapp');

ReactDOM.render(<CommentBox />, mountPoint);