import {useLanguage} from "../providers/LanguageProvider";

export const useTranslation = () => {
  const { t, language, setLanguage } = useLanguage();
  return { t, language, setLanguage };
};
