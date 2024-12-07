function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function swapTiles3x3(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}
  
function shuffle() {
    //Use nested loops to access each cell of the 4x4 grid
    for (var row=1;row<=4;row++) { //For each row of the 4x4 grid
        for (var column=1;column<=4;column++) { //For each column in this row
            var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 4
            var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 4
            swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
        } 
    } 
}

function shuffle3x3() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
        for (var column=1;column<=3;column++) { //For each column in this row
            var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
            var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
            swapTiles3x3("cell3_"+row+column,"cell3_"+row2+column2); //Swap the look & feel of both cells
        } 
    } 
}
  
function clickTile(row,column) {
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile16") { 
        //Checking if white tile on the right
        if (column<4) {
            if ( document.getElementById("cell"+row+(column+1)).className=="tile16") {
                swapTiles("cell"+row+column,"cell"+row+(column+1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column>1) {
            if ( document.getElementById("cell"+row+(column-1)).className=="tile16") {
                swapTiles("cell"+row+column,"cell"+row+(column-1));
                return;
            }
        }
        //Checking if white tile is above
        if (row>1) {
            if ( document.getElementById("cell"+(row-1)+column).className=="tile16") {
                swapTiles("cell"+row+column,"cell"+(row-1)+column);
                return;
            }
        }
        //Checking if white tile is below
        if (row<4) {
            if ( document.getElementById("cell"+(row+1)+column).className=="tile16") {
                swapTiles("cell"+row+column,"cell"+(row+1)+column);
                return;
            }
        } 
    }
}

function clickTile3x3(row,column) {
    var cell = document.getElementById("cell3_"+row+column);
    var tile = cell.className;
    if (tile!="tile3_9") { 
        //Checking if white tile on the right
        if (column<3) {
            if ( document.getElementById("cell3_"+row+(column+1)).className=="tile3_9") {
                swapTiles3x3("cell3_"+row+column,"cell3_"+row+(column+1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column>1) {
            if ( document.getElementById("cell3_"+row+(column-1)).className=="tile3_9") {
                swapTiles3x3("cell3_"+row+column,"cell3_"+row+(column-1));
                return;
            }
        }
        //Checking if white tile is above
        if (row>1) {
            if ( document.getElementById("cell3_"+(row-1)+column).className=="tile3_9") {
                swapTiles3x3("cell3_"+row+column,"cell3_"+(row-1)+column);
                return;
            }
        }
        //Checking if white tile is below
        if (row<3) {
            if ( document.getElementById("cell3_"+(row+1)+column).className=="tile3_9") {
                swapTiles3x3("cell3_"+row+column,"cell3_"+(row+1)+column);
                return;
            }
        } 
    }
}

// Carousel Functions
function nextPuzzle() {
    const puzzles = document.querySelectorAll('.puzzle-wrapper');
    const activePuzzle = document.querySelector('.puzzle-wrapper.active');
    
    // Önce tüm sınıfları temizle
    puzzles.forEach(puzzle => {
        puzzle.classList.remove('active', 'previous');
    });
    
    // Aktif puzzle'ı previous yap
    activePuzzle.classList.add('previous');
    
    // Sonraki puzzle'ı aktif yap
    if (activePuzzle.nextElementSibling && activePuzzle.nextElementSibling.classList.contains('puzzle-wrapper')) {
        activePuzzle.nextElementSibling.classList.add('active');
    } else {
        puzzles[0].classList.add('active');
    }
}

function previousPuzzle() {
    const puzzles = document.querySelectorAll('.puzzle-wrapper');
    const activePuzzle = document.querySelector('.puzzle-wrapper.active');
    
    // Önce tüm sınıfları temizle
    puzzles.forEach(puzzle => {
        puzzle.classList.remove('active', 'previous');
    });
    
    // Önceki puzzle'ı aktif yap
    if (activePuzzle.previousElementSibling && activePuzzle.previousElementSibling.classList.contains('puzzle-wrapper')) {
        activePuzzle.previousElementSibling.classList.add('active');
    } else {
        puzzles[puzzles.length - 1].classList.add('active');
    }
    
    // Aktif olmayan puzzle'ları previous yap
    puzzles.forEach(puzzle => {
        if (!puzzle.classList.contains('active')) {
            puzzle.classList.add('previous');
        }
    });
}

// Klavye tuşları ile geçiş
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextPuzzle();
    } else if (e.key === 'ArrowLeft') {
        previousPuzzle();
    }
});

// Anı Defteri için JavaScript
let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
    // Önce tüm sayfaları gizle
    document.querySelectorAll('.diary-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Seçilen sayfayı göster
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Sayfa yüklendiğinde ilk sayfayı göster
document.addEventListener('DOMContentLoaded', function() {
    showPage(1);
});

// Sayaç için JavaScript
const startDate = new Date('2022-10-08').getTime(); // 8 Ekim 2022

function updateCounter() {
    const now = new Date().getTime();
    const difference = now - startDate;
    
    // Zaman hesaplamaları
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Elementleri güncelle
    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        const currentValue = element.textContent;
        element.textContent = value;
        
        // Değer değiştiyse animasyon ekle
        if (currentValue !== value.toString()) {
            element.classList.remove('update');
            void element.offsetWidth; // Animasyonu yeniden başlatmak için
            element.classList.add('update');
        }
    }
}

// Her saniye sayacı güncelle
setInterval(updateCounter, 1000);

// Sayfa yüklendiğinde sayacı başlat
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
});