// nftModule.js - Modular NFT functionality using localStorage

// Function to create an NFT and store it in localStorage
function createNFT(tokenId, metadata, owner) {
    const nft = {
        tokenId: tokenId,
        metadata: metadata,
        owner: owner
    };
    localStorage.setItem(`nft_${tokenId}`, JSON.stringify(nft));
    console.log(`NFT created with ID: ${tokenId}`);
}

// Function to retrieve an NFT by tokenId
function getNFT(tokenId) {
    const nft = localStorage.getItem(`nft_${tokenId}`);
    return nft ? JSON.parse(nft) : null;
}

// Function to transfer NFT ownership
function transferNFT(tokenId, newOwner) {
    const nft = getNFT(tokenId);
    if (nft) {
        nft.owner = newOwner;
        localStorage.setItem(`nft_${tokenId}`, JSON.stringify(nft));
        console.log(`NFT ${tokenId} transferred to ${newOwner}`);
    } else {
        console.log(`NFT ${tokenId} not found`);
    }
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createNFT, getNFT, transferNFT };
}