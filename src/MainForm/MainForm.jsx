import { TextField, Button, Paper } from '@material-ui/core';
import { useState } from 'react';
export default function MainForm() {
  const [thousand, setThousand] = useState('');
  const [hundred, setHundred] = useState('');
  const [fiveHundred, setFiveHundred] = useState('');
  const [twoHundred, setTwoHundred] = useState('');
  const [fifty, setFifty] = useState('');
  const [twenty, setTwenty] = useState('');
  const [ten, setTen] = useState('');
  const [five, setFive] = useState('');
  const [two, setTwo] = useState('');
  const [one, setOne] = useState('');
  const [other, setOther] = useState('');

  const hendleInputChanga = e => {
    switch (e.target.name) {
      case 'thousand':
        setThousand(Number(e.target.value));
        break;
      case 'fiveHundred':
        setFiveHundred(Number(e.target.value));
        break;
      case 'twoHundred':
        setTwoHundred(Number(e.target.value));
        break;
      case 'hundred':
        setHundred(Number(e.target.value));
        break;
      case 'fifty':
        setFifty(Number(e.target.value));
        break;
      case 'twenty':
        setTwenty(Number(e.target.value));
        break;
      case 'ten':
        setTen(Number(e.target.value));
        break;
      case 'five':
        setFive(Number(e.target.value));
        break;
      case 'two':
        setTwo(Number(e.target.value));
        break;
      case 'one':
        setOne(Number(e.target.value));
        break;
      case 'other':
        setOther(Number(e.target.value));
        break;
      default:
        break;
    }
  };
  const submitCalcForm = e => {
    e.preventDefault();
    let sum =
      thousand * 1000 +
      fiveHundred * 500 +
      twoHundred * 200 +
      hundred * 100 +
      fifty * 50 +
      twenty * 20 +
      ten * 10 +
      five * 5 +
      two * 2 +
      one +
      other;
    console.log(sum);
  };
  return (
    <form noValidate autoComplete="off" onSubmit={submitCalcForm}>
      <Paper elevation={3} />
      <ul className="main-form">
        <li>
          <span></span>
          <TextField
            id="outlined-basic"
            label="1000"
            variant="outlined"
            onChange={hendleInputChanga}
            name="thousand"
            value={thousand}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="500"
            variant="outlined"
            onChange={hendleInputChanga}
            name="fiveHundred"
            value={fiveHundred}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="200"
            variant="outlined"
            onChange={hendleInputChanga}
            name="twoHundred"
            value={twoHundred}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="100"
            variant="outlined"
            onChange={hendleInputChanga}
            name="hundred"
            value={hundred}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="50"
            variant="outlined"
            onChange={hendleInputChanga}
            name="fifty"
            value={fifty}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="20"
            variant="outlined"
            onChange={hendleInputChanga}
            name="twenty"
            value={twenty}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="10"
            variant="outlined"
            onChange={hendleInputChanga}
            name="ten"
            value={ten}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="5"
            variant="outlined"
            onChange={hendleInputChanga}
            name="five"
            value={five}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="2"
            variant="outlined"
            onChange={hendleInputChanga}
            name="two"
            value={two}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="1"
            variant="outlined"
            onChange={hendleInputChanga}
            name="one"
            value={one}
          />
        </li>
        <li>
          <TextField
            id="outlined-basic"
            label="Other"
            variant="outlined"
            onChange={hendleInputChanga}
            name="other"
            value={other}
          />
        </li>
      </ul>
      <Button variant="contained" color="primary" type="submit">
        Primary
      </Button>
    </form>
  );
}
