import { useTranslation } from "react-i18next";

type TextProps = {
  id: string;
};

export const Text = ({ id }: TextProps) => {
  const { t } = useTranslation();

  return t(id);
};
