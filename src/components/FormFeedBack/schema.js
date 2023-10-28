import { useTranslation } from "react-i18next";
import { object, string } from "yup";

const schema = (translations) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const currentTranslations = translations[currentLanguage];

  return object({
    name: string()
      .matches(
        /^(?!['ʼ\s-])[A-Za-z'ʼ-\u04FF\u0400-\u04FF\s-]*$/,
        currentTranslations.schema.nameInvalidName
      )
      .notOneOf(
        ["%", "^", "*", "|", "~", "{", "}", ";", "<", ">", ".", ","],
        currentTranslations.schema.nameNotAllowedMessage
      )
      .max(30, currentTranslations.schema.nameMaxLengthMessage)
      .required(currentTranslations.schema.requiredMessage),
    email: string()
      .matches(
        /^[a-zA-Z0-9](?!.*[._-]{2,})[a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
        currentTranslations.schema.emailNotAllowedMessage
      )
      .min(6, currentTranslations.schema.emailMinLengthMessage)
      .max(100, currentTranslations.schema.emailMaxLengthMessage)
      .required(currentTranslations.schema.requiredMessage),
    theme: string()
      .matches(
        /^(?![~$@#№`{}[\]|/& ])[^~$@#№`{}[\]|/&]+(?<=[^~$@#№`{}[\]|/&])$/,
        currentTranslations.schema.themeNotAllowedMessage
      )
      .min(6, currentTranslations.schema.themeMinLengthMessage)
      .max(100, currentTranslations.schema.themeMaxLengthMessage)
      .required(currentTranslations.schema.requiredMessage),
    message: string()
      .matches(
        /^(?![~$@#№`{}[\]|/& ])[^~$@#№`{}[\]|/&]+(?<=[^~$@#№`{}[\]|/&])$/,
        currentTranslations.schema.messageNotAllowedMessage
      )
      .max(600, currentTranslations.schema.messageMaxLengthMessage)
      .required(currentTranslations.schema.requiredMessage),
  });
};

export default schema;
