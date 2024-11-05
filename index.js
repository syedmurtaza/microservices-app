// Using fetch API (available in modern browsers and Node.js)

// Mean calculation
async function getMean() {
    const response = await fetch('http://localhost:3000/api/mean', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify([1, 2, 3, 4, 5])
    });
    const result = await response.json();
    console.log('Mean:', result);
}

// Moving average calculation
async function getMovingAverage() {
    const response = await fetch('http://localhost:3000/api/moving-average', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            series: [1, 2, 3, 4, 5],
            windowSize: 3
        })
    });
    const result = await response.json();
    console.log('Moving Average:', result);
}

// Call the functions
getMean();
getMovingAverage();