import {Chart} from './chart';
import {Step} from '../step';
import {AnalysisResult} from '../fileanalysis/racer-data';
import {ChartColor} from 'chart.js';
import {Episode} from '../run';

export class RewardTrainingChart extends Chart {

    private mergeLength = 200;

    constructor() {
        super('', 'line');
    }

    getChart(steps: Step[], racerData: AnalysisResult): Chart.ChartConfiguration {
        const runs = racerData.allEpisodes;
        this.mergeLength = this.getLengthByEpisodes(racerData.allEpisodes);
        const data = this.getData(runs.map(value => value.reward), 'rgb(10,226,2)');

        return {
            type: this.chartType,
            data: {
                labels: (data.data as []).map((value, index) => index),
                datasets: [
                    data
                ],
            },
            options: this.getChartOptions()
        };
    }

    protected getData(setsData: number[], color: ChartColor): Chart.ChartDataSets {
        const dataSets = super.getDataSets(this.mergeData(setsData));
        dataSets.borderColor = color;

        return dataSets;
    }

    protected getChartOptions(): Chart.ChartOptions {
        const chartOptions = super.getChartOptions();

        chartOptions.elements.point = {
            radius: 3.0
        };

        return chartOptions;
    }

    private getLengthByEpisodes(allEpisodes: Episode[]): number {
        return Math.min(Math.max(allEpisodes.length / 7, 1), 200);
    }

    private mergeData(setsData: number[]): number[] {
        const mergedData = [];

        for (let i = 0; i < setsData.length; i += this.mergeLength) {

            let mergeNum = 0;

            for (let j = 0; j < this.mergeLength; j++) {
                mergeNum += setsData[i + j];

                if (i + j + 1 >= setsData.length) {
                    mergedData.push(mergeNum / j);
                    return mergedData;
                }
            }

            mergedData.push(mergeNum / this.mergeLength);
        }

        return mergedData;
    }

}
