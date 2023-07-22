import React from 'react'
import Home from '../components/home/index'

function HomePage() {

  React.useEffect(() => {
    document.body.classList.remove('dashboard');
  }, [])

  return (
    <div >
      <Home/>
    </div>
  );
}

export default HomePage;