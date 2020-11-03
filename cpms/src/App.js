import { Menu, Layout } from 'antd';
import HomePage from './components/HomePage';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        {/* <img src={starlinkLogo} className="App-logo" alt="logo" /> */}
        <p className="title">
          CPMS
        </p>
      </Header>
      <Content>
        <HomePage />
      </Content>
      <Footer>
        (c)2020 Community Property Management System. All Rights Reserved.
      </Footer>
    </Layout>

  );
}

export default App;
