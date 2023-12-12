import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FinancialWhite } from "../../shared/icons/icons";
import * as Yup from "yup";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export default function Financial() {
  const [data, setData] = React.useState<[]>([]);
  const [showTicket, setShowTicket] = React.useState(false);
  const validationSchema = Yup.object({
    ticket: Yup.string().required("Informe o nome do ticket."),
  });

  const initialValues = {
    ticket: "",
  };
  async function getApi(values: any) {
    const result = values.ticket;
    await api
      .get("/financial", { params: { ticket: result } })
      .then(({ data }) => setData(data))
      .catch((err) => {
        console.error("Error", err);
      });
  }
  const handleSubmit = (values: any) => {
    getApi(values);
    setShowTicket(true);
  };

  console.log(data);

  return (
    <>
      <div className=" w-screen h-screen">
        <div className="w-screen">
          <div className="flex w-[20%] justify-evenly p-3">
            <img
              src={FinancialWhite}
              alt="Enterprise white icon"
              className="w-[12%] h-[12%]"
            />
            <h1 className="text-xl text-white">Dados financeiros</h1>
          </div>
          {showTicket === false && (
            <div className=" w-full flex justify-center my-[5%]">
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
                      className="bg-custom-card w-[15%] hover:bg-custom-hover-green"
                    >
                      Procurar
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          )}
          {showTicket === true && (
            <div className="flex justify-center my-[5%]">
              <div className="w-[60%] h-96">
                <div className="w-full flex justify-evenly h-[20%] ">
                  <div className="w-[30%] bg-custom-ticket-name text-center rounded-lg text-white">
                    {Array.isArray(data) &&
                      data.map((result) => (
                        <p className="text-[2rem] p-2">{result.symbol}</p>
                      ))}
                  </div>
                  <div className="w-[30%] text-center rounded-lg flex align-middle justify-center">
                    {Array.isArray(data) &&
                      data.map((result) => <img src={result.logourl} />)}
                  </div>
                </div>
                <div className="px-28 py-10">
                  {Array.isArray(data) &&
                    data.map((result) => (
                      <>
                        <p className="text-[1.3rem] text-white">
                          Média de duzentos dias:
                          <span className="text-custom-card">
                          R$:{result.twoHundredDayAverage}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Preço de mercado regular:
                          <span className="text-custom-card">
                            R$:{result.regularMarketPrice}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Fechamento anterior:{" "}
                          <span className="text-custom-card">
                            R$: {result.regularMarketPreviousClose}
                          </span>
                        </p>
                        <p className="text-[1.3rem] text-white">
                          Abertura de mercado:{""}
                          <span className="text-custom-card">
                            {result.regularMarketOpen}
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
