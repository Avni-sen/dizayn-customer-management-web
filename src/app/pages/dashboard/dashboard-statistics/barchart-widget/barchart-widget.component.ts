import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { barchartWidgetData } from './barchart-widget.data';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'elastic-barchart-widget',
  templateUrl: './barchart-widget.component.html',
  styleUrls: ['./barchart-widget.component.scss']
})
export class BarchartWidgetComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvas', {static: true}) canvas: ElementRef;

  private _chart?: Chart;
  private readonly subscriptions: Subscription[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      this._chart = new Chart(ctx, {
        type: 'bar',
        data: barchartWidgetData,
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
              grid: {
                color: '#F7F7F7'
              },
            },
            y: {
              stacked: true,
              grid: {
                color: '#F7F7F7'
              },
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          }
        }
      });

      this.subscriptions.push(fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this._chart.resize()));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
