import React from 'react'
import Meal from './Meal'
import meals from './meals'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { meals }
  }

  render() {
    return (
      <div className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#243e63]">
            Découvrez notre <span className="bg-[#6415ff] text-white -skew-x-12 inline-block p-3">menu.</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-between -mx-6 mt-6">
          {meals.map((meal, key) => <Meal meal={meal} key={key} />)}
        </div>
      </div>
    )
  }
}

export default App
