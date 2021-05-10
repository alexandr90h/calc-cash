import { Bar } from 'react-chartjs-2';
import dateFormat from 'dateformat';
dateFormat.i18n = {
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};
export default function Bar_SummForMonth({ rows }) {
  const monthArr = [];

  const counterSummOfMonth = (month, arr) => {
    return arr
      .filter(obj => dateFormat(obj.createdAt, 'mm.yyyy') === month)
      .reduce((summ, obj) => summ + obj.sum, 0);
  };
  const randomColor = (itm, transparency) => {
    let arr = [];
    let tr = '';
    transparency ? (tr = transparency) : (tr = '');
    for (let i = 0; i < itm; i++) {
      arr.push(
        '#' +
          (Math.random().toString(16) + '000000')
            .substring(2, 8)
            .toUpperCase() +
          tr,
      );
    }
    return arr;
  };
  rows.map(obj => {
    if (!monthArr.includes(dateFormat(obj.createdAt, 'mm.yyyy'))) {
      monthArr.push(dateFormat(obj.createdAt, 'mm.yyyy'));
    }
  });
  const summOfMonth = monthArr.map(month => counterSummOfMonth(month, rows));

  const data = {
    labels: monthArr,
    datasets: [
      {
        label: 'Сума за місяць',
        data: summOfMonth,
        backgroundColor: randomColor(monthArr.length, '80'),
      },
    ],
  };
  return <Bar data={data} />;
}
