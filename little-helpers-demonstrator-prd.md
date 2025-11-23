# Little Helpers - Démonstrateur Generative UI
## PRD & Spécifications Techniques

---

## 🎯 Vue d'ensemble du projet

### Objectif
Créer une application web monopage démontrant comment Memoways remplace les documents Word/PowerPoint statiques par des artefacts logiciels interactifs "one shot", tout en conservant un export PDF final officiel.

### Public cible
- Agences no-code et intégrateurs
- Freelances créatifs
- PME et associations
- Secteur culturel (théâtre, événementiel)

### Concept clé à communiquer
**Document statique → Artefact interactif collaboratif → Export PDF officiel archivable**

---

## 🎨 Charte graphique Memoways

### Palette de couleurs

**Couleurs principales**
```css
--whale-skin: #515792;        /* Primaire */
--dark-knight: #171A2F;       /* Foncé */
--royal-curtsy: #262845;      /* Secondaire */
```

**Couleurs d'accent**
```css
--autumn-landscape: #E27227;  /* CTA principal */
--pizazz: #E58441;           /* CTA secondaire */
```

**Neutres**
```css
--skyline: #989AB8;          /* Gris clair */
--desert-field: #EFCFB7;     /* Beige */
--coast-cream: #F7E7DB;      /* Crème */
```

### Dégradés suggérés
1. `linear-gradient(135deg, #515792 0%, #171A2F 100%)` - Header premium
2. `linear-gradient(135deg, #E27227 0%, #E58441 100%)` - Boutons CTA
3. `linear-gradient(135deg, #515792 0%, #B4B7D0 100%)` - Backgrounds cards
4. `linear-gradient(135deg, #EFCFB7 0%, #F8EAE0 100%)` - Zones douces

### Typographie
```css
--font-headings: 'Montserrat', sans-serif;
--font-body: 'Lato', sans-serif;

/* Échelle typographique */
--h1: 48px;
--h2: 39px;
--h3: 31px;
--h4: 25px;
--h5: 20px;
--body: 16px;
--caption: 13px;
```

### Ton de marque
- **Playful** : léger, ludique, pas infantilisant
- **Caring** : accompagnant, sécurisant
- **Conversational** : phrases simples, amical
- **Positive** : orienté solutions

---

## 📐 Structure de l'interface

### Layout général (Sidebar + Content)

```
┌────────────────────────────────────────────────────┐
│ SIDEBAR (fixe)          │ HEADER                   │
│ ─────────────────────── │ ──────────────────────── │
│ [Logo] Little Helpers   │ Generative UI Prototype  │
│                         │ [Search] [Avatar]        │
│ Navigation              │ ──────────────────────── │
│ • Accueil               │                          │
│ • Nouvelle interface    │   CONTENU PRINCIPAL      │
│ • Recettes              │                          │
│ • Opportunités          │   • Bandeau explicatif   │
│ • Vision & Objectifs    │   • Section démos (tabs) │
│ • Comparer              │     - Théâtre            │
│                         │     - Freelance          │
│ Démos sectorielles      │     - PME                │
│ ▶ Théâtre (sélectionné) │                          │
│   Freelance             │                          │
│   PME                   │                          │
│                         │                          │
│ Historique              │                          │
│ (Aucune interface)      │                          │
│                         │                          │
│ [Configuration]         │                          │
└────────────────────────────────────────────────────┘
```

### Sidebar - Spécifications
```css
width: 280px;
background: linear-gradient(180deg, #262845 0%, #171A2F 100%);
color: #F7E7DB;
padding: 24px;
```

**Menu items**
- Font: Lato 16px
- Hover: background #515792, transition 0.2s
- Active: border-left 3px solid #E27227

### Header - Spécifications
```css
height: 80px;
background: #FFFFFF;
border-bottom: 1px solid #EFCFB7;
padding: 0 40px;
```

**Search bar**
- Width: 400px
- Placeholder: "Affiner cette interface…"
- Border: 1px solid #989AB8
- Focus: border-color #515792

---

## 📝 Section d'introduction (bandeau explicatif)

### Contenu texte

