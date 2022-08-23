function Login() {
  return (
    <form className='container'>
      <div className='mt-5 mb-3'>
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

export default Login;
