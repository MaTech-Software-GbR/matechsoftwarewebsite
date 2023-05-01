import { useEffect } from 'react';

const MobileMenu = (): JSX.Element => {
  useEffect(() => {
    const toggleButton = document.querySelector(
      '.header-menu-toggle'
    ) as HTMLElement;
    const nav = document.querySelector('.header-nav-wrap') as HTMLElement;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();

      toggleButton.classList.toggle('is-clicked');
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    };

    const handleResize = () => {
      if (toggleButton.offsetParent !== null) {
        nav.classList.add('mobile');
      } else {
        nav.classList.remove('mobile');
      }
    };

    const handleLinkClick = (link: HTMLElement) => {
      if (nav.classList.contains('mobile')) {
        toggleButton.classList.toggle('is-clicked');
        nav.style.display = 'none';
      }
    };

    toggleButton.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    nav.querySelectorAll('a').forEach((link: HTMLElement) => {
      link.addEventListener('click', () => handleLinkClick(link));
    });

    return () => {
      toggleButton.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      nav.querySelectorAll('a').forEach((link: HTMLElement) => {
        link.removeEventListener('click', () => handleLinkClick(link));
      });
    };
  }, []);

  return <></>;
};

export default MobileMenu;
