import * as Yup from "yup";

export const validationSchema = Yup.object({
  ticket: Yup.string().required("Informe o nome do ticket."),
});
