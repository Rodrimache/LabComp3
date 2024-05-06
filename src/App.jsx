import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const handleChange = (event) => {
    const userInput = event.target.value;
    setUsername(userInput);

    if (userInput.includes('o')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
    }
  };
  const handleRegister = () => {   //que hacen los handle?
    if (username.trim()==='' || username.toLowerCase().includes('o')){ //porque 3 igual?
      alert ('Usuario invalido');
    } 
    else {
      alert ('Usuario registrado correctamente');
    }
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleChange} />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>    
  )
}

export default App
