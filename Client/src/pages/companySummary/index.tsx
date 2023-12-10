import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EnterpriseWhiteIcon } from "../../shared";
import * as Yup from "yup";
import { api } from "../../services/api";

export default function Company() {
  const [data, setData] = React.useState("");
  const [showTicket, setShowTicket] = React.useState(true);
  const validationSchema = Yup.object({
    ticket: Yup.string().required("Informe o nome do ticket."),
  });

  const initialValues = {
    ticket: "",
  };
  console.log(data);
  async function getApi(values: any) {
    const result = values.ticket;
    await api
      .get("/find", { params: { ticket: result } })
      .then(({ data }) => setData(data))
      .catch((err) => {
        console.error("Error", err);
      });
  }
  const handleSubmit = (values: any) => {
    getApi(values);
    setShowTicket(true);
  };

  return (
    <>
      <div className=" w-screen h-screen">
        <div className="w-screen">
          <div className="flex w-[20%] justify-evenly p-3">
            <img
              src={EnterpriseWhiteIcon}
              alt="Enterprise white icon"
              className="w-[12%] h-[12%]"
            />
            <h1 className="text-xl text-white">Resumo da empresa</h1>
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
            <div>
              <div className="w-[60%] bg-yellow-200">
                <div className="w-full flex justify-evenly">
                  <div className="w-[30%] bg-red-600 text-center">ticket</div>
                  <div className="w-[30%] bg-blue-900 text-center">
                    nome empresa
                  </div>
                </div>
                <div>
                  <p>teste</p>
                  <p>teste</p>
                  <p>teste</p>
                  <p>teste</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
