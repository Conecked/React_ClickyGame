import React, { Component } from "react";
import Nav from "../Nav";
import tiles from "../../tiles.json"
import Container from "../Container";
import Header from "../Header";
import Footer from "../Footer";

const initialState = {
  tiles,
  score: 0,
  topScore: 0,
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  resetGame = () => {
    const tiles = this.state.tiles.map(tile => ({ ...tile, clicked: false }))
    console.log('TILES', tiles)
    this.setState({ score: 0, tiles })
    console.log('NEW STATE', this.state)
  }

  handleClick = id => {
    let clickedTile = this.state.tiles.find(tile => tile.id === id)

    if (clickedTile.clicked) {
      this.resetGame()
    } else {
      clickedTile.clicked = true
      let newTiles = this.state.tiles.filter(tile => tile.id !== id)
      newTiles.push(clickedTile)
      console.log('NEW TILES', newTiles)

      this.setState({
        ...this.state,
        score: this.state.score + 1,
        topScore: this.state.score === this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore,
        tiles: newTiles
      })
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#FF69B4'}}>
        <Nav score={ this.state.score } topScore={ this.state.topScore } />
        <Header />
        <Container>
        {  
          this.state.tiles.map(tile => ( // TODO: Shuffle these around! Hint: .sort()
            <div
              key={ tile.id }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: 160,
                height: 160,
                margin: '1em',
                backgroundColor: '#000',
                backgroundImage: `url("${tile.image}")`,
                border: '5px solid rgb(148,0,211)',
                borderRadius: '3px',
                boxShadow: '3px 5px 6px rgba(0, 0, 0, 0.4), 3px 5px 6px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
              }}
              onClick={ () => this.handleClick(tile.id) }
            > 
              {/* { tile.clicked ? 'clicked' : null } */}
            </div>
          ))
        }
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Game;