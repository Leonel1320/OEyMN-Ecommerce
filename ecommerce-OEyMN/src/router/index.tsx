import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import Componentes from '../pages/Componentes';

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
                path: 'Componentes',
                element: <Componentes />,
            },
            {
                path: 'sobreNosotros',
                element: <div>sobre nosotros</div>,
            }
        ],
    },
]);
