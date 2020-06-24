import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    input: "",
    mensajes: []
  };

  addMessage = () => {
    // Agrego mensajes
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { mensajes } = this.state;

    return (
      <div className="App">
        <input name="input" type="text" onChange={this.handleOnChange} />
        <button onClick={this.addMessage}>Enviar</button>
        <div>
          {mensajes.map(mensaje => (
            <div>{mensaje}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

//hacer una lista que permita borrar los mensajes enviados
