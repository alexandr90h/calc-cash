import { TextField, Button, Paper } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as API from '../api/api';
import summAction from '../redux/action';
// import * as operation from '../redux/operation';

export default function MainForm() {
  const setingList = useSelector(state => state.setingList);
  const [thousand, setThousand] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [twoHundred, setTwoHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);
  const [other, setOther] = useState(setingList.other ? setingList.other : 0);
  const dispatch = useDispatch();
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
    const sum =
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
    API.addCash({
      thousand,
      fiveHundred,
      twoHundred,
      hundred,
      fifty,
      twenty,
      ten,
      five,
      two,
      one,
      other,
      sum,
    });
    reset();
  };
  const reset = () => {
    setThousand(0);
    setFiveHundred(0);
    setTwoHundred(0);
    setHundred(0);
    setFifty(0);
    setTwenty(0);
    setTen(0);
    setFive(0);
    setTwo(0);
    setOne(0);
    setOther(0);
  };
  return (
    <>
      <form
        className="main-form-conteiner"
        noValidate
        autoComplete="off"
        onSubmit={submitCalcForm}
      >
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
        </ul>
        <ul className="main-form">
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
      <div className="result-conteiner">
        <h1>
          <span>Сума: </span>
          {thousand * 1000 +
            fiveHundred * 500 +
            twoHundred * 200 +
            hundred * 100 +
            fifty * 50 +
            twenty * 20 +
            ten * 10 +
            five * 5 +
            two * 2 +
            one +
            other}
        </h1>
        <h2>
          <span>Виручка: </span>
          {thousand * 1000 +
            fiveHundred * 500 +
            twoHundred * 200 +
            hundred * 100}
        </h2>
      </div>
    </>
  );
}
