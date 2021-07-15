import { Layout } from "./layout/Layout";
import { VerificationForm } from "./pages/VerificationForm/VerificationForm";
import { VerificationProvider } from "./store/verification/VerificationProvider";
import Theme from "./styles/theme";

const App = () => (
  <Theme>
    <VerificationProvider>
      <Layout>
        <VerificationForm />
      </Layout>
    </VerificationProvider>
  </Theme>
);

export default App;
