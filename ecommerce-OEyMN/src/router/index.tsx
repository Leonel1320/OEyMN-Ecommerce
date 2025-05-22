import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import {Home} from '../pages/home'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'componentes',
                element: <div>componentes</div>,
            },
            {
                path: 'sobreNosotros',
                element: <div>sobre nosotros</div>,
            }
        ],
    },
]);
