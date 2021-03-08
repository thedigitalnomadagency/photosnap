import Fade from "react-reveal/Fade";

//components
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-12 h-1/2">
        <div className="bg-black lg:col-span-5">1</div>
        <Fade right>
          <div className="bg-cover h-500 lg:col-span-7 bg-create" />
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
