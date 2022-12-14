import {Chart} from './chart';
import {Step} from '../step';
import {AnalysisResult} from '../fileanalysis/racer-data';

export abstract class LineChart extends Chart {

    constructor(label: string) {
        super(label, 'line');
    }

    getChart(steps: Step[], racerData: AnalysisResult): Chart.ChartConfiguration {
        const y = this.mapY(steps);
        const x = this.mapX(steps);

        return {
            type: this.chartType,
            data: {
                labels: x,
                datasets: [this.getDataSets(y)],
            },
            options: this.getChartOptions()
        };
    }

    protected abstract mapX(steps: Step[]): number[];

    protected abstract mapY(steps: Step[]): number[];

    protected getChartOptions(): Chart.ChartOptions {
        return super.getChartOptions();
    }
}
