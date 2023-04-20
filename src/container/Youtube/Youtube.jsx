import { React, useState, useEffect } from "react";
import "./Youtube.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import works from "../Work/WorkData";
import "./Youtube.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Youtube() {
   return (
      <>
         <h2 className="head-text">
            <span> My YouTube Channel </span>
            <span> </span>
         </h2>

         <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio app-flex"
         >
            <div style={{width: '100%'}}>
               <Carousel infiniteLoop useKeyboardArrows autoPlay centerMode style={{with:20, backgroundColor: 'red', }}>

                  {works.map((work, index) => (
                     <div style={{height:500}} className="app__work-item  app-flex" key={index}>
                        <div className="app__work-img app-flex">
                           <img src={work.imageUrl} alt="work"></img>
                           <motion.div
                              className="app__work-hover app-flex"
                              whileHover={{ opacity: [1, 1] }}
                              transition={{
                                 duration: 0.25,
                                 ease: " easeInOut",
                                 staggerChildren: 0.5,
                              }}
                           >
                              <a
                                 href={work.projectLink}
                                 target="blank"
                                 rel="noreferrer"
                              >
                                 <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.4] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                 >
                                    <AiFillEye />
                                 </motion.div>
                              </a>
                              <a href={work.codeLink} target="blank" rel="noreferrer">
                                 <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.4] }}
                                    transition={{ duration: 0.25 }}
                                    className="app__flex"
                                 >
                                    <AiFillGithub />
                                 </motion.div>
                              </a>
                           </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                           <h4 className="bold-text">{work.title}</h4>
                           <p className="p-text" style={{ marginTop: 10 }}>
                              {work.description}
                           </p>
                           <div className="app__work-tag app__flex">
                              <p className="p-text">{work.tag} </p>
                           </div>
                        </div>
                     </div>
                  ))
                  }
               </Carousel>
            </div>
         </motion.div>
      </>
   );
}

export default AppWrap(
   MotionWrap(Youtube, "app__works"),
   "work",
   "work__primarybg"
);
