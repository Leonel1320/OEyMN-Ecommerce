import { createBrowserRouter } from 'react-router-dom'
import { Rootlayout } from '../layouts/Rootlayout';
import Componentes from '../pages/Componentes';
import ProductDetailPage from '../pages/ProductDetailPage'; // <-- ¡Importa tu nuevo componente!


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <div>inicio</div>,
            },
            {
                path: 'Componentes',
                element: <Componentes />,
            }, {
                path: 'productos/:id', // Define esta ruta. Podría ser '/Componentes/:id' si quieres anidar
                element: <ProductDetailPage />,
            },
            {
                path: 'sobreNosotros',
                element: <div>sobre nosotros</div>,
            }
        ],
    },
]);
