import React from "react";
import Comment from "./Comment.jsx";

export default class CommentList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		const cList = data.map((d) => {
			return (<Comment key={d.id} author={d.author} text={d.text} />);
		});
		return (
			<div>
				{cList}
			</div>
		)
	}
}

CommentList.propTypes = {
	data: React.PropTypes.array.isRequired
}