**H1 (Montserrat 48px, #171A2F)**
```
Bienvenue dans l'ère des artefacts collaboratifs intelligents
```

**Paragraphe 1**
```
Fini le temps perdu à jongler entre Word, PowerPoint et Excel. 
Nos artefacts interactifs centralisent votre réflexion, simulent 
des scénarios en temps réel, et facilitent la collaboration — 
le tout pour préparer un document final impeccable.
```

**Paragraphe 2**
```
L'artefact est votre atelier de travail : ajustez les chiffres, 
testez les hypothèses, commentez avec votre équipe. Une fois 
satisfait, cliquez sur "Exporter en PDF" pour générer le 
document officiel, prêt à être archivé et partagé.
```

### Timeline visuelle (optionnel)

```
[Icône récolte] → [Icône collaboration] → [Icône PDF]
Collecte        Artefact interactif    Export officiel
& réflexion     (organique, vivant)    (archivable)
```

**Styling**
- Background: `linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%)`
- Padding: 60px 40px
- Border-radius: 12px
- Box-shadow: 0 4px 20px rgba(23, 26, 47, 0.08)

---

## 🎭 Démo 1 : Théâtre - Dossier Subvention Ville 2025

### Layout structure

```
┌─────────────────────────────────────────────────────┐
│ [Tag: Culture] Dossier Subvention Ville 2025       │
│                        [Exporter PDF] [Valider]    │
├─────────────────────────────────────────────────────┤
│ [KPI 1]        [KPI 2]         [KPI 3]             │
├──────────────────────────┬──────────────────────────┤
│ Calendrier production    │ Analyse IA               │
│ (Timeline verticale)     │ (Recommandations)        │
├──────────────────────────┤                          │
│ Répartition budgétaire   │                          │
│ (Graphique)              │                          │
├──────────────────────────┴──────────────────────────┤
│ Pièces jointes générées                             │
└─────────────────────────────────────────────────────┘
```

### Composants détaillés

#### 1. Header avec tag et boutons
```html
<div class="flex justify-between items-center mb-6">
  <div>
    <span class="tag-culture">Culture</span>
    <h2>Dossier Subvention Ville 2025</h2>
  </div>
  <div class="flex gap-3">
    <button class="btn-secondary">Exporter PDF</button>
    <button class="btn-primary">Valider & Envoyer</button>
  </div>
</div>
```

**Styles**
```css
.tag-culture {
  background: linear-gradient(135deg, #E27227 0%, #E58441 100%);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.btn-primary {
  background: linear-gradient(135deg, #E27227 0%, #E58441 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(226, 114, 39, 0.3);
}

.btn-secondary {
  background: white;
  border: 2px solid #515792;
  color: #515792;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
```

#### 2. Cartes KPI (3 cards côte à côte)

**Données**
```javascript
const kpis = [
  {
    label: "Public estimé",
    value: "12'500",
    evolution: "+15% vs 2024",
    icon: "👥",
    color: "#515792"
  },
  {
    label: "Budget total",
    value: "450k CHF",
    subtitle: "dont 30% subvention",
    icon: "💰",
    color: "#E27227"
  },
  {
    label: "Représentations",
    value: "42",
    subtitle: "sur 3 productions",
    icon: "🎭",
    color: "#262845"
  }
];
```

**Structure HTML**
```html
<div class="grid grid-cols-3 gap-4 mb-8">
  <!-- KPI Card Template -->
  <div class="kpi-card">
    <div class="kpi-icon">{icon}</div>
    <div class="kpi-value">{value}</div>
    <div class="kpi-label">{label}</div>
    <div class="kpi-evolution">{evolution}</div>
    <button class="kpi-edit">✏️ Modifier</button>
  </div>
</div>
```

**Styles**
```css
.kpi-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
  position: relative;
  border-left: 4px solid var(--card-color);
}

.kpi-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.kpi-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 39px;
  font-weight: 700;
  color: #171A2F;
  margin-bottom: 4px;
}

.kpi-label {
  font-size: 14px;
  color: #989AB8;
  margin-bottom: 8px;
}

.kpi-evolution {
  color: #4CAF50;
  font-size: 13px;
  font-weight: 600;
}

.kpi-edit {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: #989AB8;
  cursor: pointer;
  font-size: 13px;
}
```

#### 3. Calendrier de production (Timeline)

**Données**
```javascript
const timeline = [
  {
    title: "Création 'Les Géants'",
    date: "Sept 2025",
    status: "en_cours",
    description: "Répétitions et création originale"
  },
  {
    title: "Première représentation",
    date: "Nov 2025",
    status: "a_venir",
    description: "Théâtre Municipal de Lausanne"
  },
  {
    title: "Tournée Romande",
    date: "Jan 2026",
    status: "a_venir",
    description: "Genève, Fribourg, Sion, Neuchâtel"
  },
  {
    title: "Clôture de saison",
    date: "Mar 2026",
    status: "a_venir",
    description: "Bilan et archivage"
  }
];
```

**Structure HTML**
```html
<div class="timeline-container">
  <h3>Calendrier de production</h3>
  <div class="timeline-vertical">
    <!-- Timeline Item Template -->
    <div class="timeline-item status-{status}">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-date">{date}</div>
        <div class="timeline-title">{title}</div>
        <div class="timeline-description">{description}</div>
        <div class="timeline-actions">
          <input type="date" value="{date}">
          <select>
            <option>En cours</option>
            <option>À venir</option>
            <option>Terminé</option>
          </select>
          <textarea placeholder="Ajouter une note..."></textarea>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Styles**
```css
.timeline-vertical {
  position: relative;
  padding-left: 40px;
}

.timeline-vertical::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #515792 0%, #989AB8 100%);
}

.timeline-item {
  position: relative;
  padding: 20px;
  margin-bottom: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(23, 26, 47, 0.04);
}

.timeline-marker {
  position: absolute;
  left: -33px;
  top: 24px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 3px solid #515792;
}

.status-en_cours .timeline-marker {
  background: #E27227;
  border-color: #E27227;
  box-shadow: 0 0 0 4px rgba(226, 114, 39, 0.2);
}

.timeline-date {
  font-size: 13px;
  color: #E27227;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: #171A2F;
  margin-bottom: 8px;
}

.timeline-description {
  color: #989AB8;
  font-size: 14px;
  margin-bottom: 12px;
}
```

#### 4. Répartition budgétaire (Graphique)

**Données**
```javascript
const budget = [
  { category: "Artistique & Technique", percentage: 65, color: "#515792" },
  { category: "Communication", percentage: 15, color: "#E27227" },
  { category: "Médiation", percentage: 10, color: "#E58441" },
  { category: "Administration", percentage: 10, color: "#989AB8" }
];
```

**Options de visualisation**
1. Barre horizontale empilée
2. Donut chart
3. Sliders interactifs

**HTML avec sliders**
```html
<div class="budget-section">
  <h3>Répartition budgétaire</h3>
  
  <!-- Budget Item Template -->
  <div class="budget-item">
    <div class="budget-header">
      <span class="budget-label">{category}</span>
      <span class="budget-percentage">{percentage}%</span>
    </div>
    <input type="range" 
           min="0" 
           max="100" 
           value="{percentage}"
           class="budget-slider"
           style="--slider-color: {color}">
  </div>
  
  <div class="budget-total">
    <strong>Total:</strong> 100%
  </div>
