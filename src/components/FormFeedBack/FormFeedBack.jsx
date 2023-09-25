import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import translations from "./translations";

import classNames from "classnames";
import { Formik, Form, Field } from "formik";

import { getLightTheme } from "../../redux/theme/themeSelectors";
import schema from "./schema";
import { fetchSendForm } from "../../redux/sendForm/sendForm-operations";
import { getCurrentLanguage } from "../../redux/currentLanguage/currentLanguageSelector";

import ButtonForm from "./ButtonForm/ButtonForm";
import FormError from "./FormError/FormError";
import PopUpFeedBack from "./PopUpFeedBack/PopUpFeedBack";

import "./form-feedback.css";

const initialValues = {
  name: "",
  email: "",
  theme: "",
  message: "",
};

const FormFeedBack = () => {
  const isLightTheme = useSelector(getLightTheme);
  const currentLanguage = useSelector(getCurrentLanguage);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formikRef = useRef();

  const [isFormValid, setIsFormValid] = useState(false);
  const [areFieldsFilled, setAreFieldsFilled] = useState(false);

  useEffect(() => {
    // Очистити форму при зміні мови
    formikRef.current.resetForm();
  }, [currentLanguage]);

  const checkFormState = () => {
    // Перевірка чи всі поля заповнені
    const allFieldsFilled = Object.keys(formikRef.current.values).every(
      (key) => !!formikRef.current.values[key]
    );

    // Перевірка чи форма валідна
    formikRef.current.validateForm().then((errors) => {
      const formIsValid = Object.keys(errors).length === 0;
      setIsFormValid(formIsValid);
      setAreFieldsFilled(allFieldsFilled);
    });
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    // Перетворення email у нижній регістр
    values.email = values.email.toLowerCase();

    const result = await dispatch(fetchSendForm(values));
    // console.log("Результат від сервера:", result);
    setShowSuccessMessage(true);
    resetForm();
    return result;
  };

  const handleShowPopUp = () => {
    if (formikRef.current.isValid && formikRef.current.dirty) {
      setShowSuccessMessage(true);
      // setTimeout(() => {
      //   setShowSuccessMessage(false);
      // }, 3000);
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
      <div className="wrapper-form">
        <div className=" section-form-wrap margin-bottom">
          <div className="form-wrap">
            <Formik
              initialValues={initialValues}
              validationSchema={schema(translations)}
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
                    <div className="label-feedback-container text-sm">
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
                      className="text-sm error-message"
                    />
                    <div className="label-feedback-container text-sm">
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
                      className="text-sm error-message"
                    />
                    <div className="label-feedback-container text-sm">
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
                      className="text-sm error-message"
                    />
                    <div className="text-area-wrap text-sm">
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
                        className="error-message text-sm"
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
                        isFormValid={isFormValid}
                        areFieldsFilled={areFieldsFilled}
                        checkFormState={checkFormState}
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
      </div>
    </motion.section>
  );
};

export default FormFeedBack;
