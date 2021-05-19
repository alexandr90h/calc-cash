import { Card, TextField } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DebtsForm(params) {
  return (
    <>
      <form className="debts-form-box" noValidate autoComplete="off">
        <TextField label="Ім'я" variant="outlined" />
        <TextField type="number" label="Сума боргу" variant="outlined" />
        <TextField label="Коментар" variant="outlined" />

        <FormControlLabel
          control={<Switch color="primary" />}
          label="Нагадування"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
      <section className="debts-content-box">
        <Card className="card">
          <div className="card-title">
            <Avatar>L</Avatar>
            <h4>Lorem ipsum</h4>
          </div>
          <h3>586 грн.</h3>
          <p></p>
          <div className="card-icon-box">
            <StarIcon color="primary" className="StarIcon" />
            <EditIcon color="primary" />
            <DeleteIcon color="primary" />
          </div>
        </Card>
      </section>
    </>
  );
}
