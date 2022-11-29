import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Comp/Route/Route';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider
        router={router}

      />
      <Toaster />

    </div>
  );
}

export default App;
