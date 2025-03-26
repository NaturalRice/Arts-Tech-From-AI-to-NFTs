// aiModule.js - AI-driven narrative and quest management

let quests = [];
let activeQuestId = null;

// Load quests from JSON file
async function loadQuests() {
    try {
        const response = await fetch('quests.json');
        quests = await response.json();
        console.log('Quests loaded successfully:', quests);
    } catch (error) {
        console.error('Failed to load quests:', error);
    }
}

// Start a quest by ID
function startQuest(questId) {
    const quest = quests.find(q => q.id === questId);
    if (quest) {
        activeQuestId = questId;
        console.log(`Quest started: ${quest.title}`);
        return quest.dialogs[0]; // Return first dialog
    }
    console.error(`Quest ${questId} not found!`);
    return null;
}

// Progress to next dialog in active quest
function nextDialog() {
    if (activeQuestId === null) return null;
    const quest = quests.find(q => q.id === activeQuestId);
    const currentDialogIndex = quest.dialogs.indexOf(quest.currentDialog || quest.dialogs[0]);
    
    if (currentDialogIndex < quest.dialogs.length - 1) {
        quest.currentDialog = quest.dialogs[currentDialogIndex + 1];
        return quest.currentDialog;
    } else {
        console.log(`Quest completed: ${quest.title}`);
        activeQuestId = null;
        return null; // No more dialogs
    }
}

// Initialize
loadQuests();

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    export { loadQuests, startQuest, nextDialog }; // 删除最后的module.exports判断
}