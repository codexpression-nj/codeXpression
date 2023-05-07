import { React, useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import works from "./WorkData";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Work() {
   return (
      <>
         <h2 className="head-text">

            <span> Portfolio Section </span>
            <span> </span>
         </h2>
         <div>

         </div>

         <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
         >
            <section class="services">
              
               <div class="services__card">
                  <div class="services__card__svg"></div>
                  <h2 class="heading heading-sm">Animation</h2>
                  <p>All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour
                     course.</p>
               
               </div>
               <div class="services__card">
                  <div class="services__card__svg"></div>
                  <h2 class="heading heading-sm">Design</h2>
                  <p>Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
                 
               </div>
               <div class="services__card">
                  <div class="services__card__svg"></div>
                  <h2 class="heading heading-sm">Photography</h2>
                  <p>Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
                  
               </div>
               <div class="services__card">
                  <div class="services__card__svg"></div>
                  <h2 class="heading heading-sm">Crypto</h2>
                  <p>All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour
                     course.</p>
                
               </div>
               <div class="services__card">
                  <div class="services__card__svg"></div>
                  <h2 class="heading heading-sm">Business</h2>
                  <p>A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
                
               </div>
            </section>
         </motion.div>
      </>
   );
}

export default AppWrap(
   MotionWrap(Work, "app__works"),
   "work",
   "work__primarybg"
);
