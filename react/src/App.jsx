import React from 'react'
import Meal from './Meal'
import meals from './meals'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { meals, filter: 'all', selected: null }
  }

  selectMeal(meal) {
    this.setState({ selected: meal })

    setTimeout(() => this.setState({ selected: null }), 5000)
  }

  render() {
    return (
      <div className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#243e63]">
            Découvrez notre <span className="bg-[#6415ff] text-white -skew-x-12 inline-block p-3 px-4">menu.</span>
          </h1>

          <div className="flex bg-slate-100 p-2 mt-6 xl:mt-0 rounded">
            <div onClick={() => this.setState({ filter: 'all' })} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${this.state.filter == 'all' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Tout</div>
            <div onClick={() => this.setState({ filter: 'meat' })} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${this.state.filter == 'meat' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Viandes</div>
            <div onClick={() => this.setState({ filter: 'flower' })} className={`mr-3 py-2 px-6 cursor-pointer rounded font-medium duration-200 ${this.state.filter == 'flower' ? 'bg-[#6415ff] text-white' : 'text-slate-500 hover:bg-slate-200'}`}>Légumes</div>
          </div>
        </div>

        {this.state.selected &&
          <div className="text-center my-16">
            <h1 className="text-3xl text-emerald-500 mb-12">Vous avez commandé le repas {this.state.selected.title}</h1>
            <img className="h-64 w-64 mx-auto object-cover rounded-t" src={this.state.selected.imageSrc} alt={this.state.selected.title} />
          </div>
        }

        {!this.state.selected &&
          <div className="flex flex-wrap -mx-6 mt-6">
            {meals.filter(meal => this.state.filter == 'all' || this.state.filter == meal.type).map((meal, key) => <Meal meal={meal} key={key} onClick={() => this.selectMeal(meal)} />)}
          </div>
        }
      </div>
    )
  }
}

export default App
