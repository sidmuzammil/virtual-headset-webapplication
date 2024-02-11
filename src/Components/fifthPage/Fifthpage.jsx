import React, { useState } from "react";
import downArrow from "../../assets/fifth/downArrow.svg";
import Uparrow from "../../assets/fifth/upArrow.svg";
import "./fifthsection.scss"
import { motion } from "framer-motion";

const Fifthpage = () => {
  const [selected,setSelected]=useState(null)

  const toggle=(i)=>{
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className="fifthPage-container">
       <h1>F.A.Q</h1>
      <div className="wrapper">
        {FAQS.map((item, i) => (
          <div className="listing">
            <div className="title"  onClick={()=>toggle(i)}>
              <h1>{item.question}</h1>
              <img src={selected === i ? Uparrow : downArrow} alt="fucking"/>
            </div>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={selected === i ? "content-show" :"content"}>{item.answer}</motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQS = [
  {
    question: "What are the different types of virtual headsets available?",
    answer: `Various VR headset types exist, including tethered options like
    Oculus Rift, standalone models such as Oculus Quest, smartphone
    headsets like Google Cardboard, mixed reality devices like Microsoft
    HoloLens, and PC headsets like Valve Index. Enterprise-grade options
    like Oculus for Business cater to professionals, while wireless
    adapters offer freedom of movement for tethered headsets.`,
  },
  {
    question: "How does a virtual headset work?",
    answer: `Various VR headset types exist, including tethered options like
    Oculus Rift, standalone models such as Oculus Quest, smartphone
    headsets like Google Cardboard, mixed reality devices like Microsoft
    HoloLens, and PC headsets like Valve Index. Enterprise-grade options
    like Oculus for Business cater to professionals, while wireless
    adapters offer freedom of movement for tethered headsets.`,
  },
  {
    question: "Do I need a powerful computer to use a virtual headset?",
    answer: `Various VR headset types exist, including tethered options like
    Oculus Rift, standalone models such as Oculus Quest, smartphone
    headsets like Google Cardboard, mixed reality devices like Microsoft
    HoloLens, and PC headsets like Valve Index. Enterprise-grade options
    like Oculus for Business cater to professionals, while wireless
    adapters offer freedom of movement for tethered headsets.`,
  },
  {
    question: "What are the main applications of virtual headsets?",
    answer: `Various VR headset types exist, including tethered options like
    Oculus Rift, standalone models such as Oculus Quest, smartphone
    headsets like Google Cardboard, mixed reality devices like Microsoft
    HoloLens, and PC headsets like Valve Index. Enterprise-grade options
    like Oculus for Business cater to professionals, while wireless
    adapters offer freedom of movement for tethered headsets.`,
  },
];

export default Fifthpage;
