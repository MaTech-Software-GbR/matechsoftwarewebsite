import React from "react"

interface VisibilityProbs {
  isVisible: boolean
}

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const BackToTopButton: React.FC<VisibilityProbs> = ({ isVisible }) => {
  return (
    <div className="back-to-top">
      {isVisible && (
        <button title="Back to Top" onClick={scrollToTop}>
          <i className="im im-arrow-up" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
