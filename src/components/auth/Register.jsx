import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser, signInGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const email = userData.email;
    const password = userData.password;
    console.log(email, password);


    // password check
    const checkPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (checkPass.test(password) == false) {
      const msg=('password must have an uppercase, a lowercase and atleast 6 characters')
      setError(msg);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
      });
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        form.reset();
      })
      .catch(error=>{
        const errorCode=error.code;
        setError(errorCode);
          Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorCode,
      });
      })

  }

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(res => {
        console.log(res);
      })
      .catch(err=>{
          const errorCode=err.code;
        setError(errorCode);
          Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorCode,
      });
      })
  }
  return (
    <div className="hero mt-20">
      <div className="card bg-base-100 py-2 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className='text-2xl font-bold text-center'>SignUp form</h1>
        <div className="card-body">

          {/* form */}
          <form onSubmit={handleSignUp} className="fieldset">

            {/* name */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />

            {/* Photo */}
            <label className="label">Photo</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />

            <button className="btn bg-base-200 text-base-100 mt-4">Sign Up</button>
          </form>
          {/* Google */}
          <button onClick={handleGoogleSignIn} className="btn bg-white text-base-200 mt-4 border-[#e5e5e5] ">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
          <p className='mt-1'>Already have an account? <Link className='text-blue-700' to='/login'>Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;