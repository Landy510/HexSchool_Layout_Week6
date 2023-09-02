import { Outlet } from "react-router-dom";
import ProgressBar from "./components/progressBar/ProgressBar";
const Register = () => {
  return (
    <div 
      className="mx-auto"
      style={{maxWidth: '636px'}}
    >
      <ProgressBar />
      <Outlet />
    </div>
  )
}

export default Register;