import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente"
import Paciente from "./componentes/paciente"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
function App() {

  return (
    <>
      <Header/>
      <ListadoPaciente/>
      <Paciente/>
      <Formulario/>
      <Error/>
    </>
  )
}

export default App
