import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Facebook = ({
  style,
  facebook = "https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/facebook-2.png",
}) => {
  return <img className="facebook" style={style} alt="Facebook" src={facebook} />;
};

Facebook.propTypes = {
  facebook: PropTypes.string,
};
