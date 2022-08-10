import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {
// Paso 1: Crear los estados donde guardare la información tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Paso 4: Manejo lo que sucederá cuando envie mi formulario
  const handleSubmit = (event) => {
    event.preventDefault() // Hacemos que no se recargue la página
    const submittedData = JSON.stringify({ email, password })
    console.log(submittedData)
  }

  // Paso 2: Crear mi formulario base
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
        <form>
          {/* Paso 3: Guardo cada cambio del input en su state correspondiente */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            onChange={(event) => { setEmail(event.target.value) }}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='*******'
            onChange={(event) => { setPassword(event.target.value) }}
          />

          <button onClick={handleSubmit}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
