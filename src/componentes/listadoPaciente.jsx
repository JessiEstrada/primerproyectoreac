import Paciente from "./paciente"

function ListadoPaciente({ pacientes, setPaciente }) { //la funcion debe inicias con mayusculas

    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-scroll md:h-screen box-sizing:border-box ">
            <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
            <p className="text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-700 font-bold">Pacientes/Citas </span></p>
            {pacientes.map(paciente => (<Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
            />))}
            <><h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-xl text-center mt-5 ">Al agregar pacientes  <span className="text-indigo-600 font-bold">  aparecerán en este lugar</span></p>
            </>

        </div>

    )
}
export default ListadoPaciente
