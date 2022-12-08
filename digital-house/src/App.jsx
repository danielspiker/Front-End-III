import { Login } from './pages/Login'
import { SegundaAula } from './aulas/SegundaAula'
import { TerceiraAula } from './aulas/TerceiraAula'
import { QuartaAula } from './aulas/QuartaAula'
import { InstagramTimeLine } from './challenges/InstagramTimeLine'
import { QuintaAula } from './aulas/QuintaAula'
import { LojaGames } from './pages/LojaGames'
import { SetimaAula } from './aulas/SetimaAula'
import { OitavaAula } from './aulas/OitavaAula'
import { DecimaTerceiraAula } from './aulas/DecimaTerceiraAula'
import { PedidoPizza } from './aulas/DecimaTerceiraAula/PedidoPizza'
import { ReqAssinc } from './estudo/ReqAssinc'
import { DecimaQuartaAula } from './aulas/DecimaQuartaAula'
import { DecimaQuintaAula } from './aulas/DecimaQuintaAula'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { ToDo } from './pages/ToDo'
import { JsonPlaceholder } from './challenges/JsonPlaceholder'
import { OdontoClinica } from './estudo/OdontoClinica'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'decima-quinta-aula/',
          element: <DecimaQuintaAula />
        },
        {
          path: 'decima-quarta-aula',
          element: <DecimaQuartaAula />
        },
        {
          path: 'decima-terceira-aula',
          element: <DecimaTerceiraAula />
        },
        {
          path: 'pedido-pizza',
          element: <PedidoPizza />
        },
        {
          path: 'oitava-aula',
          element: <OitavaAula />
        },
        {
          path: 'setima-aula',
          element: <SetimaAula />
        },
        {
          path: 'loja-games',
          element: <LojaGames />
        },
        {
          path: 'to-do',
          element: <ToDo />
        },
        {
          path: 'req-assinc',
          element: <ReqAssinc />
        },
        {
          path: 'json-placeholder/:id',
          element: <JsonPlaceholder />
        },
        {
          path: 'odonto-clinica',
          element: <OdontoClinica />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
