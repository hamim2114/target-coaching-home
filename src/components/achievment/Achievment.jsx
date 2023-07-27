import React, { useRef, useState } from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import CountUp from "react-countup";
import ScroolTrigger from "react-scroll-trigger";
import { motion } from 'framer-motion'
import "./Achievment.scss";

const Achievment = () => {
  const [viewPort, setViewPort] = useState(false);

  return (
    <section className="achievment-section">
      <div className="content-wrapper">
        <motion.h1
          transition={{ duration: 1, ease: "easeOut" }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="title" >
          Our <span className="text-green">Achievement</span>
        </motion.h1>
        <motion.p
          transition={{ duration: 1, ease: "easeOut", delay: .2 }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="description"
        >
          Quibusdam veritatis qui omnis totam laboriosam harum magnam, ex
          quaerat cupiditate dicta. <br /> veritatis qui omnis totam laboriosam
          harum magnam, ex quaerat cupiditate
        </motion.p>
        <div className="grid-wrapper">
          <motion.div
            transition={{ duration: 1.5, ease: "easeOut" }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="achievement-item">
            <FaGraduationCap className="icon" />
            <div className="count-wrapper">
              <ScroolTrigger onEnter={() => setViewPort(true)}></ScroolTrigger>
              <h1 className="count">
                {viewPort && <CountUp start={0} end={200} duration={2.75} />}+
              </h1>
              <p>STUDENTS</p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1.5, ease: "easeOut", delay: .2 }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="achievement-item">
            <RiAwardFill className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={165} duration={2.75} />}+
              </h1>
              <p>GRADUATE</p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1.5, ease: "easeOut", delay: .4 }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="achievement-item">
            <FaAward className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={158} duration={2.75} />}+
              </h1>
              <p>AWARD WINNING</p>
            </div>
          </motion.div>

          <motion.div
            transition={{ duration: 1.5, ease: "easeOut", delay: .6 }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="achievement-item">
            <BsBookHalf className="icon" />
            <div className="count-wrapper">
              <h1 className="count">
                {viewPort && <CountUp start={0} end={100} duration={2.75} />}+
              </h1>
              <p>FACULTIES</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievment;
