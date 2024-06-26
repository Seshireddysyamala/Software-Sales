document.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesChartCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Windows 11',
                    data: [5000, 6000, 7000, 8000, 9000, 10000],
                    backgroundColor: '#66FCF1',
                    borderColor: '#66FCF1',
                    borderWidth: 2
                },
                {
                    label: 'Zoom',
                    data: [7000, 8000, 9000, 10000, 11000, 12000],
                    backgroundColor: '#45A29E',
                    borderColor: '#45A29E',
                    borderWidth: 2
                },
                {
                    label: 'GTA 6',
                    data: [6000, 7000, 8000, 9000, 10000, 11000],
                    backgroundColor: '#C5C6C7',
                    borderColor: '#C5C6C7',
                    borderWidth: 2
                },
                {
                    label: 'Microsoft Office',
                    data: [8000, 9000, 10000, 11000, 12000, 13000],
                    backgroundColor: '#0B0C10',
                    borderColor: '#0B0C10',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#C5C6C7'
                    },
                    ticks: {
                        color: '#C5C6C7'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#C5C6C7'
                    },
                    ticks: {
                        color: '#C5C6C7'
                    }
                }
            }
        }
    });

    // Pie Chart
    const salesPieChartCtx = document.getElementById('salesPieChart').getContext('2d');
    const salesPieChart = new Chart(salesPieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Windows 11', 'Zoom', 'GTA 6', 'Microsoft Office'],
            datasets: [{
                data: [45000, 57000, 51000, 63000],
                backgroundColor: ['#66FCF1', '#45A29E', '#C5C6C7', '#0B0C10'],
                borderColor: '#1F2833',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart
    const salesLineChartCtx = document.getElementById('salesLineChart').getContext('2d');
    const salesLineChart = new Chart(salesLineChartCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Windows 11',
                    data: [5000, 6000, 7000, 8000, 9000, 10000],
                    borderColor: '#66FCF1',
                    backgroundColor: 'rgba(102, 252, 241, 0.2)',
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Zoom',
                    data: [7000, 8000, 9000, 10000, 11000, 12000],
                    borderColor: '#45A29E',
                    backgroundColor: 'rgba(69, 162, 158, 0.2)',
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'GTA 6',
                    data: [6000, 7000, 8000, 9000, 10000, 11000],
                    borderColor: '#C5C6C7',
                    backgroundColor: 'rgba(197, 198, 199, 0.2)',
                    fill: true,
                    borderWidth: 2
                },
                {
                    label: 'Microsoft Office',
                    data: [8000, 9000, 10000, 11000, 12000, 13000],
                    borderColor: '#0B0C10',
                    backgroundColor: 'rgba(11, 12, 16, 0.2)',
                    fill: true,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#C5C6C7'
                    },
                    ticks: {
                        color: '#C5C6C7'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#C5C6C7'
                    },
                    ticks: {
                        color: '#C5C6C7'
                    }
                }
            }
        }
    });
});
