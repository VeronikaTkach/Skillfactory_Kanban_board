import {Footer} from "./components/footer/footer";
import {Header} from "./components/header/header";
import {Layout} from "./components/layout/layout";
import {Board} from "./components/board/board";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Card} from "./components/board/card/card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Board/>
    },
    {
        path: "/tasks/:cardId",
        element: <Card/>
    }
    ])

function App() {
  return (
          <Layout>
              <Header/>
              <main>
                  <RouterProvider router={router}/>
                
              </main>
              <Footer/>
          </Layout>

  );
}

export default App;

