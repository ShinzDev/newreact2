import React from 'react'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/welcometext/Welcome'
import Footer from './components/footer/Footer'
import Cards from './components/cards/Cards'





const App = () => {
  // const classMates = [ 'Jibola', 'Gbolaji', 'Emmanuel', 'James', 'Hassan', 'Lee' ];

  // const fruit = ['Mango','grape', 'pear','peach', 'Apple', 'Pineapple', 'Banana', 'cherry', 'watermelon', 'strawberry','blueberry'];


  return (
    <div>
      <Navbar/>
      <Welcome></Welcome>
      {/* <Cards/> */}
      <Footer/>
    {/* {
      fruit.map((f) => (
        
          <p>{f}</p>
        
      ))
      
      

      } */}

    </div>
  )
}

export default App
