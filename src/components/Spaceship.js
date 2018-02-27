// Code The Spaceship Component Here
class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false
}


const color = ['black', 'red'];
