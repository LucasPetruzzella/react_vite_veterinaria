import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  useEffect(()=> {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])


  
  const createPaciente = (newPaciente) => {
    setPacientes([...pacientes, newPaciente]);
  };

  const updatePaciente = (newPaciente) => {
    const pacienteState = pacientes.map(p => p.key === newPaciente.key ? newPaciente : p)
    setPacientes(pacienteState);
  };

  const deletePaciente = (pacienteDelete) => {
    const pacienteState = pacientes.filter(p => p.key != pacienteDelete.key)
    setPacientes(pacienteState);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            paciente = {paciente}
            setPacientes={setPacientes}
            createPaciente={createPaciente}
            updatePaciente={updatePaciente}
          />
          <ListadoPacientes 
            pacientes={pacientes}
            setPaciente = {setPaciente}
            deletePaciente={deletePaciente} />
        </div>
      </div>
    </>
  );
}

export default App;
