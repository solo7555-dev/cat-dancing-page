import { useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation()

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      <div className="controls">
        <button
          className="animation-button"
          onClick={toggleAnimation}
          aria-label={isAnimating ? '춤 멈추기' : '춤추기 시작'}
        >
          {isAnimating ? '🛑 춤 멈추기' : '💃 춤추기 시작!'}
        </button>
        <p className="hint">스페이스바를 눌러도 애니메이션을 제어할 수 있어요!</p>
      </div>
    </div>
  )
}

export default DancingCat