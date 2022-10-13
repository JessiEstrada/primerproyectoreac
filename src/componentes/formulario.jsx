function Formulario(){
    return(
        <div className="md:w-1/2 mx-5 lg-w-2/5">
        <h2 className="text-center font-black text-3xl mb-5">Seguimiento pacientes </h2>
        <p className="TEXT-CENTER mt-5 text-lg mb-10">Añade pacientes <span className="text-indigo-700 font-bold">Administrarlos</span></p>
        <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg">
            <div>
                <label className="block text-gray-700 uppercase font-bold">Nombre Mascota:</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                type="text"
                placeholder="Nombre de la mascota"/>
                <label className="block text-gray-700 uppercase font-bold">Nombre Propietario:</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                type="text"
                placeholder="Nombre del propietario"/>
                <label className="block text-gray-700 uppercase font-bold">Email:</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                type="text"
                placeholder="correo"/>
                <label className="block text-gray-700 uppercase font-bold">Fecha de alta:</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                type="text"
                placeholder="Alta"/>
                <label className="block text-gray-700 uppercase font-bold">Sintomas:</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                type="text"
                placeholder="Sintomas"/>

            </div>
        </form>
        </div>
    )
}
export default Formulario