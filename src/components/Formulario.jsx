import React from "react";
import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const { createPaciente, updatePaciente, paciente } = props;

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setEditForm(true);

      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const limpiarForm = () => {
    // Reiniciar Formulario
    setNombre("");
    setEmail("");
    setPropietario("");
    setFechaAlta("");
    setSintomas("");

    setEditForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida Formulario
    if ([nombre, propietario, email, fechaAlta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    let newPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas
    };

    if(editForm){
      console.log(paciente)
      newPaciente.key = paciente.key
      updatePaciente(newPaciente)
    }else{
      newPaciente.key = generarId(),
      createPaciente(newPaciente);
    }

   

    // Reiniciar Formulario
    setNombre("");
    setEmail("");
    setPropietario("");
    setFechaAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white show-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <ErrorMessage message="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="fechaAlta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fechaAlta}
            onChange={(e) => {
              setFechaAlta(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="textarea"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer"
            value={editForm ? "Editar Paciente" : "Agregar Paciente"}
          />

          {editForm && (
            <button
              className="bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-700 transition-all cursor-pointer mt-2"
              onClick={() => limpiarForm()}
            >
              {" "}
              Cancelar Edición{" "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
