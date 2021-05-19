import { Bar } from 'react-chartjs-2';
import { format, parseISO } from 'date-fns';
import { uk } from 'date-fns/locale';

export default function Bar_AverageForDay({ rows }) {
  const setAverageForDay = (objs, day) => {
    let summ = 0;
    let i = 0;
    objs.map(obj => {
      if (
        format(parseISO(obj.createdAt), 'EEEE', {
          locale: uk,
        }) === day
      ) {
        i++;
        summ += Number(obj.sum);
      }
    });
    return summ / i;
  };
  const data = {
    labels: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'],
    datasets: [
      {
        label: 'Середня сума',
        data: [
          Math.round(setAverageForDay(rows, 'понеділок')),
          Math.round(setAverageForDay(rows, 'вівторок')),
          Math.round(setAverageForDay(rows, 'середа')),
          Math.round(setAverageForDay(rows, 'четвер')),
          Math.round(setAverageForDay(rows, 'п’ятниця')),
          Math.round(setAverageForDay(rows, 'субота')),
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

  return (
    <>
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
    </>
  );
}
