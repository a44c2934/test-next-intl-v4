import { useTranslation } from "./TranslationProvider";

const LanguageSwitcher = () => {

  const { switchLanguage } = useTranslation();
  return (
    <div>
      <button onClick={() => switchLanguage('th')}>Thai</button>
      <button onClick={() => switchLanguage('en')}>English</button>
    </div>
  );
};

export default LanguageSwitcher;
