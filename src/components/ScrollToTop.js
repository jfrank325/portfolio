import React, { useState } from "react"
import Arrow from "../images/rightarrow.png"

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  window.addEventListener("scroll", checkScrollTop)
  return (
    <div
      className="scroll-container"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <img src={Arrow} alt="Scroll To Top" />
    </div>
  )
}

export default ScrollToTop
