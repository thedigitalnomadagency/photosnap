import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

//components
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-12 md:grid-rows-1 md:grid-cols-6">
        <div className="relative flex items-center justify-center row-start-2 bg-black lg:col-span-5 md:col-span-4 md:row-start-1">
          <div className="absolute md:left-0 top-0 md:top-52 left-10 w-40 md:w-1.5 h-1.5 md:bg-gradient-to-b bg-gradient-to-r from-tertiary via-secondary to-primary md:h-72" />
          <Zoom>
            <div className="py-10 space-y-10 text-white md:py-0 w-80 md:w-96">
              <h1 className="heading">create and share your photo stories.</h1>

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
                  <g fill="none" fillRule="evenodd" stroke="#fff">
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

      <div className="grid lg:grid-cols-12 md:grid-rows-1 md:grid-cols-6">
        <Fade left>
          <div className="bg-cover h-294 md:h-600 lg:col-span-7 md:col-span-2 bg-stories-sm lg:bg-stories md:bg-stories-md" />
        </Fade>

        <div className="flex items-center justify-center bg-white lg:col-span-5 md:col-span-4">
          <Zoom>
            <div className="py-10 space-y-10 text-black md:py-0 w-80 md:w-96">
              <h1 className="heading w-72">Beautiful stories every time</h1>

              <p className="font-light">
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>

              <div className="flex items-center space-x-5 cursor-pointer">
                <Link href="/">
                  <a className="tracking-widest uppercase hover:underline">
                    View the stories
                  </a>
                </Link>

                <img src="/arrow.svg" alt="" />
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 md:grid-rows-1 md:grid-cols-6">
        <div className="flex items-center justify-center row-start-2 bg-white lg:col-span-5 md:col-span-4 md:row-start-1">
          <Zoom>
            <div className="py-10 space-y-10 text-black md:py-0 w-80 md:w-96">
              <h1 className="heading ">Designed for everyone</h1>

              <p className="font-light">
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>

              <div className="flex items-center space-x-5 cursor-pointer">
                <Link href="/">
                  <a className="tracking-widest uppercase hover:underline">
                    View the stories
                  </a>
                </Link>

                <img src="/arrow.svg" alt="" />
              </div>
            </div>
          </Zoom>
        </div>

        <Fade left>
          <div className="bg-cover h-294 md:h-600 lg:col-span-7 md:col-span-2 bg-designed-sm lg:bg-designed md:bg-designed-md" />
        </Fade>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <Fade left>
          <div className="stories-wrapper">
            <div className="stories bg-mountains-sm md:bg-mountains">
              <Info title="The Mountain" name="John Appleseed" />
              <Gradient />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="stories-wrapper">
            <div className="stories md:bg-cityscapes bg-cityscapes-sm">
              <Info title="Sunset Cityscapes" name="Benjamin Cruz" />
              <Gradient />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="stories-wrapper">
            <div className="stories md:bg-voyage bg-voyage-sm">
              <Info title="18 Days Voyage" name="Alexei Borodin" />
              <Gradient />
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="stories-wrapper">
            <div className="stories md:bg-architecturals bg-architecturals-sm">
              <Info title="Architecturals" name="Samantha Brooke" />
              <Gradient />
            </div>
          </div>
        </Fade>
      </div>

      <Zoom>
        <div className="grid py-10 lg:grid-cols-3">
          <Feature>
            <div className="">
              <img src="/responsive.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">100% Responsive</h1>

            <p className="text-center">
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </Feature>

          <Feature>
            <div className="p-5">
              <img src="/no-limit.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">
              No Photo Upload Limit
            </h1>

            <p className="text-center">
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </Feature>

          <Feature>
            <div className="">
              <img src="/embed.svg" alt="" />
            </div>

            <h1 className="text-xl font-bold text-center">
              Available to Embed
            </h1>

            <p className="text-center">
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </Feature>
        </div>
      </Zoom>
    </Layout>
  );
};

const Gradient = () => {
  return (
    <div className="absolute bottom-0 left-0 hidden w-full h-2 group-hover:block bg-gradient-to-r from-tertiary via-secondary to-primary" />
  );
};

const Info = ({ title, name }) => {
  return (
    <div className="w-full space-y-5 text-white divide-y">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>by {name}</p>
      </div>

      <div className="flex items-center justify-between pt-5">
        <Link href="/stories">
          <a className="tracking-widest uppercase"> Read Story</a>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="#fff">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </div>
    </div>
  );
};

const Feature = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16 space-y-5">
      {children}
    </div>
  );
};

export default Home;
