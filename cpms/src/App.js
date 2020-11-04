import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Events from './pages/admin/Events';
import Reservations from './pages/admin/Reservation';
import Maintenance from './pages/admin/Maintenance';
import Payments from './pages/admin/Payments';
import Residents from './pages/admin/Residents';
import Messages from './pages/admin/Messages';




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
        <Router>

          <Switch>
            <Route path="/" exact component={Events} />
            <Route path="/admin/events" exact component={Events} />
            <Route path="/admin/reservations" component={Reservations} />
            <Route path="/admin/maintenance" exact component={Maintenance} />
            <Route path="/admin/payments" component={Payments} />
            <Route path="/admin/residents" component={Residents} />
            <Route path="/admin/messages" component={Messages} />


          </Switch>
        </Router>


      </Content>
      <Footer>
        (c)2020 Community Property Management System. All Rights Reserved.
      </Footer>
    </Layout>

  );
}

export default App;
