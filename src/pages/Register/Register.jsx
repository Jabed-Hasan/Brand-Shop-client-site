
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);

        // Regular expression pattern for password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordPattern.test(password)) {
           //alert("Error!")

           // Swal("Error!", "Password must contain at least eight characters, including one uppercase letter, one lowercase letter, one number, and one special character.", "error");
           Swal.fire({
            title: 'Error!", "Password must contain at least eight characters, including one uppercase letter, one lowercase letter, one number, and one special character.", "error")',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
           return;
        }
        

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'Register Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                navigate(location?.state ? location.state : '/');
              
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold mt-5'>Please Register!</h1>
            <form onSubmit={handleRegister} className="card-body  md:w-3/5 lg:w-1/2 mx-auto">
                <div className="form-control">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <input type="text" required name='photoUrl' placeholder="Photo Url" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                    </div>


                    <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='text-center my-5'>Already Have an Account? <Link className='text-blue-600' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;




