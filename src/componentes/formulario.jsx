import { useState, useEffect } from 'react'
import Error from './error' //importo la funcion
function Formulario({ setPacientes, pacientes, paciente, setPaciente }) {
    const [mascota, setMascota] = useState('');//si quiero iniciar como arreglo u objeto pongo los simbolos correspondiente
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    const validarFormulario = ((e) => {
        e.preventDefault()
        if ([mascota, propietario, email, alta, sintomas].includes('')) {
            console.log("Todos los campos son obligatorios")
            setError(true)
            return
        }
        setError(false)
        const objetoPaciente = { mascota, propietario, email, alta, sintomas }
        if (paciente.id) {

        } else {
            objetoPaciente.id = generarId
            setPacientes([...pacientes, objetoPaciente])
        }


        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

    })
    //el primer erro es la variable del state y el segundo es la funcion del componente.... si la variable error es verdadera el parrafo toma las caracteristicas de la funcion error
    //entre corchetes poqu es parte de use State
    //todo lo que va dentro del return se muestra dentro de pantalla
    return (
        <div className="md:w-1/2 mx-5 lg-w-2/5 box-sizing:border-box">
            <h2 className="text-center font-black text-3xl mb-5">Seguimiento pacientes </h2>
            <p className="TEXc T-CENTER mt-5 text-lg mb-10">Añade pacientes <span className="text-indigo-700 font-bold">Administrarlos</span></p>
            <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg " onSubmit={validarFormulario}>
                <div>
                    {error && <Error> <p>Todos los campos son obligatorios</p></Error>}
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Nombre Mascota:</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                            type="text"
                            placeholder="Nombre de la mascota"
                            value={mascota} onChange={(e) => setMascota(e.target.value)} />

                    </div>
                    <div><label className="block text-gray-700 uppercase font-bold">Nombre Propietario:</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                            type="text"
                            placeholder="Nombre del propietario"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)} />
                    </div>
                    <div><label className="block text-gray-700 uppercase font-bold">Email:</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                            type="email"
                            placeholder="correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /></div>
                    <div><label className="block text-gray-700 uppercase font-bold">Fecha de alta:</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                            type="date"
                            placeholder="Alta"
                            value={alta}
                            onChange={(e) => setAlta(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Sintomas:</label>
                        <textarea className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
                            type="text"
                            placeholder="Sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)} />
                    </div>
                </div>
                <input type="submit" className="bg-indigo-700 p-3 text-white mt-5 uppercase w-full rounded-md hover:bg-indigo-400 cursor-pointer transition-colors font-bold" value={'Agregar Paciente'} />
            </form>
        </div>
    )
}
export default Formulario