</div>
```

**Styles**
```css
.budget-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #EFCFB7;
  outline: none;
  -webkit-appearance: none;
}

.budget-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.budget-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
  border: none;
}
```

#### 5. Analyse IA (Bloc recommandations)

**Contenu**
```javascript
const aiAnalysis = {
  summary: "Votre dossier est solide. Le budget artistique respecte les critères de la Ville (min. 60%).",
  checks: [
    {
      status: "success",
      label: "Parité respectée",
      detail: "47% de représentation féminine"
    },
    {
      status: "success",
      label: "Ancrage local fort",
      detail: "3 partenariats avec institutions locales"
    },
    {
      status: "warning",
      label: "Justifier la hausse de 15% du public",
      detail: "Ajouter des données sur les actions de médiation prévues"
    }
  ]
};
```

**HTML**
```html
<div class="ai-analysis-block">
  <div class="ai-header">
    <span class="ai-icon">🤖</span>
    <h3>Analyse IA du dossier</h3>
  </div>
  
  <p class="ai-summary">{summary}</p>
  
  <div class="ai-checks">
    <!-- Check Item Template -->
    <div class="ai-check-item status-{status}">
      <span class="check-icon">
        {status === 'success' ? '✅' : '⚠️'}
      </span>
      <div class="check-content">
        <div class="check-label">{label}</div>
        <div class="check-detail">{detail}</div>
      </div>
    </div>
  </div>
</div>
```

**Styles**
```css
.ai-analysis-block {
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-radius: 12px;
  padding: 24px;
  border: 2px solid #EFCFB7;
}

.ai-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.ai-icon {
  font-size: 32px;
}

.ai-summary {
  color: #171A2F;
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 1.6;
}

.ai-check-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: white;
}

.ai-check-item.status-success {
  border-left: 4px solid #4CAF50;
}

.ai-check-item.status-warning {
  border-left: 4px solid #E27227;
}

.check-label {
  font-weight: 600;
  color: #171A2F;
  margin-bottom: 4px;
}

.check-detail {
  font-size: 13px;
  color: #989AB8;
}
```

#### 6. Pièces jointes générées

**HTML**
```html
<div class="attachments-section">
  <h3>Pièces jointes générées</h3>
  <div class="attachments-grid">
    <!-- Attachment Item Template -->
    <div class="attachment-item">
      <div class="file-icon">📄</div>
      <div class="file-info">
        <div class="file-name">{filename}</div>
        <div class="file-size">{size}</div>
      </div>
      <button class="download-btn">⬇️</button>
    </div>
  </div>
</div>
```

**Données**
```javascript
const attachments = [
  { filename: "Budget_Detaille.xlsx", size: "124 KB", icon: "📊" },
  { filename: "Calendrier_Saison.pdf", size: "89 KB", icon: "📅" },
  { filename: "CVs_Equipe.pdf", size: "256 KB", icon: "👥" },
  { filename: "Lettre_Intention.docx", size: "45 KB", icon: "📝" }
];
```

---

## 💼 Démo 2 : Freelance - Générateur de Dossiers Subvention

### Layout structure

```
┌─────────────────────────────────────────────────────┐
│ Stepper: [1●]─[2●]─[3○]─[4○]─[5○]                  │
├──────────────────┬──────────────────────────────────┤
│ Résumé dynamique │ Formulaire guidé                 │
│                  │                                  │
│ [Carte Profil]   │ [Champs projet]                  │
│ [Carte Portfolio]│ [Type subvention]                │
│                  │ [Budget sliders]                 │
│                  ├──────────────────────────────────┤
│                  │ Argumentaire IA                  │
│                  │ [Points forts]                   │
│                  │ [Risques]                        │
│                  │ [Suggestions]                    │
└──────────────────┴──────────────────────────────────┘
│ [Générer le dossier PDF complet]                    │
└─────────────────────────────────────────────────────┘
```

### Composants détaillés

#### 1. Stepper (barre de progression)

**HTML**
```html
<div class="stepper">
  <div class="step completed">
    <div class="step-number">1</div>
    <div class="step-label">Profil & contexte</div>
  </div>
  <div class="step-connector completed"></div>
  
  <div class="step active">
    <div class="step-number">2</div>
    <div class="step-label">Projet à financer</div>
  </div>
  <div class="step-connector"></div>
  
  <div class="step">
    <div class="step-number">3</div>
    <div class="step-label">Budget & planning</div>
  </div>
  <div class="step-connector"></div>
  
  <div class="step">
    <div class="step-number">4</div>
    <div class="step-label">Argumentaire IA</div>
  </div>
  <div class="step-connector"></div>
  
  <div class="step">
    <div class="step-number">5</div>
    <div class="step-label">Export PDF</div>
  </div>
