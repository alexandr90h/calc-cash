import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';

dateFormat.i18n = {
  dayNames: [
    'Нд',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб',
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
  ],
};

export default function StatisticForm() {
  const rows = useSelector(state => state.cashList);
  let sum = 0;
  rows.map(row => {
    if (dateFormat(row.createdAt, 'dddd') === 'Понеділок') {
      sum += Number(row.sum);
    }
  });
  return <div>{sum}</div>;
}
