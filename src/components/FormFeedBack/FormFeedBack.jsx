import React from "react";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

import { getLightTheme } from "../../redux/theme/themeSelectors";

import ButtonForm from "./ButtonForm/ButtonForm";
import FormError from "./FormError/FormError";
import PopUpFeedBack from "./PopUpFeedBack/PopUpFeedBack";
import "./form-feedback.css";

const schema = object({
  name: string()
    .matches(
      /^[A-Za-zʼ-\u04FF\u0400-\u04FF\s-]+$/,
      "Поле має містити тільки букви, символи 'ʼ' і '-'"
    )
    .notOneOf(
      ["%", "^", "*", "|", "~", "{", "}", ";", "<", ">", ".", ","],
      'Заборонено використовувати такі символи: «% ^ * | ~ {} ; "<>. , /»'
    )
    .min(2, "Кількість символів має бути не менше 2")
    .max(30, "Кількість символів має бути не більше 30")
    .required("Це поле обов'язкове для заповнення"),
  email: string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Некоректний формат Email"
    )
    .min(6, "Кількість символів має бути не менше 6")
    .max(320, "Кількість символів має бути не більше 320")
    .required("Це поле обов'язкове для заповнення"),
  theme: string()
    .matches(
      /^[A-Za-zʼ-\u04FF\u0400-\u04FF\s-]+$/,
      "Поле може містити лише букви, цифри та пробіли"
    )
    .min(6, "Кількість символів має бути не менше 6")
    .max(320, "Кількість символів має бути не більше 320")
    .required("Це поле обов'язкове для заповнення"),
  message: string()
    .max(600, "Кількість символів має бути не більше 600")
    .matches(
      /^[A-Za-zʼ-\u04FF\u0400-\u04FF\s-]+$/,
      "Поле може містити лише букви, цифри та пробіли"
    )
    .required("Це поле обов'язкове для заповнення"),
});

const initialValues = {
  name: "",
  email: "",
  theme: "",
  message: "",
};

const FormFeedBack = () => {
  const isLightTheme = useSelector(getLightTheme);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formikRef = useRef();

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    setShowSuccessMessage(true);
    resetForm();
  };

  const handleShowPopUp = () => {
    if (formikRef.current.isValid && formikRef.current.dirty) {
      // setShowSuccessMessage(true);
      // setTimeout(() => {
      //   setShowSuccessMessage(false);
      // }, 3000);
    }
  };

  return (
    <div className="container section-form-wrap margin-bottom">
      <div className="form-wrap">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleFormSubmit}
          innerRef={formikRef}
        >
          {({ errors, touched }) => (
            <Form autoComplete="off">
              <h2 className="text-4xl text-title-form">
                Форма зворотнього зв’язку
              </h2>
              <p className="text-base text-title-form">
                Якщо у Вас є питання/пропозиції/побажання - чекаємо Ваших
                повідомлень.
              </p>
              <div className="fieldWrap">
                <div className="label-feedback-container">
                  <label
                    className={
                      isLightTheme
                        ? "lable-backgroud-white"
                        : "lable-backgroud-black"
                    }
                    htmlFor="name"
                  >
                    {"Ім'я"}
                  </label>
                </div>
                <Field
                  className={classNames(
                    "text-base fieldWrap__input input-background-black",
                    {
                      "field-input-error": errors.name && touched.name,
                    }
                  )}
                  type="text"
                  name="name"
                  placeholder="Тарас"
                />
                <FormError
                  name="name"
                  component="div"
                  className="text-base error-message"
                />
                <div className="label-feedback-container">
                  <label
                    className={
                      isLightTheme
                        ? "lable-backgroud-white"
                        : "lable-backgroud-black"
                    }
                    htmlFor="name"
                  >
                    {"Email"}
                  </label>
                </div>
                <Field
                  className={classNames(
                    "text-base fieldWrap__input input-background-black",
                    {
                      "field-input-error": errors.email && touched.email,
                    }
                  )}
                  type="text"
                  name="email"
                  placeholder="t.shevсhenko@gmail.com"
                />
                <FormError
                  name="email"
                  component="div"
                  className="text-base error-message"
                />
                <div className="label-feedback-container">
                  <label
                    className={
                      isLightTheme
                        ? "lable-backgroud-white"
                        : "lable-backgroud-black"
                    }
                    htmlFor="name"
                  >
                    {"Тема повідомлення"}
                  </label>
                </div>
                <Field
                  className={classNames(
                    "text-base fieldWrap__input input-background-black",
                    {
                      "field-input-error": errors.theme && touched.theme,
                    }
                  )}
                  type="text"
                  name="theme"
                  placeholder="Введіть тему повідомлення"
                />
                <FormError
                  name="theme"
                  component="div"
                  className="text-base error-message"
                />
                <div className="text-area-wrap">
                  <div className="label-feedback-container">
                    <label
                      className={
                        isLightTheme
                          ? "lable-backgroud-white"
                          : "lable-backgroud-black"
                      }
                      htmlFor="name"
                    >
                      {"Текст повідомлення"}
                    </label>
                  </div>
                  <Field
                    className={classNames(
                      "text-base fieldWrap__input text-area input-background-black",
                      {
                        "field-input-error": errors.message && touched.message,
                      }
                    )}
                    type="text"
                    name="message"
                    as="textarea"
                    placeholder="Введіть текст повідомлення"
                    rows="4"
                  />
                  <FormError
                    name="message"
                    component="div"
                    className="error-message text-base"
                  />
                </div>
                <p className="text-sm text-under-text-area">
                  Поле може містити букви, цифри та спецсимволи. Максимальна
                  кількість символів 600.
                </p>
                <div
                  className={classNames("button-form", {
                    "bg-dark": !isLightTheme,
                  })}
                >
                  <ButtonForm
                    text="Надіслати повідомлення"
                    className={classNames("", {
                      "button-dark": !isLightTheme,
                    })}
                    type="submit"
                    onClick={handleShowPopUp}
                  />
                  {showSuccessMessage && <PopUpFeedBack />}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormFeedBack;
