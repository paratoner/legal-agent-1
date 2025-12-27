const appState = {
    requirements: [], // { id, text, status, response, timestamp }
    isAdminVisible: false,
    currentLanguage: localStorage.getItem('language') || 'en'
};

// Translation strings
const translations = {
    en: {
        adminAccess: 'Admin Access',
        hideAdmin: 'Hide Admin',
        submitRequirement: 'Submit Requirement',
        description: 'Describe your needs and our team will review it.',
        placeholder: 'e.g., I need a legal contract for a freelance web developer...',
        submitRequest: 'Submit Request',
        adminDashboard: 'Admin Dashboard',
        reviewPending: 'Review pending requirements.',
        yourResults: 'Your Results',
        approvedRequirements: 'Approved and processed requirements.',
        noResults: 'No approved results yet.',
        noPending: 'No pending requirements.',
        requirementSubmitted: 'Requirement submitted successfully!',
        provideResponse: 'Please provide a response before approving.',
        requirementApproved: 'Requirement {id} approved.',
        requirementRejected: 'Requirement {id} rejected.',
        pending: 'Pending',
        approved: 'Approved',
        request: 'Request',
        response: 'Response',
        approveAndSend: 'Approve & Send',
        reject: 'Reject',
        responseHint: 'Type your response here...',
    },
    es: {
        adminAccess: 'Acceso Admin',
        hideAdmin: 'Ocultar Admin',
        submitRequirement: 'Enviar Requisito',
        description: 'Describe tus necesidades y nuestro equipo las revisará.',
        placeholder: 'p.ej., Necesito un contrato legal para un desarrollador web freelance...',
        submitRequest: 'Enviar Solicitud',
        adminDashboard: 'Panel de Admin',
        reviewPending: 'Revisa los requisitos pendientes.',
        yourResults: 'Tus Resultados',
        approvedRequirements: 'Requisitos aprobados y procesados.',
        noResults: 'Sin resultados aún.',
        noPending: 'Sin requisitos pendientes.',
        requirementSubmitted: '¡Requisito enviado exitosamente!',
        provideResponse: 'Por favor proporciona una respuesta antes de aprobar.',
        requirementApproved: 'Requisito {id} aprobado.',
        requirementRejected: 'Requisito {id} rechazado.',
        pending: 'Pendiente',
        approved: 'Aprobado',
        request: 'Solicitud',
        response: 'Respuesta',
        approveAndSend: 'Aprobar & Enviar',
        reject: 'Rechazar',
        responseHint: 'Escribe tu respuesta aquí...',
    },
    fr: {
        adminAccess: 'Accès Admin',
        hideAdmin: 'Masquer Admin',
        submitRequirement: 'Soumettre une Exigence',
        description: 'Décrivez vos besoins et notre équipe les examinera.',
        placeholder: 'p.ex., J\'ai besoin d\'un contrat juridique pour un développeur web indépendant...',
        submitRequest: 'Soumettre la Demande',
        adminDashboard: 'Tableau de Bord Admin',
        reviewPending: 'Examinez les exigences en attente.',
        yourResults: 'Vos Résultats',
        approvedRequirements: 'Exigences approuvées et traitées.',
        noResults: 'Aucun résultat pour le moment.',
        noPending: 'Aucune exigence en attente.',
        requirementSubmitted: 'Exigence soumise avec succès!',
        provideResponse: 'Veuillez fournir une réponse avant d\'approuver.',
        requirementApproved: 'Exigence {id} approuvée.',
        requirementRejected: 'Exigence {id} rejetée.',
        pending: 'En attente',
        approved: 'Approuvé',
        request: 'Demande',
        response: 'Réponse',
        approveAndSend: 'Approuver & Envoyer',
        reject: 'Rejeter',
        responseHint: 'Tapez votre réponse ici...',
    },
    de: {
        adminAccess: 'Admin-Zugriff',
        hideAdmin: 'Admin Ausblenden',
        submitRequirement: 'Anforderung Einreichen',
        description: 'Beschreiben Sie Ihre Anforderungen und unser Team wird sie überprüfen.',
        placeholder: 'z.B. Ich benötige einen Rechtsvertrag für einen freiberuflichen Webentwickler...',
        submitRequest: 'Anfrage Einreichen',
        adminDashboard: 'Admin-Dashboard',
        reviewPending: 'Überprüfen Sie ausstehende Anforderungen.',
        yourResults: 'Ihre Ergebnisse',
        approvedRequirements: 'Genehmigte und verarbeitete Anforderungen.',
        noResults: 'Noch keine Ergebnisse.',
        noPending: 'Keine ausstehenden Anforderungen.',
        requirementSubmitted: 'Anforderung erfolgreich eingereicht!',
        provideResponse: 'Bitte geben Sie eine Antwort ein, bevor Sie genehmigen.',
        requirementApproved: 'Anforderung {id} genehmigt.',
        requirementRejected: 'Anforderung {id} abgelehnt.',
        pending: 'Ausstehend',
        approved: 'Genehmigt',
        request: 'Anfrage',
        response: 'Antwort',
        approveAndSend: 'Genehmigen & Senden',
        reject: 'Ablehnen',
        responseHint: 'Geben Sie Ihre Antwort hier ein...',
    },
    it: {
        adminAccess: 'Accesso Admin',
        hideAdmin: 'Nascondi Admin',
        submitRequirement: 'Invia Requisito',
        description: 'Descrivi le tue esigenze e il nostro team le esaminerà.',
        placeholder: 'es. Ho bisogno di un contratto legale per uno sviluppatore web freelance...',
        submitRequest: 'Invia Richiesta',
        adminDashboard: 'Pannello Admin',
        reviewPending: 'Esamina i requisiti in sospeso.',
        yourResults: 'I Tuoi Risultati',
        approvedRequirements: 'Requisiti approvati ed elaborati.',
        noResults: 'Nessun risultato ancora.',
        noPending: 'Nessun requisito in sospeso.',
        requirementSubmitted: 'Requisito inviato con successo!',
        provideResponse: 'Fornisci una risposta prima di approvare.',
        requirementApproved: 'Requisito {id} approvato.',
        requirementRejected: 'Requisito {id} rifiutato.',
        pending: 'In sospeso',
        approved: 'Approvato',
        request: 'Richiesta',
        response: 'Risposta',
        approveAndSend: 'Approva & Invia',
        reject: 'Rifiuta',
        responseHint: 'Digita la tua risposta qui...',
    },
    pt: {
        adminAccess: 'Acesso Admin',
        hideAdmin: 'Ocultar Admin',
        submitRequirement: 'Enviar Requisito',
        description: 'Descreva suas necessidades e nossa equipe as analisará.',
        placeholder: 'p.ex. Preciso de um contrato legal para um desenvolvedor web freelancer...',
        submitRequest: 'Enviar Solicitação',
        adminDashboard: 'Painel Admin',
        reviewPending: 'Revise os requisitos pendentes.',
        yourResults: 'Seus Resultados',
        approvedRequirements: 'Requisitos aprovados e processados.',
        noResults: 'Sem resultados ainda.',
        noPending: 'Nenhum requisito pendente.',
        requirementSubmitted: 'Requisito enviado com sucesso!',
        provideResponse: 'Forneça uma resposta antes de aprovar.',
        requirementApproved: 'Requisito {id} aprovado.',
        requirementRejected: 'Requisito {id} rejeitado.',
        pending: 'Pendente',
        approved: 'Aprovado',
        request: 'Solicitação',
        response: 'Resposta',
        approveAndSend: 'Aprovar & Enviar',
        reject: 'Rejeitar',
        responseHint: 'Digite sua resposta aqui...',
    },
    ja: {
        adminAccess: '管理者アクセス',
        hideAdmin: '管理者を隠す',
        submitRequirement: '要件を送信',
        description: 'あなたのニーズを説明し、私たちのチームがレビューします。',
        placeholder: '例：フリーランスのウェブ開発者向けの法的契約が必要です...',
        submitRequest: 'リクエストを送信',
        adminDashboard: '管理者ダッシュボード',
        reviewPending: '保留中の要件を確認します。',
        yourResults: 'あなたの結果',
        approvedRequirements: '承認および処理された要件。',
        noResults: 'まだ結果がありません。',
        noPending: '保留中の要件がありません。',
        requirementSubmitted: '要件が正常に送信されました!',
        provideResponse: '承認する前に応答を提供してください。',
        requirementApproved: '要件{id}が承認されました。',
        requirementRejected: '要件{id}が却下されました。',
        pending: '保留中',
        approved: '承認済み',
        request: 'リクエスト',
        response: '応答',
        approveAndSend: '承認 & 送信',
        reject: '却下',
        responseHint: 'ここに応答を入力してください...',
    },
    zh: {
        adminAccess: '管理员访问',
        hideAdmin: '隐藏管理员',
        submitRequirement: '提交需求',
        description: '描述您的需求，我们的团队将进行审查。',
        placeholder: '例如，我需要自由网络开发者的法律合同...',
        submitRequest: '提交请求',
        adminDashboard: '管理员仪表板',
        reviewPending: '审查待处理的需求。',
        yourResults: '您的结果',
        approvedRequirements: '已批准和处理的需求。',
        noResults: '暂无结果。',
        noPending: '没有待处理的需求。',
        requirementSubmitted: '需求提交成功!',
        provideResponse: '批准前请提供回复。',
        requirementApproved: '需求{id}已批准。',
        requirementRejected: '需求{id}已拒绝。',
        pending: '待处理',
        approved: '已批准',
        request: '请求',
        response: '回复',
        approveAndSend: '批准 & 发送',
        reject: '拒绝',
        responseHint: '在此输入您的回复...',
    },
};

