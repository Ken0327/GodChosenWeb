import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import data from '../../data/history_0050.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'angular-ignite';

  historydata = [[new Date, 0]]

  ngOnInit(){
    this.historydata.pop()
    for (var i of data) {
      var year = parseInt(i.date.substring(0, 5));
      var month = parseInt(i.date.substring(5, 8));
      var day = parseInt(i.date.substring(8, 11));
      this.historydata.push([new Date(year, month, day), i.closingPrice]);
    }
    // console.log(this.historydata)
  }

  public chart = {
    title: '0050 History Chart',
    type: ChartType.LineChart,
    data: this.historydata,
    columnNames: ['Date', 'Closing Price'],
    width: 1300,
    height: 700,
    options: {
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Closing Price'
      }
    }
  };

  public chart1 = {
    title: '0050  Backtest Month Chart',
    type: ChartType.LineChart,
    data: [
      [new Date(2010, 1), 0], [new Date(2010, 2), 1], [new Date(2010, 3), 2], [new Date(2010, 4), 4], [new Date(2010, 5), 7], [new Date(2010, 6), 3], [new Date(2010, 7), 2], [new Date(2010, 8), 5], [new Date(2010, 9), 6], [new Date(2010, 10), 10], [new Date(2010, 11), 23], [new Date(2010, 12), 17],
      [new Date(2011, 1), 0], [new Date(2011, 2), 1], [new Date(2011, 3), 2], [new Date(2011, 4), 4], [new Date(2011, 5), 7], [new Date(2011, 6), 3], [new Date(2011, 7), 2], [new Date(2011, 8), 5], [new Date(2011, 9), 6], [new Date(2011, 10), 10], [new Date(2011, 11), 23], [new Date(2011, 12), 17],
      [new Date(2012, 1), 0], [new Date(2012, 2), 1], [new Date(2012, 3), 2], [new Date(2012, 4), 4], [new Date(2012, 5), 7], [new Date(2012, 6), 3], [new Date(2012, 7), 2], [new Date(2012, 8), 5], [new Date(2012, 9), 6], [new Date(2012, 10), 10], [new Date(2012, 11), 23], [new Date(2012, 12), 17],
      [new Date(2013, 1), 0], [new Date(2013, 2), 1], [new Date(2013, 3), 2], [new Date(2013, 4), 4], [new Date(2013, 5), 7], [new Date(2013, 6), 3], [new Date(2013, 7), 2], [new Date(2013, 8), 5], [new Date(2013, 9), 6], [new Date(2013, 10), 10], [new Date(2013, 11), 23], [new Date(2013, 12), 17],
      [new Date(2014, 1), 0], [new Date(2014, 2), 1], [new Date(2014, 3), 2], [new Date(2014, 4), 4], [new Date(2014, 5), 7], [new Date(2014, 6), 3], [new Date(2014, 7), 2], [new Date(2014, 8), 5], [new Date(2014, 9), 6], [new Date(2014, 10), 10], [new Date(2014, 11), 23], [new Date(2014, 12), 17],
      [new Date(2015, 1), 0], [new Date(2015, 2), 1], [new Date(2015, 3), 2], [new Date(2015, 4), 4], [new Date(2015, 5), 7], [new Date(2015, 6), 3], [new Date(2015, 7), 2], [new Date(2015, 8), 5], [new Date(2015, 9), 6], [new Date(2015, 10), 10], [new Date(2015, 11), 23], [new Date(2015, 12), 17],
      [new Date(2016, 1), 0], [new Date(2016, 2), 1], [new Date(2016, 3), 2], [new Date(2016, 4), 4], [new Date(2016, 5), 7], [new Date(2016, 6), 3], [new Date(2016, 7), 2], [new Date(2016, 8), 5], [new Date(2016, 9), 6], [new Date(2016, 10), 10], [new Date(2016, 11), 23], [new Date(2016, 12), 17],
      [new Date(2017, 1), 0], [new Date(2017, 2), 1], [new Date(2017, 3), 2], [new Date(2017, 4), 4], [new Date(2017, 5), 7], [new Date(2017, 6), 3], [new Date(2017, 7), 2], [new Date(2017, 8), 5], [new Date(2017, 9), 6], [new Date(2017, 10), 10], [new Date(2017, 11), 23], [new Date(2017, 12), 17],
      [new Date(2018, 1), 0], [new Date(2018, 2), 1], [new Date(2018, 3), 2], [new Date(2018, 4), 4], [new Date(2018, 5), 7], [new Date(2018, 6), 3], [new Date(2018, 7), 2], [new Date(2018, 8), 5], [new Date(2018, 9), 6], [new Date(2018, 10), 10], [new Date(2018, 11), 23], [new Date(2018, 12), 17],
      [new Date(2019, 1), 0], [new Date(2019, 2), 1], [new Date(2019, 3), 2], [new Date(2019, 4), 4], [new Date(2019, 5), 7], [new Date(2019, 6), 3], [new Date(2019, 7), 2], [new Date(2019, 8), 5], [new Date(2019, 9), 6], [new Date(2019, 10), 10], [new Date(2019, 11), 23], [new Date(2019, 12), 17],
      [new Date(2020, 1), 0], [new Date(2020, 2), 1], [new Date(2020, 3), 2], [new Date(2020, 4), 4], [new Date(2020, 5), 7], [new Date(2020, 6), 3], [new Date(2020, 7), 2], [new Date(2020, 8), 5], [new Date(2020, 9), 6], [new Date(2020, 10), 10], [new Date(2020, 11), 23], [new Date(2020, 12), 17],
    ],
    columnNames: ['Date', 'Return on Investment(%)'],
    width: 1300,
    height: 700,
    options: {
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Return on Investment(%)'
      }
    }
  };
}