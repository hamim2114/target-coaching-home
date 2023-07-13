import React, { useRef, useState } from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import CountUp from "react-countup";
import ScroolTrigger from "react-scroll-trigger";
import "./Achievment.scss";

const Achievment = () => {
  const [viewPort, setViewPort] = useState(false);

  return (
    <section className="achievment-section">
      <div className="content-wrapper">
        <h1 className="title" >
          Our <span className="text-green">Achievement</span>
        </h1>
        <p
          className="description"
        >
          Quibusdam veritatis qui omnis totam laboriosam harum magnam, ex
          quaerat cupiditate dicta. <br /> veritatis qui omnis totam laboriosam
          harum magnam, ex quaerat cupiditate
        </p>

        <div
          className="grid-wrapper"
        >
          <div className="achievement-item">
            <FaGraduationCap className="icon" />
            <div className="count-wrapper">
              <ScroolTrigger onEnter={() => setViewPort(true)}></ScroolTrigger>
              <h1 className="count">
                {viewPort && <CountUp start={0} end={200} duration={2.75} />}+
              </h1>
              <p>STUDENTS</p>
            </div>
          </div>

          <div className="achievement-item">
            <RiAwardFill className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={165} duration={2.75} />}+
              </h1>
              <p>GRADUATE</p>
            </div>
          </div>

          <div className="achievement-item">
            <FaAward className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={158} duration={2.75} />}+
              </h1>
              <p>AWARD WINNING</p>
            </div>
          </div>

          <div className="achievement-item">
            <BsBookHalf className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={100} duration={2.75} />}+
              </h1>
              <p>FACULTIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievment;
