import {Component} from '@angular/core';
import {FileService} from './service/file.service';
import {ChartComponent} from './component/chart/chart.component';
import {DataService} from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeepRacerAnalytics';

  constructor(private fileService: FileService,
              private dataService: DataService,
              private chartComponent: ChartComponent) {
  }

  public onFileChange(e: Event): void {
    const uploader: HTMLInputElement = e.target as HTMLInputElement;
    const file = this.getFile(uploader);

    file.text().then(value => {
      this.fileService.updateFileContents(value);
      this.chartComponent.updateChart(this.dataService.getData('xy'));
    });

  }

  private getFile(uploader: HTMLInputElement): File {
    const files = uploader.files;
    return files[0];
  }
}