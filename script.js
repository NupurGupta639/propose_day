/* ===== Heart Shape Map (Exact from Video) ===== */
const heartPattern = [
  "0011100011100",
  "0111110111110",
  "1111111111111",
  "1111111111111",
  "0111111111110",
  "0011111111100",
  "0001111111000",
  "0000111110000",
  "0000011100000",
  "0000001000000"
];

const container = document.getElementById("heartContainer");
const loveText = document.getElementById("loveText");

let delay = 0;

/* ===== Build Hearts Sequentially ===== */
heartPattern.forEach(row => {
  row.split("").forEach(cell => {
    if (cell === "1") {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.animationDelay = `${delay}s`;
      container.appendChild(heart);
      delay += 0.03;
    } else {
      const spacer = document.createElement("div");
      container.appendChild(spacer);
    }
  });
});

/* ===== Reveal Text After Animation ===== */
setTimeout(() => {
  loveText.style.opacity = "1";
}, delay * 1000 + 400);
