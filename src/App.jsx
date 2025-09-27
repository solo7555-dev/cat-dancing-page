import './styles/global.css'
import './App.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <h1>댄싱 고양이</h1>
      <p>고양이의 멋진 춤을 감상해보세요!</p>
      <DancingCat />
    </div>
  )
}

export default App
