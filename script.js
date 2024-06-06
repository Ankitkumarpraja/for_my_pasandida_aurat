let highestZ = 1;
let currentPaperIndex = 0;
const positions = [
  { x: 50, y: 100 },
  { x: 100, y: 100 },
  { x: 150, y: 150 },
  { x: 20, y: 20 },
  { x: 25, y: 25 },
  { x: 30, y: 30 },
  { x: 35, y: 35 }
];

function moveNextPaper() {
  const papers = Array.from(document.querySelectorAll('.paper'));
  if (currentPaperIndex < papers.length) {
    const paper = papers[currentPaperIndex];
    const pos = positions[currentPaperIndex];
    paper.style.transform = `translateX(${pos.x}px) translateY(${pos.y}px) rotateZ(${Math.random() * 30 - 15}deg)`;
    paper.style.zIndex = highestZ;
    highestZ += 1;
    currentPaperIndex += 1;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const randomizeButton = document.getElementById('randomizeButton');
  randomizeButton.addEventListener('click', moveNextPaper);
});
