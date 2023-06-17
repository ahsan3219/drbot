import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Youtube = ({
  style,
  youtube = "https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/youtube-2.png",
}) => {
  return <img className="youtube" style={style} alt="Youtube" src={youtube} />;
};

Youtube.propTypes = {
  youtube: PropTypes.string,
};
