import React from "react";


export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { author, text } = this.props;
		return (
			<div className="col-xs-12">
				<h2>{author}</h2>
				<span>{text}</span>
			</div>
		);
	}
}

Comment.propTypes = {
	text: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
};