function t(key, replacements = {}) {
    let text = translations[appState.currentLanguage]?.[key] || translations['en']?.[key] || key;
    Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
    });
    return text;
}

// DOM Elements
const userSection = document.getElementById('user-section');
const adminSection = document.getElementById('admin-section');
const resultSection = document.getElementById('result-section');
const adminToggleBtn = document.getElementById('admin-toggle');
const requirementForm = document.getElementById('requirement-form');
const requirementInput = document.getElementById('requirement-input');
const adminList = document.getElementById('admin-list');
const resultList = document.getElementById('result-list');
const languageSelector = document.getElementById('language-selector');

// --- Event Listeners ---

// Language selector
languageSelector.addEventListener('change', (e) => {
    appState.currentLanguage = e.target.value;
    localStorage.setItem('language', appState.currentLanguage);
    updatePageLanguage();
});

// Set current language on selector
languageSelector.value = appState.currentLanguage;

// Toggle Admin View
adminToggleBtn.addEventListener('click', () => {
    appState.isAdminVisible = !appState.isAdminVisible;
    if (appState.isAdminVisible) {
        adminSection.classList.remove('hidden');
        adminToggleBtn.textContent = t('hideAdmin');
        renderAdminList();
    } else {
        adminSection.classList.add('hidden');
        adminToggleBtn.textContent = t('adminAccess');
    }
});

