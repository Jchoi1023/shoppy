// import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Notification from './components/Notification';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Notification/>
        <Navbar/>
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
