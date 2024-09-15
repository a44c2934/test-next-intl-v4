import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import * as React from "react";
import { Container } from "react-bootstrap";

interface IPostProps { }

const Post: React.FunctionComponent<IPostProps> = () => {
  const t = useTranslations();

  return (
    <>
      <Container>
        <h1>{t("title")}</h1>
        <h3>{t("post")} 1</h3>
        <LanguageSwitcher />
      </Container>
    </>
  );
};

export default Post;
