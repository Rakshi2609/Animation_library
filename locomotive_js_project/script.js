// Initialize Lenis
const fkkk = new Lenis({
    duration:1,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  fkkk.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
console.log('Lenis initialized and scroll animation started.');

// Randomly position divs - each div appears exactly twice per row
function randomizeGrid() {
    const totalRows = 20;
    const totalCols = 8;
    
    // Create array of all 20 divs, each appearing twice (40 total)
    const allDivs = [];
    for (let i = 0; i < 20; i++) {
        allDivs.push(i, i); // Each div index appears twice
    }
    
    // Shuffle the array completely
    for (let i = allDivs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDivs[i], allDivs[j]] = [allDivs[j], allDivs[i]];
    }
    
    // Clear existing items
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';
    
    let divCounter = 0;
    
    // Place divs in grid - 2 per row in random columns
    for (let row = 1; row <= totalRows; row++) {
        // Get random number of items for this row (1-4 for more variation)
        const itemsInRow = Math.floor(Math.random() * 3) + 1; // 1 to 3 items per row
        
        // Get all available columns
        const availableCols = Array.from({length: totalCols}, (_, i) => i + 1);
        
        // Shuffle columns completely
        for (let i = availableCols.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableCols[i], availableCols[j]] = [availableCols[j], availableCols[i]];
        }
        
        // Pick random columns for this row
        for (let i = 0; i < itemsInRow && divCounter < allDivs.length; i++) {
            const col = availableCols[i];
            const divIndex = allDivs[divCounter];
            
            const newDiv = document.createElement('div');
            newDiv.className = 'elem grid-item';
            newDiv.style.setProperty('--r', row);
            newDiv.style.setProperty('--c', col);
            newDiv.innerHTML = `<img src="https://picsum.photos/200/200?random=${divIndex + 1}" alt="">`;
            container.appendChild(newDiv);
            
            divCounter++;
        }
    }
}

randomizeGrid();

document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline()
    let xTram = gsap.utils.random(-100, 100);
    tl 
    .set(image, {
        transformOrigin: `${xTram < 0 ? 0 : 100}%`,
    }, "start")
    .to(image,{
        filter: "blur(200px)",
        ease:"none", 
        scrollTrigger:{
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    }, "start")
    .from(image,{
        filter: "blur(200px)",
        ease:"none", 
        scrollTrigger:{
            trigger: image,
            start: "bottom bottom",
            end: "top bottom",
            scrub: true,
        }
    }, "end")
    .to(elem,{
        xPercent: -10,
        ease:"none",
        scrollTrigger:{
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    })
});