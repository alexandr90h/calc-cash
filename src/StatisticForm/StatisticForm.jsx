import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import { Bar, Pie, Line } from 'react-chartjs-2';

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
  const summCashItem = (objs, item) => {
    const summItem = objs.reduce((summ, obj) => summ + obj[item], 0);
    return summItem;
  };
  const data = {
    labels: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'],
    datasets: [
      {
        label: 'Середня сума',
        // barPercentage: 0.7,
        // categoryPercentage: 0.8,
        // barThickness: 'flex',
        data: [
          Math.round(setAverageForDay(rows, 'Понеділок')),
          Math.round(setAverageForDay(rows, 'Вівторок')),
          Math.round(setAverageForDay(rows, 'Середа')),
          Math.round(setAverageForDay(rows, 'Четвер')),
          Math.round(setAverageForDay(rows, 'Пятниця')),
          Math.round(setAverageForDay(rows, 'Субота')),
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataOfPie = {
    labels: ['1000', '500', '200', '100', '50', '20', '10', '5', '2', '1'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          summCashItem(rows, 'thousand'),
          summCashItem(rows, 'fiveHundred'),
          summCashItem(rows, 'twoHundred'),
          summCashItem(rows, 'hundred'),
          summCashItem(rows, 'fifty'),
          summCashItem(rows, 'twenty'),
          summCashItem(rows, 'ten'),
          summCashItem(rows, 'five'),
          summCashItem(rows, 'two'),
          summCashItem(rows, 'one'),
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(160, 30, 12, 0.2)',
          'rgba(52, 180, 61, 0.2)',
          'rgba(80, 12, 130, 0.2)',
          'rgba(189, 32, 131, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(160, 30, 12, 1)',
          'rgba(52, 180, 61, 1)',
          'rgba(80, 12, 130, 1)',
          'rgba(189, 32, 131, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
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
  return (
    <div className="statistic-box">
      <ul className="statistic-list">
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
      <Bar
        data={data}
        width={500}
        // height={100}
        options={{
          scales: {
            yAxes: [
              {
                stacked: 2000,
              },
            ],
          },
        }}
      />
      <Pie data={dataOfPie} />
      <Line data={data0fLine} />
    </div>
  );
}
