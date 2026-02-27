// কনফিগারেশন অবজেক্ট - সহজে পরিবর্তন করা যাবে
const CONFIG = {
    divisor: 18,
    bottailFeeders: ['t3', 'h3', 'brb', 'mrs'],
    feeders: [
        { id: 'brb', name: 'BRB' },
        { id: 'mrs', name: 'MRS' },
        { id: 'mozompur', name: 'Mozompur' },
        { id: 'housing', name: 'Housing' },
        { id: 'rajbari', name: 'Rajbari' },
        { id: 'gis', name: 'Campus (GIS)' },
        { id: 'koburhat', name: 'Koburhat' },
        { id: 'h3', name: 'H-3' },
        { id: 't3', name: 'T-3' }
    ]
};

// ক্যালকুলেশন ফাংশন আলাদা করে নিলাম
function calculateLoads() {
    const feederValues = {};
    let totalSum = 0;

    // সব ফিডারের মান সংগ্রহ করি
    CONFIG.feeders.forEach(feeder => {
        const inputElement = document.getElementById(`${feeder.id}-amps`);
        const outputElement = document.getElementById(`${feeder.id}-out`);

        const value = Number(inputElement.value) || 0;
        feederValues[feeder.id] = value;
        totalSum += value;

        // আউটপুট দেখাই
        outputElement.innerText = (value / CONFIG.divisor).toFixed(1);
    });

    return { feederValues, totalSum };
}

// Bottail ক্যালকুলেশন
function calculateBottail(feederValues) {
    let bottailSum = 0;
    CONFIG.bottailFeeders.forEach(id => {
        bottailSum += feederValues[id] || 0;
    });
    return bottailSum;
}

// Main ইভেন্ট লিসেনার
document.getElementById('btn-calculate').addEventListener('click', function () {
    // ১. সব ফিডারের ক্যালকুলেশন করি
    const { feederValues, totalSum } = calculateLoads();

    // ২. Bottail বের করি
    const bottailSum = calculateBottail(feederValues);

    // ৩. ডিসপ্লে আপডেট করি
    document.getElementById('bottail-mw').innerText = (bottailSum / CONFIG.divisor).toFixed(1);
    document.getElementById('total-mw').innerText = (totalSum / CONFIG.divisor).toFixed(1);
});

// কপি বাটন
document.getElementById('btn-copy')?.addEventListener('click', function () {
    const totalValue = document.getElementById('total-mw').innerText;
    const totalValueCopy = Math.round(totalValue);
    navigator.clipboard.writeText(` Bottail: ${totalValueCopy} MW`).catch(() => {
        alert('Copy failed!');
    });
});