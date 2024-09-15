import { Button } from "react-bootstrap";
import { useTranslation } from "./TranslationProvider";

const LanguageSwitcher = () => {

  const { switchLanguage } = useTranslation();
  return (
    <div className="d-flex gap-2">
      <Button size="sm" onClick={() => switchLanguage('th')}>TH</Button>
      <Button size="sm" onClick={() => switchLanguage('en')}>EN</Button>
    </div>
  );
};

export default LanguageSwitcher;
