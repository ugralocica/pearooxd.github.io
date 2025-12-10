const subs = document.querySelector(".footer-subs");
const bar = document.querySelector(".bar-accent");
const subsbar = document.querySelector(".subs-bar");

(async () => {
    const api = await fetch("https://api.socialcounts.org/youtube-live-subscriber-count/UCsBw4YIB40Zpiw4yVIqxtbg");
    const data = await api.json();
    const subCount = data.counters.estimation.subscriberCount;
    const goal = (Math.floor(subCount/1000)+1)*1000;
    subs.innerText = `${subCount}/${goal}`;
    const barW = (subCount * 100) / goal + "%";
    bar.style.width = barW;
})();
