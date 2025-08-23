import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signInGoogle,userLogin}=useContext(AuthContext);
  const location=useLocation();
  console.log(location);
  const navigate=useNavigate();

  const handleSignIn=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;

    
    userLogin(email,password)
    .then(res=>{
 const email = res.user?.email;
      //  console.log(email)
      let redirectPath = location.state || '/';

      if (redirectPath.startsWith('/myTask')) {
        // force correct path with email
        redirectPath = `/myTask/${encodeURIComponent(email)}`;
      }

      navigate(redirectPath);
    })
  }

  const handleSignInGoogle=()=>{
    signInGoogle()
    .then(res=>{
       const email = res.user?.email;
      //  console.log(email)
      let redirectPath = location.state || '/';

      if (redirectPath.startsWith('/myTask')) {
        // force correct path with email
        redirectPath = `/myTask/${encodeURIComponent(email)}`;
      }

      navigate(redirectPath);
  
    })
  }
    return (
            <div className="hero mt-20">
    <div className="card bg-base-100 py-2 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className='text-2xl font-bold text-center'>Login form</h1>
      <div className="card-body">

        {/* form */}
        <form onSubmit={handleSignIn} className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button className="btn bg-base-200 text-base-100 mt-4">Login</button>
        </form>
        
          {/* Google */}
<button onClick={handleSignInGoogle} className="btn bg-white text-base-200 mt-4 border-[#e5e5e5] ">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

<p className='mt-1'>Don't have an account? <Link className='text-blue-700' to='/register'>Sign Up</Link></p>
      </div>
    </div>
  </div>
    );
};

export default Login;