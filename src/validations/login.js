import * as yup from "yup";

const validationSchema = yup.object().shape({
  //   name: yup
  //     .string()
  //     .min(3, "Занадто короткe ім'я")
  //     .max(20, "Занадто довгий ім'я.Ім'я має містити від 3 до 63 символів")
  //     .required("Це поле обов'язкове"),
  email: yup
    .string()
    .min(10, "Занадто короткий Email. Email має містити від 10 до 63 символів")
    .max(63, "Занадто довгий Email. Email має містити від 3 до 63 символів")
    .matches(
      /^[^-.#!?,%$&^*()][\w-.#!?,%$&^*()]+[^-.#!?,%$&^*()]@([\w-]+\.)+[\w-.][^-.,!?#$]{1,4}$/,
      "Email має бути валідним"
    )
    .required("Це поле обов'язкове"),
  password: yup
    .string()
    .min(5, "Занадто короткий пароль. Пароль має містити від 5 до 30 символів.")
    .max(30, "Занадто довгий пароль. Пароль має містити від 5 до 30 символів")
    .matches(
      /^[^.-](?=.*[\w\d])([a-zA-Z0-9@$!_,%*\-.#?&]{5,30})$/,
      "Пароль має бути валідним"
    )
    .required("Це поле обов'язкове"),
});

export default validationSchema;
