    // --- PILTAST KONTROL AF FISK ---
    // find fisken som spilleren styrer
    const controlledFish = document.getElementById('player-fish');
    // score til plankton samlet
    let score = 0;
    // reference til HTML-element der viser score
    const scoreEl = document.getElementById('score');
    // flag der markerer om spillet er slut
    let gameIsOver = false;
    // håndtag til plankton-spawner interval
    let spawnHandle = null;
