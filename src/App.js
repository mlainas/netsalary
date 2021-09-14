
import './App.css';
import { useState } from 'react';
import FillOptions from './FillOptions';

function App() {
  const [brutto, setBrutto] = useState('');
  const [vero, setVero] = useState('');
  const [veroSumma, setVerosumma] = useState(0);
  const [tv, setTv] = useState(1);
  const [tyottomyysvakuutusSumma, setTyottomyysvakuutusSumma] = useState(0);
  const [te, setTe] = useState(1);
  const [tyoelakeSumma, SetTyoelakeSumma] = useState(0);
  const [netto, setNetto] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const veroEurot = brutto / 100 * vero;
    const teEurot = brutto / 100 * te;
    const tvEurot = brutto / 100 * tv;
    setVerosumma(veroEurot);
    SetTyoelakeSumma(teEurot);
    setTyottomyysvakuutusSumma(tvEurot);
    setNetto(brutto - veroEurot - teEurot - tvEurot);
  }

  return (
    <div id="container">
      <h3>Palkkalaskuri</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Brutto</label>
        </div>
        <input type="number"
          value={brutto}
          onChange={e => setBrutto(e.target.value)}
        />
        <div>
          <label>Vero %</label>
        </div>
        <input type="number"
          value={vero}
          onChange={e => setVero(e.target.value)}
        />
        <div>
          <label>Työttömyysvakuutus (%)</label>
          <output>{tyottomyysvakuutusSumma}</output>
        </div>
        <select
          value={tv}
          onChange={e => setTv(e.target.value)}
        >
         <FillOptions />
        </select>
        <div>
          <label>Työeläke (%)</label>
          <output>{tyoelakeSumma}</output>
        </div>
        <select
          value={te}
          onChange={e => setTe(e.target.value)}
        >
         <FillOptions />
        </select>
        <div>
          <label>Nettopalkkasi </label>
          <output id="netto">{netto}</output>

        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
