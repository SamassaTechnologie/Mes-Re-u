function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    const navButtons = document.querySelectorAll('.nav-tab');
    navButtons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    document.querySelector(`.nav-tab[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

function selectDocument(type) {
    const cards = document.querySelectorAll('.doc-card');
    cards.forEach(card => card.classList.remove('selected'));

    const selectedCard = Array.from(cards).find(card => card.onclick.toString().includes(type));
    if (selectedCard) selectedCard.classList.add('selected');

    document.getElementById('form-container').innerHTML = `<p>Formulaire pour ${type} en cours de chargement...</p>`;
    document.getElementById('preview-container').classList.add('hidden');
}

function editDocument() {
    document.getElementById('preview-container').classList.add('hidden');
}

function downloadDocument() {
    const content = document.getElementById('preview-content').innerText;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
    link.click();
}

function saveSettings() {
    alert('Réglages sauvegardés avec succès !');
}

function exportData() {
    alert('Données exportées !');
}

function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = `<p style="text-align: center; color: #666; margin-top: 40px;">Aucun document généré pour le moment</p>`;
}
