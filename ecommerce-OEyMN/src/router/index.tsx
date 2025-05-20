import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout/>,
        children: [
            {
                index: true,
                element: <div>inicio</div>,
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
