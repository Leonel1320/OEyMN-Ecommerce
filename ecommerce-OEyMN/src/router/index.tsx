import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import {Home} from '../pages/home'
import Componentes from '../pages/Componentes';
import SobreNosotros from '../pages/sobrenosotros'


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
                path: 'Componentes',
                element: <Componentes />,
            },
            {
                path: 'nosotros',
                element: <SobreNosotros />,

            }
        ],
    },
]);
