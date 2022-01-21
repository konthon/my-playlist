import { useEffect, useRef, useState } from 'react'

const START_RATIO = 0.5
const END_RATIO = 0.2

const useTitlebar = () => {
  const intersectRef = useRef(null)

  const [opacity, setOpacity] = useState(intersectRef ? 0 : 1)

  const calcPercentage = (ratio) => {
    const percentage = (ratio - END_RATIO) * (1 / START_RATIO)
    if (percentage >= 1) {
      return 0
    }
    if (percentage < 0.1) {
      return 1
    }
    return 1 - +percentage.toFixed(3)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setOpacity(calcPercentage(entries[0].intersectionRatio))
      },
      { root: document, threshold: [...Array(100).keys()].map((x) => x / 100) }
    )
    if (intersectRef.current) {
      observer.observe(intersectRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
  return { intersectRef, opacity }
}

export default useTitlebar
