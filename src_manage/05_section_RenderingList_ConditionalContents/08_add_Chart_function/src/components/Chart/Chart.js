import ChartBar from "./Chart";
import "./Chart.css";
const Chart = (props) => {
	<div className="chart">
		{props.dataPoints.map((dataPoints) => (
			<ChartBar
				key={dataPoints.id}
				value={dataPoints.value}
				maxValue={null}
				label={dataPoints.label}
			/>
		))}
	</div>;
};

export default Chart;