// Submit Requirement
requirementForm.addEventListener('click', (e) => {
    // Prevent default form submission if it was a form submit event, 
    // but here we are listening to click on the form usually triggers on button click if type=submit
    // Better to listen to 'submit' on form
});

requirementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = requirementInput.value.trim();
    if (!text) return;

    const newReq = {
        id: generateId(),
        text: text,
        status: 'pending',
        response: null,
        timestamp: new Date()
    };

    appState.requirements.push(newReq);
    requirementInput.value = '';

    showToast(t('requirementSubmitted'));

    // Refresh views
    renderAdminList();
    // In a real app, user might see a "pending" list too, but strictly per requirements:
    // "Final Display: A section that shows the final answer to the user only after approval."
    // So we won't show pending items in the result list based on the prompt interpretation,
    // but we could if we wanted to be friendlier. Sticking to prompt: "only after approval".
    renderResultList();
});

// --- Logic functions ---

function generateId() {
    return 'REQ-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
}

function approveRequirement(id) {
    const inputId = `resp-${id}`;
    const responseText = document.getElementById(inputId).value.trim();

    if (!responseText) {
        alert(t('provideResponse'));
        return;
    }

    const req = appState.requirements.find(r => r.id === id);
    if (req) {
        req.status = 'approved';
        req.response = responseText;
        renderAdminList();
        renderResultList();
        showToast(t('requirementApproved', { id }));
    }
}

