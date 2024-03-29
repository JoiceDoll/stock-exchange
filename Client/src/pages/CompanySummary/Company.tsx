import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EnterpriseWhiteIcon } from "../../shared";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation";

interface ITicket {
  ticket: string;
}

interface ISummary {
  symbol: string;
  logourl: string;
  industry: string;
  sector: string;
  site: string;
  city: string;
  country: string;
}

export default function Company() {
  const [data, setData] = React.useState<ISummary[]>([]);
  const [showTicket, setShowTicket] = React.useState(false);

  const initialValues = {
    ticket: "",
  };
  async function getApi(values: ITicket): Promise<void> {
    const result = values.ticket;
    await api
      .get("/summary", { params: { ticket: result } })
      .then(({ data }) => setData(data))
      .catch((err) => {
        console.error("Error", err);
      });
  }
  const handleSubmit = (values: ITicket) => {
    getApi(values);
    setShowTicket(true);
  };

  return (
    <>
      <div className=" w-screen h-screen">
        <div className="w-screen">
          <div className="flex w-[65%] sm:w-[20%] md:w-[38%] lg:w-[35%] justify-evenly md:p-4 p-3 static">
            <img
              src={EnterpriseWhiteIcon}
              alt="Enterprise white icon"
              className="w-[12%] h-[12%]"
            />
            <h1 className="text-xl text-white md:text-2xl xl:text-4xl">
              Resumo da empresa
            </h1>
          </div>
          {showTicket === false && (
            <div className=" w-full flex justify-center my-[20%] sm:my-[5%] ">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="w-[80%] ">
                  <label htmlFor="name" className="text-white">
                    Informe o nome do ticket
                  </label>
                  <div className="w-full flex  flex-row align-middle justify-between">
                    <div className="w-[80%] ">
                      <Field
                        type="text"
                        id="ticket"
                        name="ticket"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      />
                      <ErrorMessage
                        name="ticket"
                        component="div"
                        className="error text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-custom-card w-[25%] sm:w-[20%] hover:bg-custom-hover-green"
                    >
                      Procurar
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          )}
          {showTicket === true && (
            <div className="flex justify-center sm:my-[5%] my-[20%] ">
              <div className="sm:w-[60%] w-[90%] h-96">
                <div className="w-full flex justify-evenly h-[20%] ">
                  <div className="w-[30%] bg-custom-ticket-name text-center rounded-lg text-white p-2 ">
                    {Array.isArray(data) &&
                      data.map((result) => (
                        <p className="text-[1.8rem] sm:text-[2rem]">{result.symbol}</p>
                      ))}
                  </div>
                  <div className="w-[30%] text-center rounded-lg flex align-middle justify-center">
                    {Array.isArray(data) &&
                      data.map((result) => <img src={result.logourl} />)}
                  </div>
                </div>
                <div className="px-7 sm:px-20 lg:px-24 xl:px-32 py-10">
                  {Array.isArray(data) &&
                    data.map((result) => (
                      <>
                        <p className="text-[1.3rem] text-white">
                          Indústria:{" "}
                          <span className="text-custom-card">
                            {result.industry}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Setor:{" "}
                          <span className="text-custom-card">
                            {result.sector}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Website:{" "}
                          <span className="text-custom-card">
                            {result.site}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Cidade:{" "}
                          <span className="text-custom-card">
                            {result.city}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          País:{" "}
                          <span className="text-custom-card">
                            {result.country}
                          </span>
                        </p>
                      </>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full  absolute bottom-0 text-center text-lg font-bold text-custom-card p-2 hover:text-white">
          <Link to="/">
            <p>VOLTAR</p>
          </Link>
        </div>
      </div>
    </>
  );
}
