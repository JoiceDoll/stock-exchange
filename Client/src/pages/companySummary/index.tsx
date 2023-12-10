import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "../../services/api";

export default function Company() {
  const [data, setData] = React.useState("");
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
  };

  return (
    <>
      <div className="bg-custom-ticket-background w-screen h-screen">
        <div className="w-screen h-20">
          <h1 className="flex align-middle p-8 text-xl text-white">
            Procurar ação pelo Ticket
          </h1>

          <div className=" w-full flex justify-center my-[3%]">
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
          <div className="w-1/2 bg-yellow-600 h-20">
            <div className="flex justify-between">
              <div className="bg-custom-card w-2/5 h-20">
                <p className="text-center text-white font-semibold text-2xl p-3">
                  TICKET:
                </p>
              </div>
              <div className="bg-blue-800  w-2/3">
                <p className="text-center text-white font-semibold text-xl p-3">
                  NOME DA EMPRESA: {data.name}
                </p>
              </div>
              <div className="bg-blue-800  w-2/3">
                <p className="text-center text-white font-semibold text-xl p-3">
                  COTAÇÃO ATUAL: R$ {data.close}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
