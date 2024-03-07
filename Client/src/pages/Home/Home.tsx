import { Link } from "react-router-dom";
import { EnterpriseIcon, EuroIcon } from "@/shared";

function Home() {
  return (
    <>
      <div className=" w-screen h-screen flex flex-col">
        <div className="w-screen h-20">
          <p className="p-5 text-xl md:text-2xl lg:text-2xl text-white opacity-40">
            Account
          </p>
        </div>

        <div className="w-[60%] sm:h-[45%] h-[90%] flex flex-col sm:flex-row  justify-around absolute right-0  top-10 sm:top-40 cursor-pointer">
          <Link
            to="/company"
            className="sm:w-[40%] w-[65%] h-[30%] sm:h-[100%] md:w-[45%] lg:w-[35%] xl:w-[30%]"
          >
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img
                  src={EnterpriseIcon}
                  className="w-[20%] h-[20%] mx-[40%]"
                  alt="Enterprise Icon"
                />
                <p className="text-center w-[100%] md:text-xl text-white ">
                  Resumo da empresa
                </p>
              </div>
            </div>
          </Link>
          <Link
            to="/financial "
            className="sm:w-[40%] w-[65%] h-[30%] sm:h-[100%]  md:w-[45%] lg:w-[35%] xl:w-[30%]"
          >
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center cursor-pointer hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img
                  src={EuroIcon}
                  className="w-[20%] h-[20%] mx-[40%]"
                  alt="Financial Icon"
                />
                <p className="text-center w-[100%] md:text-xl text-white ">
                  Dados financeiros
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-[100%] absolute bottom-0">
          <p className="text-center text-sm p-4 md:text-md lg:text-xl text-white">
            <span className="font-bold">By</span> Joice Doll
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
