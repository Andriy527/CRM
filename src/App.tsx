import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ClientPage from "./pages/clients/ClientPage";
import AddClientPage from "./pages/clients/AddClientPage";
import AddTaskPage from "./pages/tasks/AddTaskPage";
import TasksPage from "./pages/tasks/TasksPage";
import AddUsersPage from "./pages/users/AddUsersPage";
import UsersPage from "./pages/users/UsersPage";
import AuthNavigation from "./hoc/AuthNavigation";
import NotFound from "./pages/NotFound";
import PersonalCabinet from "./pages/PersonalCabinet";
import LeadsPage from "./pages/leads/LeadsPage";
import UpdateClientPage from "./pages/clients/UpdateClientPage";
import AddLeadPage from "./pages/leads/AddLeadPage";
import UpdateUserPage from "./pages/users/UpdateUserPage";
import UpdateLeadPage from "./pages/leads/UpdateLeadPage";
import UpdateTaskPage from "./pages/tasks/UpdateTaskPage";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index path={"/"}  element={<AuthNavigation><ClientPage /></AuthNavigation>} />
                <Route path={"/clients/create"} element={<AuthNavigation><AddClientPage /> </AuthNavigation>} />
                <Route path={"/clients/add/:id"} element={<AuthNavigation><UpdateClientPage /> </AuthNavigation>} />
                <Route path={"/tasks/create"} element={<AuthNavigation><AddTaskPage /></AuthNavigation>} />
                <Route path={"/tasks/add/:id"} element={<AuthNavigation><UpdateTaskPage /></AuthNavigation>} />
                <Route path={"/tasks"} element={<AuthNavigation><TasksPage /></AuthNavigation>} />
                <Route path={"/users/create"} element={<AuthNavigation><AddUsersPage /></AuthNavigation>} />
                <Route path={"/users"} element={<AuthNavigation><UsersPage /></AuthNavigation>} />
                <Route path={"/users/add/:id"} element={<AuthNavigation><UpdateUserPage /></AuthNavigation>} />
                <Route path={"/leads"} element={<AuthNavigation><LeadsPage /></AuthNavigation>} />
                <Route path={"/leads/create"} element={<AuthNavigation><AddLeadPage /></AuthNavigation>} />
                <Route path={"/leads/add/:id"} element={<AuthNavigation><UpdateLeadPage /></AuthNavigation>} />
                <Route path={"/cabinet"} element={<AuthNavigation><PersonalCabinet /></AuthNavigation>} />
                <Route path={"/login"} element={<LoginForm />} />
                <Route path={"*"} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
