import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { salesWidgetData } from './sales-widget.data';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'elastic-sales-widget',
  templateUrl: './sales-widget.component.html',
  styleUrls: ['./sales-widget.component.scss']
})
export class SalesWidgetComponent implements OnInit, AfterViewInit {

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
        type: 'line',
        data: salesWidgetData,
        options: {
          responsive: true,
          scales: {
            x: {
              display: false,
              stacked: true,
              grid: {
                color: '#F7F7F7'
              }
            },
            y: {
              display: false,
              stacked: true,
              grid: {
                color: '#F7F7F7'
              }
            }
          },
          elements: {
            point: {
              radius: 0
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
