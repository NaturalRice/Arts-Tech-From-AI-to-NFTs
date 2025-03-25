// script.js (Updated for NFT Simulation)

// Initialize the game canvas
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player properties
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    color: 'blue',
    speed: 5,
    nfts: JSON.parse(localStorage.getItem('playerNFTs')) || [] // Load NFTs from localStorage
};

// NFT Data Structure
const nftDatabase = [
    { id: 'nft_artifact', name: 'Ancient Artifact', type: 'reward' },
    { id: 'nft_coin', name: 'Rare Coin', type: 'currency' }
];

// Mint NFT (e.g., quest reward)
function mintNFT(nftId) {
    const nft = nftDatabase.find(item => item.id === nftId);
    if (nft) {
        player.nfts.push({ ...nft, owner: 'player' });
        localStorage.setItem('playerNFTs', JSON.stringify(player.nfts));
        console.log(`NFT Minted: ${nft.name}`);
    }
}

// Trade NFT (simulated)
function tradeNFT(nftId, recipient) {
    const nftIndex = player.nfts.findIndex(item => item.id === nftId);
    if (nftIndex !== -1) {
        player.nfts[nftIndex].owner = recipient;
        localStorage.setItem('playerNFTs', JSON.stringify(player.nfts));
        console.log(`NFT Traded to ${recipient}`);
    }
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
}

// Handle keyboard input
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp': player.y -= player.speed; break;
        case 'ArrowDown': player.y += player.speed; break;
        case 'ArrowLeft': player.x -= player.speed; break;
        case 'ArrowRight': player.x += player.speed; break;
    }
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();

// UI Event Listeners
document.getElementById('quest-log-btn').addEventListener('click', () => {
    mintNFT('nft_artifact'); // Test: Mint NFT on quest log open
    alert(`Quest Log! Check console for NFT updates.`);
});

document.getElementById('nft-btn').addEventListener('click', () => {
    tradeNFT('nft_artifact', 'marketplace'); // Test: Trade NFT
    alert(`NFT Inventory! Check console for updates.`);
});