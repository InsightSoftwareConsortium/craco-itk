import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import readImageFile from 'itk/readImageFile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileInformation: 'File information...'
    }
    this.processFile = this.processFile.bind(this)
    this.fileInput = React.createRef()
    this.outputTextArea = React.createRef()
  }

  processFile(event) {
    const outputTextArea = this.outputTextArea.current
    outputTextArea.textContent = "Loading...";

    const dataTransfer = event.dataTransfer;
    const files = this.fileInput.current.files || dataTransfer.files;

    const app = this
    return readImageFile(null, files[0]).then(function({ image, webWorker }) {
      webWorker.terminate();

      function replacer(key, value) {
        if (!!value && value.byteLength !== undefined) {
          return String(value.slice(0, 6)) + "...";
        }
        return value;
      }
      app.setState({fileInformation: JSON.stringify(image, replacer, 4)})
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <label className="file-upload" htmlFor="inputFile">Select Image File</label>
            <input id="inputFile" name="inputFile" type="file" ref={this.fileInput} onChange={this.processFile}></input>
          </div>
          <textarea readOnly ref={this.outputTextArea} className="file-information" value={this.state.fileInformation}></textarea>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://insightsoftwareconsortium.github.io/itk-js/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn itk.js
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://github.com/sharegate/craco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn craco
          </a>
        </header>
      </div>
    );
  }
}

export default App;
