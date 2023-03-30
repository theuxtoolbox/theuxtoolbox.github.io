import * as React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

const CataloguePage = () => {
  return (
    <Layout>
      <Helmet title="Catalogue" />
      <main>
        <h1>Catalogue</h1>
      </main>
    </Layout>
  );
};

export default CataloguePage;
