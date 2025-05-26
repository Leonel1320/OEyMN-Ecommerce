import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import {Home} from '../pages/home'
import Componentes from '../pages/Componentes';
import SobreNosotros from '../pages/sobrenosotros'
import ProductDetailPage from '../pages/ProductDetailPage'; // <-- ¡Importa tu nuevo componente!



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'Componentes',
                element: <Componentes />,
            }, {
                path: 'productos/:id', // Define esta ruta. Podría ser '/Componentes/:id' si quieres anidar
                element: <ProductDetailPage />,
            },
            {
                path: 'nosotros',
                element: <SobreNosotros />,

            }
        ],
    },
]);
