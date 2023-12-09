import { Link } from "react-router-dom";
import { EnterpriseIcon, EuroIcon } from "../../shared";
// import { EnterpriseIcon } from "../../shared";

function Home() {
  return (
    <>
      <div className="bg-custom-home-background w-screen h-screen">
        <div className="w-screen h-20">
          <p className="p-5 text-xl text-white">Account</p>
        </div>

        <div className="w-[60%] h-[45%] flex justify-around absolute right-0 top-44 cursor-pointer ">
          <Link to="/companySummary" className="w-[30%]">
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img
                  src={EnterpriseIcon}
                  className="w-[20%] h-[20%] mx-[40%]"
                />
                <p className="text-center w-[100%]  text-white">
                  Resumo da empresa
                </p>
              </div>
            </div>
          </Link>
          <Link to="/financialData " className="w-[30%]">
            <div className="w-[100%] h-[100%] bg-custom-card rounded-xl flex justify-center cursor-pointer hover:bg-custom-hover-green">
              <div className="flex flex-col justify-center align-middle w-[100%] gap-3">
                <img src={EuroIcon} className="w-[20%] h-[20%] mx-[40%]" />
                <p className="text-center w-[100%]  text-white">
                  Dados financeiros
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
