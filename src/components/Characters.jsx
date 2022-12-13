import { StatusIcon } from "../Icons/StatusIcon"

function Characters({ characters = [] }) {
  return (
    <section className="container-character">
      <div className='colums-container'>
        {
          characters.map((character) => (
            <div key={character.id} className="card-character">

              <div className="image-character"><img src={character.image} alt={character.image} /></div>

              <div className="card-info">

                <div className="name-status">
                  <h4>{character.name}</h4>
                  <p>{character.status === 'Alive' &&
                    (<StatusIcon color={"#00FF10"} />)
                  }  {character.status} - {character.species}</p>
                </div>

                <div className="text-location">
                  <span>Location:</span>
                  <p>{character.location.name}</p>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Characters