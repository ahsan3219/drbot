import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Linkedin = ({
  style,
  linkedin = "https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/linkedin-2.png",
}) => {
  return <img className="linkedin" style={style} alt="Linkedin" src={linkedin} />;
};

Linkedin.propTypes = {
  linkedin: PropTypes.string,
};
