import React from "react";
import { Facebook } from "../../components/Facebook";
import { Instagram } from "../../components/Instagram";
import { Linkedin } from "../../components/Linkedin";
import { Twitter } from "../../components/Twitter";
import { Youtube } from "../../components/Youtube";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img
            className="mask-group"
            alt="Mask group"
            src="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/mask-group-2.png"
          />
          <div className="frame">
            <div className="dr-ALI">
              <span className="text-wrapper">Dr </span>
              <span className="span">A</span>
              <span className="text-wrapper-2">L</span>
              <span className="text-wrapper-3">I</span>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-4">Blog</div>
              <div className="text-wrapper-5">Login</div>
              <div className="div-wrapper">
                <div className="text-wrapper-6">Register</div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="group-2">
              <h1 className="ask-dr-ALI">
                <span className="text-wrapper-7">Ask Dr </span>
                <span className="text-wrapper-8">A</span>
                <span className="text-wrapper-9">L</span>
                <span className="text-wrapper-10">I</span>
              </h1>
              <div
                className="group-3"
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/image-5@2x.png)",
                }}
              />
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-group-wrapper">
              <div
                className="overlap-group"
                style={{
                  backgroundImage:
                    "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/rectangle-5.svg)",
                }}
              >
                <div className="group-wrapper">
                  <div className="group-5">
                    <div className="ask-dr-ALI-2">
                      <span className="text-wrapper-11">Ask Dr </span>
                      <span className="text-wrapper-12">A</span>
                      <span className="text-wrapper-13">L</span>
                      <span className="text-wrapper-14">I</span>
                    </div>
                    <div
                      className="group-6"
                      style={{
                        backgroundImage:
                          "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/image-5@2x.png)",
                      }}
                    />
                  </div>
                </div>
                <p className="p">
                  Introducing Dr. Ali, your virtual medical assistant powered by advanced AI technology. Dr. Ali is an
                  intelligent bot designed to provide you with reliable medical information and assistance.
                </p>
                <div className="frame-wrapper">
                  <div className="frame-3">
                    <div className="text-wrapper-15">See More</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div
                  className="group-7"
                  style={{
                    backgroundImage:
                      "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/rectangle-5-1.svg)",
                  }}
                >
                  <div
                    className="overlap-3"
                    style={{
                      backgroundImage:
                        "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/rectangle-6.svg)",
                    }}
                  >
                    <div className="frame-4">
                      <div className="group-8">
                        <div
                          className="overlap-group-2"
                          style={{
                            backgroundImage:
                              "url(https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/rectangle-7.svg)",
                          }}
                        >
                          <img
                            className="img"
                            alt="Frame"
                            src="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/frame.svg"
                          />
                          <div className="text-wrapper-16">Type your question here</div>
                        </div>
                      </div>
                      <div className="frame-5">
                        <div className="frame-6">
                          <img
                            className="layer"
                            alt="Layer"
                            src="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/layer-1.svg"
                          />
                          <p className="text-wrapper-17">Most questions answered in 30 seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-7">
                  <img
                    className="mask-group-2"
                    alt="Mask group"
                    src="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/mask-group-1@2x.png"
                  />
                  <div className="ask-dr-ALI-3">
                    <span className="text-wrapper-18">Ask Dr </span>
                    <span className="text-wrapper-19">A</span>
                    <span className="text-wrapper-20">L</span>
                    <span className="text-wrapper-21">I</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">
          <footer className="footer">
            <div className="group-9">
              <div className="overlap-group-3">
                <div className="frame-8">
                  <Facebook
                    facebook="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/facebook.svg"
                    style={{
                      left: "unset",
                      minWidth: "24px",
                      position: "relative",
                      top: "unset",
                      width: "unset",
                    }}
                  />
                  <Twitter
                    style={{
                      left: "unset",
                      minWidth: "24px",
                      position: "relative",
                      top: "unset",
                      width: "unset",
                    }}
                    twitter="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/twitter.svg"
                  />
                  <Linkedin
                    linkedin="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/linkedin.svg"
                    style={{
                      left: "unset",
                      minWidth: "24px",
                      position: "relative",
                      top: "unset",
                      width: "unset",
                    }}
                  />
                  <Youtube
                    style={{
                      left: "unset",
                      minWidth: "24px",
                      position: "relative",
                      top: "unset",
                      width: "unset",
                    }}
                    youtube="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/youtube.svg"
                  />
                  <Instagram
                    instagram="https://anima-uploads.s3.amazonaws.com/projects/648e313ab28ec4c8efe5b8b7/releases/648e31d4b28ec4c8efe5b8b8/img/instagram.svg"
                    style={{
                      left: "unset",
                      minWidth: "24px",
                      position: "relative",
                      top: "unset",
                      width: "unset",
                    }}
                  />
                </div>
                <p className="copyright-elo">Copyright © 2023 DR ALI. All Rights Reserved</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
