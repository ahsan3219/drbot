import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Twitter = ({
  style,
  twitter = "https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/twitter-2.png",
}) => {
  return <img className="twitter" style={style} alt="Twitter" src={twitter} />;
};

Twitter.propTypes = {
  twitter: PropTypes.string,
};
