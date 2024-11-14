import React from 'react';
import { Icon } from '@chakra-ui/react';
import { WiBarometer } from "react-icons/wi";
import {
  MdBarChart,
  MdPerson,
  MdCamera,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAddAlert,
  MdManageHistory,
  
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import DataTables from 'views/admin/dataTables';
import CameraTab from 'views/admin/cameraTab';
import Alert from 'views/admin/alerts';
import CurrentRecord from 'views/admin/currentRecord'
import RoomsPage from 'components/Rooms/RoomPage'; // Ensure this import is correct
import Employees from 'views/admin/employers';
// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Sign In',
    layout: '/admin',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },

  {
    name: 'Dashboard Manager',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Rooms',
    layout: '/admin',
    path: '/Rooms',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <RoomsPage />, // Corrected component here
    secondary: true,
  },
  {
    name: 'View Camera',
    layout: '/admin',
    icon: <Icon as={MdCamera} width="20px" height="20px" color="inherit" />,
    path: '/cameras',
    component: <CameraTab />,
  },
  {
    name: 'Current Record',
    layout: '/admin',
    icon: <Icon as={WiBarometer} width="20px" height="30px" color="inherit" />,
    path: '/current-record',
    component: <CurrentRecord />,
  },
  // {
  //   name: 'Employee Data',
  //   layout: '/admin',
  //   icon: <Icon as={MdCamera} width="20px" height="20px" color="inherit" />,
  //   path: '/employees',
  //   component: <Employees/>,
  // },
  {
    name: 'Employee Logs',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Alert History',
    layout: '/admin',
    icon: <Icon as={MdManageHistory} width="20px" height="20px" color="inherit" />,
    path: '/alert-history',
    component: <Alert />,
  },
];

const extraroutes = [
  {
    name: 'Sign In',
    layout: '/admin',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;
export { extraroutes };
