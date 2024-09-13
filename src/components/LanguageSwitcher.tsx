import { Button } from "react-bootstrap";
import { useTranslation } from "./TranslationProvider";

const LanguageSwitcher = () => {

  const { switchLanguage } = useTranslation();
  return (
    <div className="d-flex gap-2">
      <Button onClick={() => switchLanguage('th')}>Thai</Button>
      <Button onClick={() => switchLanguage('en')}>English</Button>
    </div>
  );
};

export default LanguageSwitcher;
