import { Card, TextField } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as operation from '../redux/operation';
import * as API from '../api/api';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};
const color = randomColor();

export default function DebtsForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [checked, setChecked] = useState(false);
  const listDebts = useSelector(state => state.debtsList);
  const debtById = useSelector(state => state.debtById);
  const [open, setOpen] = useState(false);

  const submitDebtForm = async e => {
    e.preventDefault();
    await API.addDebts({ ...data, importance: checked });
    dispatch(operation.getDebts());
  };
  const deleteItmDebt = async e => {
    await API.deleteItmDebt(e.currentTarget.value);
    dispatch(operation.getDebts());
  };

  const handleClickOpen = async e => {
    await dispatch(operation.getDebtById(e.currentTarget.value));
    setOpen(true);
    console.log(debtById);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <form
        className="debts-form-box"
        noValidate
        autoComplete="off"
        onSubmit={submitDebtForm}
      >
        <TextField
          label="Ім'я"
          variant="outlined"
          name="data[name]"
          onChange={e => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <TextField
          type="number"
          label="Сума боргу"
          variant="outlined"
          name="data[money]"
          onChange={e => {
            setData({ ...data, money: e.target.value });
          }}
        />
        <TextField
          label="Коментар"
          variant="outlined"
          name="data[note]"
          onChange={e => {
            setData({ ...data, note: e.target.value });
          }}
        />

        <FormControlLabel
          control={
            <Switch
              color="primary"
              name="data[importance]"
              checked={checked}
              onChange={e => {
                setChecked(prev => !prev);
              }}
            />
          }
          label="Нагадування"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </Button>
      </form>
      <section className="debts-content-box">
        {listDebts.map(obj => (
          <Card className="card" key={obj._id}>
            <div className="card-title">
              <Avatar style={{ backgroundColor: color }}>
                {obj.name.slice(0, 2)}
              </Avatar>
              <h4>{obj.name}</h4>
            </div>
            <h3>{obj.money} грн.</h3>
            <p>{obj.note}</p>
            <div className="card-icon-box">
              <StarIcon
                color={obj.importance ? 'secondary' : 'primary'}
                className="StarIcon"
              />
              <IconButton value={obj._id} onClick={handleClickOpen}>
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                value={obj._id}
                onClick={deleteItmDebt}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Card>
        ))}
      </section>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <form
          className="debts-form-box"
          noValidate
          autoComplete="off"
          onSubmit={submitDebtForm}
        >
          <TextField
            label="Ім'я"
            variant="outlined"
            name="data[name]"
            value={debtById.name}
            onChange={e => {
              setData({ ...debtById, name: e.currentTarget.value });
            }}
          />
          <TextField
            type="number"
            label="Сума боргу"
            variant="outlined"
            name="data[money]"
            onChange={e => {
              setData({ ...data, money: e.target.value });
            }}
          />
          <TextField
            label="Коментар"
            variant="outlined"
            name="data[note]"
            onChange={e => {
              setData({ ...data, note: e.target.value });
            }}
          />

          <FormControlLabel
            control={
              <Switch
                color="primary"
                name="data[importance]"
                checked={checked}
                onChange={e => {
                  setChecked(prev => !prev);
                }}
              />
            }
            label="Нагадування"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save
          </Button>
        </form>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
