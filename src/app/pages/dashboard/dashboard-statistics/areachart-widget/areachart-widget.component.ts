import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { areachartWidgetData } from './areachart-widget.data';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, delay } from 'rxjs/operators';

@Component({
  selector: 'elastic-areachart-widget',
  templateUrl: './areachart-widget.component.html',
  styleUrls: ['./areachart-widget.component.scss']
})
export class AreachartWidgetComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('canvas', {static: true}) canvas: ElementRef;

  subscriptions: Subscription[] = [];

  private _chart?: Chart;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      this._chart = new Chart(ctx, {
        type: 'line',
        data: areachartWidgetData,
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
              grid: {
                color: '#F7F7F7'
              }
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
            },
          },
          layout: {
            autoPadding: false
          }
        }
      });

      this.subscriptions.push(fromEvent(window, 'resize').pipe(debounceTime(100), delay(100)).subscribe(() => this._chart.resize()));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
