import { Link } from "react-router-dom";
import { EnterpriseIcon, EuroIcon } from "../../shared";

function Home() {
  return (
    <>
      <div className=" w-screen h-screen flex flex-col">
        <div className="w-screen h-20">
          <p className="p-5 text-xl text-white">Account</p>
        </div>

        <div className="w-[60%] h-[45%] flex justify-around absolute right-0 top-40 cursor-pointer">
          <Link to="/companySummary" className="w-[30%]">
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img
                  src={EnterpriseIcon}
                  className="w-[20%] h-[20%] mx-[40%]"
                  alt="Enterprise Icon"
                />
                <p className="text-center w-[100%]  text-white font-bold">
                  Resumo da empresa
                </p>
              </div>
            </div>
          </Link>
          <Link to="/financialData " className="w-[30%]">
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center cursor-pointer hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img
                  src={EuroIcon}
                  className="w-[20%] h-[20%] mx-[40%]"
                  alt="Financial Icon"
                />
                <p className="text-center w-[100%]  text-white font-bold">
                  Dados financeiros
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-[100%] absolute bottom-0">
          <p className="text-center text-sm p-2 text-white">
            <span className="font-bold">By</span> Joice Doll
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