</div>
```

**Styles**
```css
.stepper {
  display: flex;
  align-items: center;
  padding: 32px;
  background: white;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #EFCFB7;
  color: #989AB8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.step.completed .step-number {
  background: linear-gradient(135deg, #515792 0%, #262845 100%);
  color: white;
}

.step.active .step-number {
  background: linear-gradient(135deg, #E27227 0%, #E58441 100%);
  color: white;
  box-shadow: 0 0 0 4px rgba(226, 114, 39, 0.2);
}

.step-label {
  font-size: 13px;
  color: #989AB8;
  text-align: center;
  max-width: 100px;
}

.step.active .step-label {
  color: #171A2F;
  font-weight: 600;
}

.step-connector {
  flex: 1;
  height: 2px;
  background: #EFCFB7;
  margin: 0 16px;
}

.step-connector.completed {
  background: linear-gradient(90deg, #515792 0%, #262845 100%);
}
```

#### 2. Colonne gauche - Résumé dynamique

**Carte Profil**
```javascript
const profile = {
  name: "Sophie Martin",
  discipline: "Designer graphique",
  location: "Genève, Suisse",
  experience: "8 ans",
  avatar: "👩‍🎨"
};
```

**HTML**
```html
<div class="summary-column">
  <div class="profile-card">
    <div class="profile-avatar">{avatar}</div>
    <h3>{name}</h3>
    <div class="profile-detail">
      <span class="detail-label">Discipline</span>
      <span class="detail-value">{discipline}</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Territoire</span>
      <span class="detail-value">{location}</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Expérience</span>
      <span class="detail-value">{experience}</span>
    </div>
  </div>
  
  <div class="portfolio-card">
    <h4>Portfolio</h4>
    <div class="portfolio-stat">
      <span class="stat-number">24</span>
      <span class="stat-label">projets réalisés</span>
    </div>
    <div class="portfolio-stat">
      <span class="stat-number">12</span>
      <span class="stat-label">clients récurrents</span>
    </div>
    <div class="portfolio-stat">
      <span class="stat-number">45k CHF</span>
      <span class="stat-label">budget moyen</span>
    </div>
  </div>
</div>
```

**Styles**
```css
.summary-column {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-card, .portfolio-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.profile-avatar {
  font-size: 64px;
  text-align: center;
  margin-bottom: 16px;
}

.profile-detail {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #EFCFB7;
}

.detail-label {
  color: #989AB8;
  font-size: 13px;
}

.detail-value {
  color: #171A2F;
  font-weight: 600;
}

.portfolio-stat {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid #EFCFB7;
}

.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 31px;
  font-weight: 700;
  color: #515792;
}

.stat-label {
  font-size: 13px;
  color: #989AB8;
}
```

#### 3. Zone centrale - Formulaire guidé

**Champs projet**
```html
<div class="form-section">
  <h3>Décrivez votre projet</h3>
  
  <div class="form-group">
    <label>Titre du projet</label>
    <input type="text" 
           placeholder="Ex: Identité visuelle pour startup tech"
           class="form-input">
  </div>
  
  <div class="form-row">
    <div class="form-group">
      <label>Lieu de réalisation</label>
      <input type="text" placeholder="Ville, Canton" class="form-input">
    </div>
    <div class="form-group">
      <label>Dates prévues</label>
      <input type="text" placeholder="Janv - Mars 2026" class="form-input">
    </div>
  </div>
  
  <div class="form-group">
    <label>Type de subvention</label>
    <select class="form-select">
      <option>Sélectionner...</option>
      <option>CNAP - Culture</option>
      <option>Région Lémanique</option>
      <option>Ville de Genève</option>
      <option>Pro Helvetia</option>
    </select>
  </div>
  
  <div class="form-group">
    <label>Description artistique</label>
    <textarea class="form-textarea" 
              rows="6"
              placeholder="Décrivez votre démarche, vos objectifs, votre public cible..."></textarea>
  </div>
  
  <h4>Budget prévisionnel</h4>
  
  <div class="budget-slider-group">
    <label>Honoraires <span class="slider-value">8'000 CHF</span></label>
    <input type="range" min="0" max="20000" step="500" value="8000">
  </div>
  
  <div class="budget-slider-group">
    <label>Production <span class="slider-value">5'000 CHF</span></label>
    <input type="range" min="0" max="15000" step="500" value="5000">
  </div>
  
  <div class="budget-slider-group">
    <label>Communication <span class="slider-value">2'000 CHF</span></label>
    <input type="range" min="0" max="10000" step="500" value="2000">
  </div>
  
  <div class="budget-total">
    <strong>Total projet:</strong> 15'000 CHF
  </div>
</div>
```

**Styles**
```css
.form-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  color: #171A2F;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #EFCFB7;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  transition: border-color 0.2s;
}

.form-input:focus, 
.form-select:focus, 
.form-textarea:focus {
  outline: none;
  border-color: #515792;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.budget-slider-group {
  margin-bottom: 20px;
}

.slider-value {
  float: right;
  color: #515792;
  font-weight: 700;
}

.budget-total {
  margin-top: 24px;
  padding: 16px;
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-radius: 8px;
  text-align: right;
  font-size: 20px;
  color: #171A2F;
}
```

#### 4. Colonne droite - Argumentaire IA

**Contenu**
```javascript
const argumentaire = {
  pointsForts: [
    {
      title: "Ancrage territorial",
      description: "Votre réseau local (12 clients récurrents) démontre une implantation forte."
    },
    {
      title: "Cohérence avec la mission",
      description: "Votre projet s'aligne parfaitement avec les priorités du CNAP (soutien à la création contemporaine)."
    },
    {
      title: "Budget réaliste",
      description: "Le ratio honoraires/production (60/40) correspond aux standards du secteur."
    }
  ],
  risques: [
    {
      title: "Calendrier serré",
      description: "3 mois de production. Prévoir un plan B pour les délais de livraison."
    }
  ],
  suggestions: [
    "Ajouter 2-3 lettres de soutien d'institutions partenaires",
    "Détailler les retombées attendues (visibilité, emplois créés)",
    "Inclure un échéancier détaillé des livrables"
  ]
};
```

**HTML**
```html
<div class="ai-argumentaire">
  <div class="ai-header">
    <span class="ai-icon">💡</span>
    <h3>Argumentaire IA</h3>
    <button class="regenerate-btn">🔄 Régénérer</button>
  </div>
  
  <div class="argument-section">
    <h4>✅ Points forts</h4>
    <div class="argument-item" v-for="item in pointsForts">
      <div class="argument-title">{item.title}</div>
      <div class="argument-description">{item.description}</div>
    </div>
  </div>
  
  <div class="argument-section">
    <h4>⚠️ Risques à expliciter</h4>
    <div class="argument-item" v-for="item in risques">
      <div class="argument-title">{item.title}</div>
      <div class="argument-description">{item.description}</div>
    </div>
  </div>
  
  <div class="argument-section">
    <h4>💡 Suggestions pour renforcer le dossier</h4>
    <ul class="suggestions-list">
      <li v-for="suggestion in suggestions">{suggestion}</li>
    </ul>
  </div>
</div>
```

**Styles**
```css
.ai-argumentaire {
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-radius: 12px;
  padding: 24px;
  border: 2px solid #EFCFB7;
}

.ai-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.regenerate-btn {
  background: white;
  border: 2px solid #515792;
  color: #515792;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.regenerate-btn:hover {
  background: #515792;
  color: white;
}

.argument-section {
  margin-bottom: 24px;
}

.argument-section h4 {
  color: #171A2F;
  margin-bottom: 12px;
  font-size: 16px;
}

.argument-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  border-left: 4px solid #515792;
}

.argument-title {
  font-weight: 700;
  color: #171A2F;
  margin-bottom: 6px;
}

.argument-description {
  color: #989AB8;
  font-size: 14px;
  line-height: 1.5;
}

.suggestions-list {
  list-style: none;
  padding: 0;
}

.suggestions-list li {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
  padding-left: 36px;
}

.suggestions-list li::before {
  content: '→';
  position: absolute;
  left: 16px;
  color: #E27227;
  font-weight: 700;
}
```

#### 5. Bouton export final

**HTML**
```html
<div class="export-section">
  <button class="export-pdf-btn">
    <span class="btn-icon">📄</span>
    Générer le dossier PDF complet
  </button>
  <p class="export-notice">
    Le PDF généré sera la version officielle archivable de votre dossier. 
    Cette interface est votre atelier de préparation collaboratif.
  </p>
</div>
```

**Styles**
```css
.export-section {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 12px;
  margin-top: 32px;
}

.export-pdf-btn {
  background: linear-gradient(135deg, #E27227 0%, #E58441 100%);
  color: white;
  padding: 20px 48px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 24px rgba(226, 114, 39, 0.3);
}

.export-pdf-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(226, 114, 39, 0.4);
}

.btn-icon {
  font-size: 24px;
  margin-right: 12px;
}

.export-notice {
  margin-top: 16px;
  color: #989AB8;
  font-size: 14px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
```

---

## 🏢 Démo 3 : PME/Association - Simulateur Budget Événement

### Layout structure

```
┌─────────────────────────────────────────────────────┐
│ Soirée annuelle clients              [Dupliquer]    │
├─────────────────────────────────────────────────────┤
│ [Scénario: Pessimiste | Réaliste | Ambitieux]      │
├──────────────────────────┬──────────────────────────┤
│ Sliders & Paramètres     │ Graphiques               │
│ • Prix billet            │ • Donut: Répartition     │
│ • Participants           │ • Bar: Comparaison       │
│ • Budget com             │                          │
│ • Cachets                │                          │
│                          │                          │
│ [Résultat: +2'500 CHF]   │                          │
├──────────────────────────┴──────────────────────────┤
│ Préparer dossier partenaire                         │
│ [Résumé] [Budget synthétique] [Exporter PDF]        │
└─────────────────────────────────────────────────────┘
```

### Composants détaillés

#### 1. Header avec sélection scénario

**HTML**
```html
<div class="event-header">
  <div>
    <h2>Soirée annuelle clients</h2>
    <span class="event-date">📅 Prévu: 15 juin 2026</span>
  </div>
  <div class="header-actions">
    <button class="btn-outline">Dupliquer</button>
    <button class="btn-outline">Sauver comme modèle</button>
  </div>
</div>

<div class="scenario-tabs">
  <button class="scenario-tab" data-scenario="pessimiste">
    <span class="scenario-icon">📉</span>
    <span class="scenario-label">Pessimiste</span>
  </button>
  <button class="scenario-tab active" data-scenario="realiste">
    <span class="scenario-icon">📊</span>
    <span class="scenario-label">Réaliste</span>
  </button>
  <button class="scenario-tab" data-scenario="ambitieux">
    <span class="scenario-icon">📈</span>
    <span class="scenario-label">Ambitieux</span>
  </button>
</div>
```

**Données des scénarios**
```javascript
const scenarios = {
  pessimiste: {
    prixBillet: 80,
    participants: 60,
    budgetCom: 2000,
    cachets: 3000
  },
  realiste: {
    prixBillet: 100,
    participants: 80,
    budgetCom: 3000,
    cachets: 4000
  },
  ambitieux: {
    prixBillet: 120,
    participants: 100,
    budgetCom: 5000,
    cachets: 5000
  }
};
```

**Styles**
```css
.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.event-date {
  color: #989AB8;
  font-size: 14px;
  margin-top: 4px;
}

.scenario-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  background: white;
  padding: 16px;
  border-radius: 12px;
}

.scenario-tab {
  flex: 1;
  padding: 16px;
  border: 2px solid #EFCFB7;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.scenario-tab:hover {
  border-color: #515792;
  background: #F7E7DB;
}

.scenario-tab.active {
  border-color: #E27227;
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-width: 3px;
}

.scenario-icon {
  font-size: 32px;
}

.scenario-label {
  font-weight: 600;
  color: #171A2F;
  font-family: 'Montserrat', sans-serif;
}
```

#### 2. Zone sliders (paramètres ajustables)

**HTML**
```html
<div class="parameters-section">
  <h3>Paramètres de l'événement</h3>
  
  <!-- Slider Template -->
  <div class="parameter-slider">
    <div class="slider-header">
      <label>Prix du billet</label>
      <span class="slider-value">100 CHF</span>
    </div>
    <input type="range" 
           min="50" 
           max="200" 
           step="10" 
           value="100"
           class="slider"
           data-param="prixBillet">
    <div class="slider-hints">
      <span>50 CHF</span>
      <span>200 CHF</span>
    </div>
  </div>
  
  <div class="parameter-slider">
    <div class="slider-header">
      <label>Participants attendus</label>
      <span class="slider-value">80 personnes</span>
    </div>
    <input type="range" 
           min="30" 
           max="150" 
           step="5" 
           value="80"
           class="slider"
           data-param="participants">
    <div class="slider-hints">
      <span>30</span>
      <span>150</span>
    </div>
  </div>
  
  <div class="parameter-slider">
    <div class="slider-header">
      <label>Budget communication</label>
      <span class="slider-value">3'000 CHF</span>
    </div>
    <input type="range" 
           min="500" 
           max="10000" 
           step="500" 
           value="3000"
           class="slider"
           data-param="budgetCom">
    <div class="slider-hints">
      <span>500 CHF</span>
      <span>10'000 CHF</span>
    </div>
  </div>
  
  <div class="parameter-slider">
    <div class="slider-header">
      <label>Cachets artistes / intervenants</label>
      <span class="slider-value">4'000 CHF</span>
    </div>
    <input type="range" 
           min="1000" 
           max="15000" 
           step="500" 
           value="4000"
           class="slider"
           data-param="cachets">
    <div class="slider-hints">
      <span>1'000 CHF</span>
      <span>15'000 CHF</span>
    </div>
  </div>
  
  <!-- Résultat calculé -->
  <div class="result-box">
    <div class="result-row">
      <span>💰 Recettes estimées</span>
      <span class="result-value positive">8'000 CHF</span>
    </div>
    <div class="result-row">
      <span>💸 Coûts totaux</span>
      <span class="result-value">5'500 CHF</span>
    </div>
    <div class="result-divider"></div>
    <div class="result-row result-final">
      <span>Résultat net</span>
      <span class="result-value positive">+2'500 CHF</span>
    </div>
  </div>
</div>
```

**Styles**
```css
.parameters-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.parameter-slider {
  margin-bottom: 32px;
}

.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.slider-header label {
  color: #171A2F;
  font-weight: 600;
}

.slider-value {
  color: #E27227;
  font-weight: 700;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
}

.slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #EFCFB7;
  outline: none;
  -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #515792 0%, #262845 100%);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(81, 87, 146, 0.3);
  transition: transform 0.2s;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.slider-hints {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 12px;
  color: #989AB8;
}

.result-box {
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
  border: 2px solid #EFCFB7;
}

.result-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
}

.result-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #171A2F;
}

