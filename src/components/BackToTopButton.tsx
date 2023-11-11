import React from 'react';

interface VisibilityProbs {
  isVisible: boolean
}

const BackToTopButton: React.FC<VisibilityProbs> = ({ isVisible }) => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="back-to-top">
      {isVisible && (
        <button title="Back to Top" onClick={scrollToTop}>
          <i className="im im-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
