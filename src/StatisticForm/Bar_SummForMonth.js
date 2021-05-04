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
  let summForMonth = [];
  rows.map(obj => {
    if (!monthArr.includes(dateFormat(obj.createdAt, 'mm.yyyy'))) {
      monthArr.push(dateFormat(obj.createdAt, 'mm.yyyy'));
    }
  });
  summForMonth = monthArr.map(month =>
    rows.map(obj => {
      let summ = 0;
      if ((obj.createdAt, 'mm.yyyy') === month) {
        summ + obj.summ;
      }
      return summ;
    }),
  );
  console.log(monthArr);
  console.log(summForMonth);
  const data = {
    labels: monthArr,
  };
  return <Bar data={data} />;
}
