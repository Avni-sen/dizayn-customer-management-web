export const salesWidgetData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Revenue',
    backgroundColor: '#7cb342',
    borderColor: '#7cb342',
    data: [6, 4, 8, 3, 10, 8, 4],
    fill: 'start',
    tension: 0.4
  }, {
    label: 'Expenses',
    backgroundColor: '#EEEEEE',
    borderColor: '#EEEEEE',
    data: [2, 4, 4, 8, 2, 3, 5],
    fill: 'start',
    tension: 0.4
  }]
};
