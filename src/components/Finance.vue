<template>
	<div id="container" class="p-3 mb-4 bg-white rounded shadow-sm">
        <div class="d-flex justify-content-between p-3 mb-2">
            <div>
                <span>گزارش درآمد</span>
                <span class="icon-chart-pie-outline"></span>
            </div>
            <span class="icon-cw cursor"></span>
        </div>
		<highcharts :options="chartOptions"></highcharts>
	</div>
</template>

<script>
	import { Chart } from 'highcharts-vue';
	let data1 = [
		216.4, 194.1, 95.6, 200, 42.5, 343, 186, 243, 180, 143, 79, 34.3,
	];
	let data2 = [
		-100, -72, -84, -110, -99.5, -105, -86, -97.6, -82.7, -33, -51, -35,
	];

	export default {
		name: 'Finance',
		data() {
			return {
				chartOptions: {
					chart: {
						type: 'column',
					},
					plotOptions: {
						column: {
							pointPadding: 0.4,
							borderWidth: 0,
							groupPadding: 0,
							shadow: false,
						},
					},
					title: {
						text: '',
					},
					xAxis: {
						categories: [
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
						],
					},
					yAxis: {
						gridLineColor: '#707070',
						gridLineDashStyle: 'LongDash',
						title: {
							text: 'تومان',
						},
					},
					series: [
						{
							name: 'درآمد',
							data: data1,
							label: {
								enabled: false,
							},
							boostThreshold: 0,
							borderRadius: 3,
							pointPadding: 0.45,
							color: '#685FD6',
						},
						{
							name: 'مخارج',
							data: data2,
							borderRadius: 3,
							pointPadding: 0.45,
							color: '#DE8E45',
						},
					],
				},
			};
		},
		components: {
			highcharts: Chart,
		},
	};
</script>
