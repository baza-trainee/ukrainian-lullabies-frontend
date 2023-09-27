import React from "react";
import { useSelector } from "react-redux";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

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
      /^[A-Za-z'ʼ-\u04FF\u0400-\u04FF\s-]+$/,
      "Поле має містити тільки букви"
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
      "Поле має містити тільки букви, цифри, спецсимволи"
    )
    .min(6, "Кількість символів має бути не менше 6")
    .max(320, "Кількість символів має бути не більше 320")
    .required("Це поле обов'язкове для заповнення"),
  theme: string()
    // .matches(
    //   /^[A-Za-zʼ-\u04FF\u0400-\u04FF\s-]+$/,
    //   "Поле має містити тільки букви, цифри, спецсимволи"
    // )
    .min(6, "Кількість символів має бути не менше 6")
    .max(320, "Кількість символів має бути не більше 320")
    .required("Це поле обов'язкове для заповнення"),
  message: string()
    .max(600, "Кількість символів має бути не більше 600")
    // .matches(
    //   /^[A-Za-zʼ-\u04FF\u0400-\u04FF\s-]+$/,
    //   "Поле має містити тільки букви, цифри, спецсимволи"
    // )
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

  const { t } = useTranslation();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formikRef = useRef();

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    setShowSuccessMessage(true);
    resetForm();
  };

  const handleShowPopUp = () => {
    if (formikRef.current.isValid && formikRef.current.dirty) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };

  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      custom={1}
      ref={ref}
    >
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
                  {t("feedbackForm")}
                </h2>
                <p className="text-base text-title-form">{t("contactUs")}</p>
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
                      {t("name")}
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
                    placeholder={t("taras")}
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
                        "custom-class-light": isLightTheme,
                        "custom-class-dark": !isLightTheme,
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
                      {t("messageSubject")}
                    </label>
                  </div>
                  <Field
                    className={classNames(
                      "text-base fieldWrap__input input-background-black",
                      {
                        "field-input-error": errors.theme && touched.theme,
                        "custom-class-light": isLightTheme,
                        "custom-class-dark": !isLightTheme,
                      }
                    )}
                    type="text"
                    name="theme"
                    placeholder={t("enterSubject")}
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
                        {t("messageText")}
                      </label>
                    </div>
                    <Field
                      className={classNames(
                        "text-base fieldWrap__input text-area input-background-black",
                        {
                          "field-input-error":
                            errors.message && touched.message,
                          "custom-class-light": isLightTheme,
                          "custom-class-dark": !isLightTheme,
                        }
                      )}
                      type="text"
                      name="message"
                      as="textarea"
                      placeholder={t("enterTextMessage")}
                      rows="4"
                    />
                    <FormError
                      name="message"
                      component="div"
                      className="error-message text-base"
                    />
                  </div>
                  <p className="text-sm text-under-text-area">
                    {t("underTextArea")}
                  </p>
                  <div
                    className={classNames("button-form", {
                      "bg-dark": !isLightTheme,
                    })}
                  >
                    <ButtonForm
                      text={t("sendMessage")}
                      className={classNames("", {
                        "button-dark": !isLightTheme,
                      })}
                      type="submit"
                      onClick={handleShowPopUp}
                    />
                    {showSuccessMessage && (
                      <PopUpFeedBack
                        popUpThank={t("popUpThank")}
                        popupText={t("popupText")}
                        isLightTheme={isLightTheme}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </motion.section>
  );
};

export default FormFeedBack;
