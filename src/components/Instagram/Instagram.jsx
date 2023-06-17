import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Instagram = ({
  style,
  instagram = "https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/instagram-2.png",
}) => {
  return <img className="instagram" style={style} alt="Instagram" src={instagram} />;
};

Instagram.propTypes = {
  instagram: PropTypes.string,
};
