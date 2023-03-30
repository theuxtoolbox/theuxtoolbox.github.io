import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import { process } from "../content/process";
import Layout from "../components/layout";

const CataloguePage = () => {
  return (
    <Layout>
      <Helmet title="Catalogue" />
      <main>
        <h1>Catalogue</h1>
        {process.map((step) => (
          <>
            <h2 key={step.name}> {step.name} </h2>
            <p>{step.readyWhen}</p>
            <p>{step.finishedWhen}</p>
            <ul>
              {step.tools.map((tool) => (
                <li key={tool.name}>
                  <Link to={tool.link}>{tool.name}</Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </main>
    </Layout>
  );
};

export default CataloguePage;
