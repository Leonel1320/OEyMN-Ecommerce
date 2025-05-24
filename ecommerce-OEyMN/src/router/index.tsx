import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import SobreNosotros from '../pages/sobrenosotros'

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
                path: 'nosotros',
                element: <SobreNosotros />,
            }
        ],
    },
]);