.result-value.positive {
  color: #4CAF50;
}

.result-divider {
  height: 2px;
  background: #EFCFB7;
  margin: 12px 0;
}

.result-final {
  font-size: 18px;
}

.result-final .result-value {
  font-size: 31px;
}
```

#### 3. Graphiques de visualisation

**A. Donut Chart - Répartition des coûts**

**HTML**
```html
<div class="charts-section">
  <div class="chart-container">
    <h3>Répartition des coûts</h3>
    <canvas id="donutChart" width="300" height="300"></canvas>
    <div class="chart-legend">
      <div class="legend-item">
        <span class="legend-color" style="background: #515792;"></span>
        <span class="legend-label">Salle & technique</span>
        <span class="legend-value">30%</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background: #E27227;"></span>
        <span class="legend-label">Communication</span>
        <span class="legend-value">25%</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background: #E58441;"></span>
        <span class="legend-label">Cachets</span>
        <span class="legend-value">35%</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background: #989AB8;"></span>
        <span class="legend-label">Divers</span>
        <span class="legend-value">10%</span>
      </div>
    </div>
  </div>
</div>
```

**JavaScript pour le Donut (avec Chart.js)**
```javascript
// Inclure Chart.js via CDN
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const ctx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Salle & technique', 'Communication', 'Cachets', 'Divers'],
    datasets: [{
      data: [30, 25, 35, 10],
      backgroundColor: [
        '#515792',
        '#E27227',
        '#E58441',
        '#989AB8'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    cutout: '70%'
  }
});
```

**B. Bar Chart - Comparaison des scénarios**

**HTML**
```html
<div class="chart-container">
  <h3>Comparaison des scénarios</h3>
  <canvas id="barChart" width="400" height="250"></canvas>
