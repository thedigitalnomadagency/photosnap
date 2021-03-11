import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Link from "next/link";

//components
import Layout from "../components/Layout";
import StoryCard from "../components/StoryCard";
import Info from "../components/Info";
import Gradient from "../components/Gradient";

//utils
import { stories } from "../utils/stories";

const Stories = () => {
  return (
    <Layout>
      <Zoom>
        <div className="flex flex-col items-start justify-center px-24 bg-cover h-317 md:h-650 bg-moon-sm md:bg-moon-md lg:bg-moon">
          <div className="hidden space-y-6 text-white md:w-1/2 lg:w-2/5 md:block ">
            <h1 className="tracking-widest uppercase lg:text-xl">
              Last month's featured story
            </h1>

            <h1 className="w-2/3 text-4xl font-medium leading-snug uppercase lg:text-5xl">
              Hazy full moon of Appalachia
            </h1>

            <span className="flex space-x-3">
              <p className="text-lightGrey">March 2nd 2020</p>
              <p>by John Appleseed</p>
            </span>

            <p className="text-lightGrey">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>

            <div className="flex items-center pt-5 space-x-6">
              <Link href="/stories">
                <a className="tracking-widest uppercase hover:underline">
                  {" "}
                  Read the Story
                </a>
              </Link>

              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Zoom>

      <Fade left>
        <div className="p-10 space-y-6 text-white bg-black md:w-1/2 lg:w-2/5 md:hidden">
          <h1 className="tracking-widest uppercase">
            Last month's featured story
          </h1>

          <h1 className="w-2/3 text-3xl font-medium leading-snug uppercase">
            Hazy full moon of Appalachia
          </h1>

          <span className="flex space-x-3">
            <p className="text-lightGrey">March 2nd 2020</p>
            <p>by John Appleseed</p>
          </span>

          <p className="text-lightGrey">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <div className="flex items-center pt-5 space-x-6">
            <Link href="/stories">
              <a className="tracking-widest uppercase hover:underline">
                {" "}
                Read the Story
              </a>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </Fade>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, idx) => {
          return (
            <StoryCard key={idx} images={story.images}>
              <Info title={story.title} name={story.name} date={story.date} />
              <Gradient />
            </StoryCard>
          );
        })}
      </div>
    </Layout>
  );
};

export default Stories;
