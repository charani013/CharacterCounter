import './index.css'

const CharacterItem = props => {
  const {itemDetails} = props
  const {character} = itemDetails

  return (
    <li className="list-color">
      <p>
        {character} : {character.length}
      </p>
    </li>
  )
}

export default CharacterItem