</div>
```

**JavaScript pour le Bar Chart**
```javascript
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Pessimiste', 'Réaliste', 'Ambitieux'],
    datasets: [
      {
        label: 'Recettes',
        data: [4800, 8000, 12000],
        backgroundColor: '#4CAF50'
      },
      {
        label: 'Coûts',
        data: [5000, 5500, 7000],
        backgroundColor: '#E27227'
      },
      {
        label: 'Résultat',
        data: [-200, 2500, 5000],
        backgroundColor: '#515792'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value.toLocaleString() + ' CHF';
          }
        }
      }
    }
  }
});
```

**Styles**
```css
.charts-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;
}

.chart-container {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.chart-container h3 {
  margin-bottom: 20px;
  color: #171A2F;
}

.chart-legend {
  margin-top: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.legend-label {
  flex: 1;
  color: #171A2F;
}

.legend-value {
  font-weight: 700;
  color: #515792;
}
```

#### 4. Bloc "Préparer dossier partenaire"

**HTML**
```html
<div class="partner-section">
  <div class="partner-header">
    <h3>Préparer un dossier pour un sponsor / partenaire</h3>
    <button class="btn-prepare">Générer le dossier</button>
  </div>
  
  <div class="partner-preview" id="partnerPreview" style="display: none;">
    <div class="preview-section">
      <h4>Résumé du projet</h4>
      <p>
        <strong>Soirée annuelle clients 2026</strong><br>
        Un événement de prestige réunissant 80 professionnels du secteur 
        tech autour d'une soirée networking et culturelle.
      </p>
      <p>
        <strong>Date:</strong> 15 juin 2026<br>
        <strong>Lieu:</strong> Salle des Assemblées, Genève
      </p>
    </div>
    
    <div class="preview-section">
      <h4>Budget synthétique</h4>
      <table class="budget-table">
        <tr>
          <td>Recettes (billetterie)</td>
          <td class="text-right">8'000 CHF</td>
        </tr>
        <tr>
          <td>Coûts totaux</td>
          <td class="text-right">5'500 CHF</td>
        </tr>
        <tr class="table-divider">
          <td><strong>Résultat prévisionnel</strong></td>
          <td class="text-right"><strong>+2'500 CHF</strong></td>
        </tr>
      </table>
    </div>
    
    <div class="preview-section">
      <h4>Retombées attendues</h4>
      <ul class="benefits-list">
        <li>
          <span class="benefit-icon">👥</span>
          <strong>Visibilité:</strong> 80 décideurs du secteur tech
        </li>
        <li>
          <span class="benefit-icon">📸</span>
          <strong>Communication:</strong> Logo partenaire sur tous supports
        </li>
        <li>
          <span class="benefit-icon">🎤</span>
          <strong>Prise de parole:</strong> 10 min pour présenter votre activité
        </li>
      </ul>
    </div>
    
    <div class="preview-actions">
      <button class="btn-primary">📄 Exporter PDF partenaire</button>
    </div>
  </div>
</div>
```

**Styles**
```css
.partner-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  margin-top: 32px;
  box-shadow: 0 2px 12px rgba(23, 26, 47, 0.06);
}

.partner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.btn-prepare {
  background: linear-gradient(135deg, #515792 0%, #262845 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-prepare:hover {
  transform: translateY(-2px);
}

.partner-preview {
  background: linear-gradient(135deg, #F7E7DB 0%, #FFFFFF 100%);
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
}

.preview-section {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #EFCFB7;
}

.preview-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.preview-section h4 {
  color: #171A2F;
  margin-bottom: 12px;
}

.budget-table {
  width: 100%;
  border-collapse: collapse;
}

.budget-table td {
  padding: 8px;
  color: #171A2F;
}

.text-right {
  text-align: right;
  font-family: 'Montserrat', sans-serif;
}

.table-divider {
  border-top: 2px solid #EFCFB7;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
}

.benefit-icon {
  font-size: 24px;
}

.preview-actions {
  text-align: center;
  margin-top: 24px;
}
```

---

## 🛠️ Spécifications techniques pour Antigravity

### Stack recommandé
- **HTML5** + **Tailwind CSS** (via CDN)
- **Vanilla JavaScript** ou **Alpine.js** pour l'interactivité
- **Chart.js** pour les graphiques
- **Pas de backend** - tout en front-end statique

### CDN à inclure dans le `<head>`
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Alpine.js (optionnel, pour data binding simple) -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@400;600;700&display=swap" rel="stylesheet">
```

### Configuration Tailwind personnalisée
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'whale-skin': '#515792',
          'dark-knight': '#171A2F',
          'royal-curtsy': '#262845',
          'autumn-landscape': '#E27227',
          'pizazz': '#E58441',
          'skyline': '#989AB8',
          'desert-field': '#EFCFB7',
          'coast-cream': '#F7E7DB',
        },
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'lato': ['Lato', 'sans-serif'],
        }
      }
    }
  }
