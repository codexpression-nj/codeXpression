import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
function About() {
   const abouts = [
      {
         title: "Web Designer",
         description:
            "I am a web desinger with a passion for building beautiful and functional web applications.",
        //  imageUrl: images.about01,
      },
      {
         title: "Front-end Developer",
         description:
            "I hav Experience working with designers and having an understanding of User Experience and UI Design",
        //  imageUrl: images.about02,
      },
      {
         title: "React Developer",
         description:
            "I feel happpy while designing and implementing user-facing features for websites and applications using React.js.",
        //  imageUrl: images.about03,
      },
      {
         title: "React-Native Developer",
         description:
            "With growing demand of mobile applications, a good react-native developer is a must.",
        //  imageUrl: images.about04,
      },
      {
         title: "Rest API intergration",
         description:
            "I have experience with RESTful APIs and JSON data",
        //  imageUrl: images.about04,
      },   {
         title: "React-Native Developer",
         description:
            "With growing demand of mobile applications, a good react-native developer is a must.",
        //  imageUrl: images.about04,
      },   {
         title: "React-Native Developer",
         description:
            "With growing demand of mobile applications, a good react-native developer is a must.",
        //  imageUrl: images.about04,
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
