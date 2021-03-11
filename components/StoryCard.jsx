import React from "react";
import Fade from "react-reveal/Fade";

const StoryCard = ({ images, children, left }) => {
  return (
    <Fade left={left}>
      <div className="stories-wrapper">
        <div className={`stories md:bg-mountains bg-mountains-sm`}>
          <div className="relative flex items-end w-full h-full p-5 bg-black md:p-10 bg-opacity-30">
            {children}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default StoryCard;
