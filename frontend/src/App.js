import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

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

import { Authorization } from './components/Authorization';
import LogIn from './pages/Login';

const { Header, Footer, Content } = Layout;

function App() {

  const[user, setUser] = useState(undefined);

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
            <Authorization path="/admin/events" user={user} exact>
              <EventsAdmin user={user} />
            </Authorization>
            <Authorization path="/admin/reservations" user={user} exact>
              <ReservationsAdmin user={user} />
            </Authorization>
            <Authorization path="/admin/maintenance" user={user} exact>
              <MaintenanceAdmin user={user} />
            </Authorization>
            <Authorization path="/admin/payments" user={user} exact>
              <PaymentsAdmin user={user} />
            </Authorization>
            <Authorization path="/admin/residents" user={user} exact>
              <ResidentsAdmin user={user} />
            </Authorization>
            <Authorization path="/admin/messages" user={user} exact>
              <MessagesAdmin user={user} />
            </Authorization>            
          </Switch>
          <Switch>
            <Authorization path="/resident/calendar" user={user} exact>
              <CalendarResident user={user} />
            </Authorization>
            <Authorization path="/resident/account" user={user} exact>
              <AccountResident user={user} />
            </Authorization>
            <Authorization path="/resident/bookamenity" user={user} exact>
              <BookAmenityResident user={user} />
            </Authorization>
            <Authorization path="/resident/reservations" user={user} exact>
              <ReservationsResident user={user} />
            </Authorization>
            <Authorization path="/resident/maintenance" user={user} exact>
              <MaintenanceResident user={user} />
            </Authorization>
            <Authorization path="/resident/messages" user={user} exact>
              <MessagesResident user={user} />
            </Authorization>
          </Switch>
          <Switch>
            <Route path="/" exact >
              <LogIn setUser={setUser}/> 
            </Route>
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
