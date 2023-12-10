import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EnterpriseWhiteIcon } from "../../shared";
import * as Yup from "yup";
import { api } from "../../services/api";

export default function Company() {
  const [data, setData] = React.useState("");
  const [showTicket, setShowTicket] = React.useState(false);
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
        {showTicket === false && (
          <div className="w-screen">
            <div className="flex  w-[20%] justify-evenly p-3">
              <img src={EnterpriseWhiteIcon} className="w-[12%] h-[12%]" />
              <h1 className="text-xl text-white">Resumo da empresa</h1>
            </div>

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
          </div>
        )}
        {showTicket === true && <h1>teste</h1>}
      </div>
    </>
  );
}