function rejectRequirement(id) {
    const req = appState.requirements.find(r => r.id === id);
    if (req) {
        req.status = 'rejected';
        renderAdminList();
        renderResultList();
        showToast(t('requirementRejected', { id }));
    }
}

// --- Rendering ---

function renderAdminList() {
    adminList.innerHTML = '';
    const pending = appState.requirements.filter(r => r.status === 'pending');

    if (pending.length === 0) {
        adminList.innerHTML = `<p class="empty-state">${t('noPending')}</p>`;
        return;
    }

    pending.forEach(req => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <div class="item-header">
                <span class="item-id">${req.id}</span>
                <span class="status-badge status-pending">${t('pending')}</span>
            </div>
            <div class="item-body">${escapeHtml(req.text)}</div>
            <div class="admin-actions-area">
                <textarea id="resp-${req.id}" class="admin-response-input" placeholder="${t('responseHint')}"></textarea>
                <div class="item-actions">
                    <button onclick="approveRequirement('${req.id}')" class="action-btn approve-btn">${t('approveAndSend')}</button>
                    <button onclick="rejectRequirement('${req.id}')" class="action-btn reject-btn">${t('reject')}</button>
                </div>
            </div>
        `;
        adminList.appendChild(item);
    });
}

function renderResultList() {
    resultList.innerHTML = '';
    const approved = appState.requirements.filter(r => r.status === 'approved');

    if (approved.length === 0) {
        resultList.innerHTML = `<p class="empty-state">${t('noResults')}</p>`;
        return;
    }

    approved.forEach(req => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.innerHTML = `
            <div class="item-header">
                <span class="item-id">${req.id}</span>
                <span class="status-badge status-approved">${t('approved')}</span>
            </div>
            <div class="item-body">
                <strong>${t('request')}:</strong> ${escapeHtml(req.text)}
            </div>
            <div class="item-response">
                <strong>${t('response')}:</strong><br>
                ${escapeHtml(req.response)}
            </div>
        `;
        resultList.appendChild(item);
    });
}

// Utility
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--accent-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease-out;
        z-index: 1000;
        font-weight: 500;
    `;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Update page language dynamically
function updatePageLanguage() {
    // Update button text
    adminToggleBtn.textContent = appState.isAdminVisible ? t('hideAdmin') : t('adminAccess');
    
    // Update section headers and content
    const userHeader = userSection.querySelector('.card-header');
    userHeader.innerHTML = `
        <h2>${t('submitRequirement')}</h2>
        <p>${t('description')}</p>
    `;
    
    const adminHeader = adminSection.querySelector('.card-header');
    adminHeader.innerHTML = `
        <h2>${t('adminDashboard')}</h2>
        <p>${t('reviewPending')}</p>
    `;
    
    const resultHeader = resultSection.querySelector('.card-header');
    resultHeader.innerHTML = `
        <h2>${t('yourResults')}</h2>
        <p>${t('approvedRequirements')}</p>
    `;
    
    // Update input placeholder
    requirementInput.placeholder = t('placeholder');
    
    // Update button text
    const submitBtn = requirementForm.querySelector('button[type="submit"]');
    submitBtn.textContent = t('submitRequest');
    
    // Re-render lists to update button and status text
    renderAdminList();
    renderResultList();
}

// Initial render
renderAdminList();
renderResultList();
