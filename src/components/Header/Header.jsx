import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const isUserLogin = useSelector(getIsLoggedIn);
  const [menuActive, setMenuActive] = useState(false);

  const isModalOpen = bool => {
    if (!bool) {
      return setMenuActive(bool);
    }
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuActive]);

  return (
    <>
      <HeaderMenu
        active={menuActive}
        setActive={isModalOpen}
        isLogin={isUserLogin}
      />
      <BurgerMenu
        active={menuActive}
        setActive={isModalOpen}
        isLogin={isUserLogin}
      />
    </>
  );
};

export default Header;
