import React from "react";
import PropTypes from "prop-types";

import "./Comment.scss";

const PLACEHOLDER = "Commentaires...";

const Comment = ({ onChange, commentText, title }) => {
  return (
    <div className="comment">
      <textarea
        className="text"
        placeholder={PLACEHOLDER}
        onChange={onChange}
        value={commentText}
        cols="25"
        rows="4"
      />
    </div>
  );
};

Comment.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  commentText: PropTypes.string
};

export default Comment;
