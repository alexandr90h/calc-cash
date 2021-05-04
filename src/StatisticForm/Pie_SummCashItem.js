import { Pie } from 'react-chartjs-2';

export default function Pie_SummCashItem({ rows }) {
  const summCashItem = (objs, item) => {
    const summItem = objs.reduce((summ, obj) => summ + obj[item], 0);
    return summItem;
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
  return <Pie data={dataOfPie} />;
}
