import { useState } from 'react';
import html2canvas from 'html2canvas';

import './App.css';

function App() {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [imagem, setImagem] = useState('')

  const onChangeLine1 = (e) => {
    setLine1(e.target.value)
  }
  const onChangeLine2 = (e) => {
    setLine2(e.target.value)
  }
  const onChangeImagem = (e) => {
    setImagem(e.target.value)
  }
  const onClickExport = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png")

      var link = document.createElement('a')
      link.download = 'meme.png'
      link.href = img
      link.click()
  });
  }
  return (
    <div className="App">
      <select onChange={onChangeImagem}>
        <option value= "fire">Casa em chamas</option>
        <option value= "futurama">Futurama</option>
        <option value= "history">History Channel</option>
        <option value= "matrix">Matrix</option>
        <option value= "philosoraptor">Philosoraptor</option>
        <option value= "smart">Smart Guy</option>
      </select><br/>

      <input onChange={onChangeLine1} type="text" placeholder = "Line 1"/> <br/>
      <input onChange = {onChangeLine2} type="text" placeholder = "Line 2"/> <br/>
      <button onClick={onClickExport}>Exportar</button>

      <div className='meme' id = "meme">
        <span>{line1}</span><br/>
        <span>{line2}</span>
        <img src={`/img/${imagem}.jpg`} alt={imagem} />
      </div>
    </div>
  );
}

export default App;
