import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  //Google Sign In
  const handleGoogleSignIn = () => {
    console.log("Google handle clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("Login successful!", { autoClose: 1800 });
        setTimeout(() => {
          // Navigate after a delay of 1800ms
          navigate(location?.state ? location.state : "/");
        }, 1800);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location in the login page", location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={logo} alt="login-img" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl text-center font-bold mb-5">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-xs font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none text-[18px]"
                type="submit"
                value="Login"
              />
            </div>
            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn border-none outline outline-1 outline-gray-500 mb-4 ">
              <FaGoogle className="text-xl text-gray-600"/>
              <span className="text-gray-700">Google</span>
            </button>
          </form>
          <p className="text-center mb-6 text-xs font-bold">
            New to Tech Revive?
            <Link to="/sign-up" className="text-[#FF3811] ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
