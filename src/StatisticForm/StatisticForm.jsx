import { useSelector } from 'react-redux';
import Bar_AverageForDay from './Bar_AverageForDay';
import Bar_SummForMonth from './Bar_SummForMonth';
import Line_SummForDay from './Line_SummForDay';
import Pie_SummCashItem from './Pie_SummCashItem';

export default function StatisticForm() {
  const rows = useSelector(state => state.cashList);

  return (
    <div className="statistic-box">
      <Bar_AverageForDay rows={rows} />
      <Pie_SummCashItem rows={rows} />
      <Line_SummForDay rows={rows} />
      <Bar_SummForMonth rows={rows} />
    </div>
  );
}
