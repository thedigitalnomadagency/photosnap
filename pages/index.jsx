import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

//components
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-12 mg:grid-rows-1 md:grid-cols-6 h-1/2">
        <div className="flex items-center justify-center row-start-2 bg-black lg:col-span-5 md:col-span-4 md:row-start-1">
          <Zoom>
            <div className="py-10 space-y-10 text-white md:py-0 w-80 md:w-96">
              <h1 className="text-3xl font-medium tracking-widest uppercase md:text-4xl">
                create and share your photo stories.
              </h1>

              <p className="font-light">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>

              <div className="flex items-center space-x-5 cursor-pointer">
                <Link href="/">
                  <a className="tracking-widest uppercase hover:underline">
                    get an invite
                  </a>
                </Link>

                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="none" fill-rule="evenodd" stroke="#fff">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </div>
            </div>
          </Zoom>
        </div>

        <Fade left>
          <div className="bg-cover h-294 md:h-650 lg:col-span-7 md:col-span-2 bg-create-sm lg:bg-create md:bg-create-md" />
        </Fade>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-7 bg-yellow-500">1</div>
        <div className="col-span-5 bg-purple-500">2</div>
      </div>
    </Layout>
  );
};

export default Home;
