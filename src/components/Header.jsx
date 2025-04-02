import { useNavigate } from "react-router-dom";


export default function Header({header}) {

    const navigate = useNavigate();
  
    const goToUserHome = () => {
      navigate("/user-home"); 
    };
    const goToAdminHome = () => {
      navigate("/admin-home");
    }
  
  return (
    <>
    <header className="bg-(--color-primary) text-(--color-text) mb-10 ">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="header__h1 mb-10">
          Generation Thailand <br />{header}
        </h1>
        <div className="flex flex-row justify-center space-x-5 items-center w-full">
          <button className = "hover:bg-gray-100" onClick={goToUserHome}>User Home Sector</button>
          <button className = "hover:bg-gray-100" onClick={goToAdminHome}>Admin Home Sector</button>
        </div>
      </div>
    </header>
    </>
  )
}