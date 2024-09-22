import React from "react";
import "./join.css";

export const Join = () => {
  return (
    <div>
      <div className="join_main">
        <div className="join_hero"></div>
        <div className="join_container">
          <h1>Join with us</h1>
          <div className="join_c1">
            <p>
              Are you ready to be part of a global community driving innovation
              and technological advancements? Join the IEEE, where brilliance
              converges, ideas flourish, and possibilities are limitless. We
              Offer you:
            </p>
            <div className="join_lbox">
              <div className="join_sbox">
                <p>
                  Sophisticated Research and Publications to gain access to a
                  vast repository of research papers, journals, and publications
                  covering the latest advancements in technology, engineering,
                  and computer science.
                </p>
              </div>
              <div className="join_sbox">
                <p>
                  Attend and participate in prestigious IEEE conferences where
                  you can present your research, connect with experts, and stay
                  at the forefront of technological breakthroughs.
                </p>
              </div>
              <div className="join_sbox">
                <p>
                  Career Development Opportunities and programs designed to
                  boost your career, including mentorship programs, job fairs,
                  and guidance on professional growth within the IEEE network.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="join_last">
              <p>
                Career Development Opportunities and programs designed to boost
                your career, including mentorship programs, job fairs, and
                guidance on professional growth within the IEEE network.
              </p>
              <center>
                <button>Join</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
