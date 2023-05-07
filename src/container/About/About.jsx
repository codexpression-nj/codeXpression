import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
function About() {
   const abouts = [
    
      {
         title: "Front-end Developer",
         description:
            "I have experience working with designers and having an understanding of User Experience and UI Design.",
      },
      {
         title: "React Developer",
         description:
            "I feel happpy while designing and implementing user-facing features for websites and applications using React.js.",
      },
      {
         title: "React-Native Developer",
         description:
            "With growing demand of mobile applications, a good react-native developer is a must.",
      },
      {
         title: "Rest API intergration",
         description:
            "I have experience with RESTful APIs and JSON data",
      },   {
         title: "Angular Developer",
         description:
            "Extensive experience building high quality web applications using Angular",
      },   {
         title: "Ionic Developer",
         description:
            "I have a keen interest in mobile UX/UI design and Material Design",
      }, {
         title: "Flutter Developer",
         description:
            "I have knack for visually pleasing designs and flutter always gives me that.",
      },
   ];
   return (
      <>
         <h2 className="head-text">
            I Know that
            <span> Good Design </span>
            means
            <span> Good Business</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  {/* <img src={about.imageUrl} alt={about.title}></img> */}
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
