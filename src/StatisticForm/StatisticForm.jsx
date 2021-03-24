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
    'Пятниця',
    'Субота',
  ],
};

export default function StatisticForm() {
  const rows = useSelector(state => state.cashList);

  const setAverageForDay = (objs, day) => {
    let summ = 0;
    let i = 0;
    objs.map(obj => {
      if (dateFormat(obj.createdAt, 'dddd') === day) {
        i++;
        summ += Number(obj.sum);
      }
    });
    return summ / i;
  };
  return (
    <div>
      <ul>
        <li>
          Понеділок:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Понеділок')))}</span>
        </li>
        <li>
          Вівторок:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Вівторок')))}</span>
        </li>
        <li>
          Середа:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Середа')))}</span>
        </li>
        <li>
          Четвер:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Четвер')))}</span>
        </li>
        <li>
          Пятниця:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Пятниця')))}</span>
        </li>
        <li>
          Субота:{' '}
          <span>{String(Math.round(setAverageForDay(rows, 'Субота')))}</span>
        </li>
      </ul>
    </div>
  );
}
