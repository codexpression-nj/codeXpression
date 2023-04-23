import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
const scaleVariants = {
   whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transform: {
         duration: 1,
         ease: "easeInOut",
      },
   },
};
function Header() {
   return (
      <div className="app__header app__flex">

        
         <motion.div
               whileInView={{ x: [-100, 0], opacity: [0, 1] }}
               transition={{ duration: 1 }}
               className="app__header-info"
            >
              
            </motion.div>

         <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 0.5 }}
            className="app__header-img"
         >
            <img src={images.me}></img>
            <motion.img
               whileInView={{ scale: [0, 1] }}
               transition={{ duration: 1, ease: "easeInOut" }}
               src={images.circle}
               alt="profile circle"
               className="overlay_circle"
            />
         </motion.div>


         <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
         >

            {/* {[images.logo, images.logo, images.circle].map((circle, index) => (
               <div className="circle-cmp app__flex" key={`circle-${index}`}>
                  <img src={circle} alt="circle"></img>
               </div>
            ))}
            <div className="tag-cmp app-flex"> </div> */}
         </motion.div>
         <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header-info"
         >
            <div className="app__header-badge">
               <div className="badge-cmp app-flex">
                  <div style={{ marginLeft: 20 }}>
                     <p className="p-text">Hello, I am </p>
                     <h1 className="head-text">Nokwanda</h1>
                     <p className="p-text ">Mobile and Web Developer</p>

                  </div>
               </div>
            </div>
            <div className="app__header-badge">
               <div style={{marginTop:40}}>
               <h3 >
                     I turn a vision into reality through code and design.
                  </h3>
                  <p className="p-text " style={{marginTop:20}}>
                    I am an expirenced and highly skilled mobile and web developer. Explore my latest projects and youtube videos showcasing my
                     expertise in ReactJS, React Native, Flutter, Ionic, Angular, Vue and Firebase
                  </p>
               </div>
                 
               </div>
         </motion.div>

      </div>
   );
}

export default AppWrap(Header, "home");
