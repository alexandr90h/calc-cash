import dateFormat from 'dateformat';
import { Line } from 'react-chartjs-2';

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

export default function Line_SummForDay({ rows }) {
  const forDay = rows.map(obj => dateFormat(obj.updatedAt, 'dd.mm.yy'));
  const summforDay = rows.map(obj => obj.sum);
  const data0fLine = {
    labels: forDay,
    datasets: [
      {
        label: 'Виручка',
        data: summforDay,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  return <Line data={data0fLine} />;
}