</script>
```

### Structure des fichiers
```
little-helpers/
├── index.html                 # Page unique
├── assets/
│   ├── images/               # Images si nécessaire
│   └── icons/                # Icônes personnalisées
└── README.md                 # Documentation
```

### Interactions JavaScript clés

**1. Navigation entre démos (tabs)**
```javascript
// Système de tabs simple
function switchDemo(demoName) {
  // Masquer toutes les démos
  document.querySelectorAll('.demo-content').forEach(demo => {
    demo.style.display = 'none';
  });
  
  // Afficher la démo sélectionnée
  document.getElementById(demoName).style.display = 'block';
  
  // Mettre à jour l'état actif dans la sidebar
  document.querySelectorAll('.demo-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-demo="${demoName}"]`).classList.add('active');
}
```

**2. Gestion des sliders avec mise à jour dynamique**
```javascript
// Pour le théâtre : sliders de budget
const budgetSliders = document.querySelectorAll('.budget-slider');
budgetSliders.forEach(slider => {
  slider.addEventListener('input', function() {
    // Mettre à jour l'affichage de la valeur
    const valueDisplay = this.parentElement.querySelector('.slider-value');
    valueDisplay.textContent = this.value + '%';
    
    // Recalculer le total
    updateBudgetTotal();
  });
});

function updateBudgetTotal() {
  const sliders = document.querySelectorAll('.budget-slider');
  let total = 0;
  sliders.forEach(slider => {
    total += parseInt(slider.value);
  });
  document.querySelector('.budget-total').textContent = 'Total: ' + total + '%';
}
```

**3. Simulation de l'export PDF**
```javascript
function exportToPDF() {
  // Afficher un message de confirmation
  alert('📄 Document PDF généré avec succès !\n\nVotre dossier officiel est prêt à être archivé et partagé.');
  
  // Dans une vraie app, on appellerait ici une bibliothèque comme jsPDF
  // ou un endpoint backend pour générer le PDF
}
```

**4. Changement de scénario**
```javascript
function changeScenario(scenarioName) {
  const scenarios = {
    pessimiste: {
      prixBillet: 80,
      participants: 60,
      budgetCom: 2000,
      cachets: 3000
    },
    realiste: {
      prixBillet: 100,
      participants: 80,
      budgetCom: 3000,
      cachets: 4000
    },
    ambitieux: {
      prixBillet: 120,
      participants: 100,
      budgetCom: 5000,
      cachets: 5000
    }
  };
  
  const scenario = scenarios[scenarioName];
  
  // Mettre à jour tous les sliders
  document.querySelector('[data-param="prixBillet"]').value = scenario.prixBillet;
  document.querySelector('[data-param="participants"]').value = scenario.participants;
  document.querySelector('[data-param="budgetCom"]').value = scenario.budgetCom;
  document.querySelector('[data-param="cachets"]').value = scenario.cachets;
  
  // Recalculer le résultat
  calculateResult();
  
  // Mettre à jour les graphiques
  updateCharts();
}
```

### Responsive design - Points de rupture
```css
/* Mobile first */
@media (max-width: 768px) {
  .sidebar {
    display: none; /* Ou menu burger */
  }
  
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .scenario-tabs {
    flex-direction: column;
  }
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1025px) {
  /* Layout par défaut */
}
```

---

## ✅ Checklist de développement

### Phase 1: Structure de base
- [ ] Créer le layout sidebar + content
- [ ] Implémenter le système de navigation
- [ ] Intégrer la charte graphique (couleurs, fonts)
- [ ] Créer le bandeau d'introduction

### Phase 2: Démo Théâtre
- [ ] Cards KPI avec données dynamiques
- [ ] Timeline verticale interactive
- [ ] Graphique budget avec sliders
- [ ] Bloc analyse IA
- [ ] Section pièces jointes
- [ ] Boutons d'export

### Phase 3: Démo Freelance
- [ ] Stepper de navigation
- [ ] Colonne résumé dynamique
- [ ] Formulaire guidé multi-étapes
- [ ] Bloc argumentaire IA
- [ ] Bouton export PDF final

### Phase 4: Démo PME
- [ ] Tabs de scénarios
- [ ] Sliders de paramètres
- [ ] Calcul dynamique des résultats
- [ ] Donut chart (répartition)
- [ ] Bar chart (comparaison)
- [ ] Panneau dossier partenaire

### Phase 5: Polish & Finitions
- [ ] Transitions et animations CSS
- [ ] Tests responsive (mobile/tablet/desktop)
- [ ] Optimisation des performances
- [ ] Messages utilisateur (microcopy)
- [ ] Tests cross-browser

---

## 📊 Exemples de micro-copy (ton Memoways)

### Messages d'encouragement
```
✨ "Super ! Votre dossier prend forme."
🎯 "Presque là ! Encore quelques détails et c'est bon."
🚀 "Vous êtes prêt à générer votre document officiel !"
```

### Instructions claires
```
💡 "Ajustez les curseurs pour tester différents scénarios."
👉 "Cliquez sur un élément pour le modifier."
📝 "Cette note sera incluse dans le PDF final."
```

### Appels à l'action
```
🔄 "Changer de scénario"
📄 "Générer le PDF"
✅ "Valider et envoyer"
💾 "Sauver comme modèle"
```

---

## 🎯 Objectifs de réussite

1. **Clarté du concept**: L'utilisateur comprend en 30 secondes le paradigme "artefact → PDF"
2. **Interactivité**: Au moins 3 interactions par démo (sliders, tabs, boutons)
3. **Esthétique**: Respect strict de la charte Memoways
4. **Fluidité**: Transitions douces, pas de bugs visuels
5. **Responsive**: Fonctionnel sur desktop, tablet et mobile

---

## 📚 Références et inspirations

### Benchmarks UI
- Linear (gestion de projet) - pour l'esthétique épurée
- Notion (collaboration) - pour les composants interactifs
- Stripe (paiements) - pour les graphiques et visualisations

### Exemples Generative UI
- Voir PDF joint "Generative UI: LLMs are Effective UI Generators"
- Exemples interactifs: generativeui.github.io

---

## 🚀 Prochaines étapes

1. **Valider** ce PRD avec l'équipe
2. **Prototyper** rapidement une version alpha avec Antigravity
3. **Tester** avec 3-5 utilisateurs cibles
4. **Itérer** basé sur les retours
5. **Déployer** la version démo publique

---

*Document créé pour Ulrich @ Audiogami / Memoways*  
*Version 1.0 - Novembre 2025*