
import { Close, MenuButton } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useToggle } from '@/hooks';
import { Form } from '../Form';
import { HideButton, MenuWrapper, LanguageButton } from './styles';
import { LANGUAGES } from '@/constants/app';

export const Menu = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const { i18n: { language, changeLanguage } } = useTranslation();

  return (
    <>
      <MenuButton
        onClick={toggleOpen}
        sx={{ cursor: 'pointer' }}
        aria-label="Toggle Menu"
      />
      <MenuWrapper hidden={!isOpen}>
        <HideButton onClick={toggleOpen}>
          <Close
            sx={{ cursor: 'pointer' }}
          />
        </HideButton>

        <div>
          <LanguageButton
            bg={language === LANGUAGES.en && "active"}
            onClick={() => changeLanguage(LANGUAGES.en)}
          >
            EN
          </LanguageButton>
          <LanguageButton
            bg={language === LANGUAGES.ru && "active"}
            onClick={() => changeLanguage(LANGUAGES.ru)}
          >
            RU
          </LanguageButton>
        </div>

        <Form hide={toggleOpen} />
      </MenuWrapper>
    </>
  );
};
