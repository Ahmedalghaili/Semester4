import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Cricket'],
      },
    };
  }

  render() {
    return (
      <div>
        <div className="flex flex-col sm:flex-col-reverse sm:space-y-4">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
