import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <main>
        <h1>About</h1>
      </main>
    </Layout>
  );
};

export default AboutPage;
