function ListadoPaciente() {
    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-scroll md:h-screen box-sizing:border-box ">
            <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
            <p className="text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-700 font-bold">Pacientes/Citas </span></p>
            <div className="mt-3 py-10 px-5 rounded-xl bg-slate-300 shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="normal-case font-normal">Chocolata</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de propietario: <span className="normal-case font-normal">Jessica</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="normal-case font-normal">jessiestrada43@gmail.com</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: <span className="normal-case font-normal">12/6/22</span></p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="normal-case font-normal">tos</span></p>

            </div>
        </div>

    )
}
export default ListadoPaciente
