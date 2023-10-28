import { ToastContainer } from "react-toastify";
import Form from "./components/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Form />
      <ToastContainer />
    </>
  );
}

export default App;
