import FichaPaciente from "./FichaPaciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center w-auto">
            Listado Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <FichaPaciente
                key={paciente.key}
                paciente={paciente}
                setPaciente={setPaciente}
                deletePaciente={deletePaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center w-auto">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">Pacientes</span>y
            aparecerán aquí
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
