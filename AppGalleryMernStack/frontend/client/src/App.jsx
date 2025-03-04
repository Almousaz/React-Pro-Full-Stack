import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ImageGallery from './components/ImageGallery'
import ImageDetail from './components/ImageDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/:id" element={<ImageDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
