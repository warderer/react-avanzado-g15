import useForm from '@/hooks/useForm';

function Register() {
  const sendData = ()=>console.log('sendData');

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',	
    email: '',
    password: '',
  })

  return (
    <form className='container'>
      <div className='mt-5 mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          name='first_name'
          onChange={handleInputChange}
          value={input.first_name}
          className='form-control'
          id='name'
          placeholder='John'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='last-name' className='form-label'>
          Last name
        </label>
        <input
          type='text'
          name='last-name'
          className='form-control'
          id='last-name'
          placeholder='Doe'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='birth' className='form-label'>
          Birthday
        </label>
        <input type='date' className='form-control' id='birth' />
      </div>
      <div className='mb-3'>
        <label htmlFor='last-name' className='form-label'>
          Gender
        </label>
        <select className='form-select'>
          <option value='M'>M</option>
          <option value='F'>F</option>
        </select>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inputPassword' className='col-sm-2 col-form-label'>
          Password
        </label>
        <div className='col-sm-10'>
          <input type='password' className='form-control' id='inputPassword' />
        </div>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <button type='button' className='btn btn-primary w-100'>
            Primary
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
