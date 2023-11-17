import React from "react"

interface VisibilityProbs {
  isVisible: boolean
}

const scrollToTop = (): void => {
  window.scrollTo({
    behavior: "smooth",
    top: 0
  })
}

const BackToTopButton: React.FC<VisibilityProbs> = ({ isVisible }) => {
  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} title="Back to Top">
          <i aria-hidden="true" className="im im-arrow-up" />
        </button>
      )}
    </div>
  )
}

export default BackToTopButton
