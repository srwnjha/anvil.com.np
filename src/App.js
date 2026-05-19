import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './components/header/HeaderScript';

import RouterPage from './pages/RouterPage';

function App() {
  return (
    <div className="App">
      <RouterPage />
    </div>
  );
}

export default App;
