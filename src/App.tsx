import React from "react";
import { Layout } from "./layout/Layout";
import Theme from "./styles/theme";

function App() {
  return (
    <Theme>
      <Layout>
        <div>This is the challenge</div>
      </Layout>
    </Theme>
  );
}

export default App;
