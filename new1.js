document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.feeder-input');
    // console.log(inputs);
    let totalAmp = 0;
    inputs.forEach(input => {
        const value = Number(input.value) || 0;
        const mw = value / 18;
        totalAmp = totalAmp + value;
    });
    console.log(totalAmp);
})