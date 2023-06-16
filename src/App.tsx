import React, {useState} from 'react';
function App() {
  const [projects, setProjects] = useState<string[]>([]);
  function handleAddProject() {
    setProjects ([...projects, `Novo projeto ${Date.now()}`]);
  }
  return (
    <>
      <header>Conteúdo da Home</header>
      <main>
        <ul>
          {projects.map(item => <li key ={item}>{item}</li>)}
        </ul>
        <button onCLick={handleAddProject}>Adicionar</button>
      </main>
    
    </>
  )
}

export default App