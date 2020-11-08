import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EventsAdmin from './pages/admin/Events';
import ReservationsAdmin from './pages/admin/Reservations';
import MaintenanceAdmin from './pages/admin/Maintenance';
import PaymentsAdmin from './pages/admin/Payments';
import ResidentsAdmin from './pages/admin/Residents';
import MessagesAdmin from './pages/admin/Messages';

import CalendarResident from './pages/resident/Calendar';
import AccountResident from './pages/resident/Account';
import BookAmenityResident from './pages/resident/BookAmenity';
import ReservationsResident from './pages/resident/Reservations';
import MaintenanceResident from './pages/resident/Maintenance';
import MessagesResident from './pages/resident/Messages';

import LogIn from './pages/Login';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        {/* <img src={starlinkLogo} className="App-logo" alt="logo" /> */}
        <text className="title">
          CPMS
        </text>
      </Header>
      <Content>
        <Router>

          <Switch>
            <Route path="/admin" exact component={EventsAdmin} />
            <Route path="/admin/events" exact component={EventsAdmin} />
            <Route path="/admin/reservations" component={ReservationsAdmin} />
            <Route path="/admin/maintenance" exact component={MaintenanceAdmin} />
            <Route path="/admin/payments" component={PaymentsAdmin} />
            <Route path="/admin/residents" component={ResidentsAdmin} />
            <Route path="/admin/messages" component={MessagesAdmin} />
          </Switch>
          <Switch>
            <Route path="/resident" exact component={CalendarResident} />
            <Route path="/resident/calendar" exact component={CalendarResident} />
            <Route path="/resident/account" exact component={AccountResident} />
            <Route path="/resident/bookamenity" exact component={BookAmenityResident} />
            <Route path="/resident/reservations" exact component={ReservationsResident} />
            <Route path="/resident/maintenance" exact component={MaintenanceResident} />
            <Route path="/resident/messages" exact component={MessagesResident} />
          </Switch>
          <Switch>
            <Route path="/" exact component={LogIn} />
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
