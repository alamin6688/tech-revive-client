import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-32 space-y-4">
      <h1 className="text-5xl font-bold">404</h1>
      <h1>Error 404: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist!!!</p>
      <p>
        <Link to="/">
          <button className="btn bg-blue-500  hover:bg-blue-700 text-white font-bold">
            Go Back
          </button>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;