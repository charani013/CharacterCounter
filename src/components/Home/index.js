import {Component} from 'react'
import {v4} from 'uuid'
import CharacterItem from '../CharacterItem'
import './index.css'

class Home extends Component {
  state = {
    inputValue: '',
    characterList: [],
  }

  onClickButton = event => {
    event.preventDefault()
    const {inputValue} = this.state

    const characterNew = {
      id: v4(),
      character: inputValue,
    }

    this.setState(prevState => ({
      characterList: [...prevState.characterList, characterNew],
      inputValue: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue, characterList} = this.state

    const lengthOfList = characterList.length

    return (
      <div className="bg-container">
        <div className="container-row">
          <div className="container-column">
            <div className="yellow-container">
              <h1 className="heading-blue">
                Count the characters like a Boss..
              </h1>
            </div>
            <div className="yellow2-container">
              {lengthOfList === 0 ? (
                <img
                  className="image"
                  alt="no user inputs"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
                />
              ) : (
                <ul>
                  {characterList.map(each => (
                    <CharacterItem key={each.id} itemDetails={each} />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="blue-container">
            <h1 className="heading-yellow">Character Counter</h1>
            <form onSubmit={this.onClickButton}>
              <div className="input-row-container">
                <input
                  className="input-class"
                  onChange={this.onChangeInput}
                  type="text"
                  placeholder="Enter the Characters here"
                  value={inputValue}
                />
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
