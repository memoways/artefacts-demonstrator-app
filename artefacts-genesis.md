# Synthèse croisée des références et étude d’usages d’artefacts IA jetables

## 1. Synthèse croisée des références

### Takeaway principal

Toutes les références convergent vers une même idée : on passe des “documents” figés à des *artefacts exécutables* – des surfaces interactives, générées ou augmentées par l’IA, qui encapsulent à la fois le contexte, la logique et le workflow.

- Ben Davies-Romano insiste sur le fait qu’il faut concevoir des *systèmes* (scope, inputs, process, rules, output, évaluation) plutôt que des prompts isolés.
- Ink & Switch défend la vision d’un logiciel malléable où tout utilisateur peut adapter l’outil à ses besoins spécifiques, via une “gentle slope” de l’utilisateur au créateur.
- Nate (New AI Operating System of Work) parle d’un “AI operating system of work” où les documents classiques sont remplacés par des artefacts exécutables centrés sur la décision et l’action, pas sur le reporting.
- Google / Generative UI montre que les LLMs peuvent directement générer des interfaces riches (web apps, jeux, simulateurs) fortement préférées par les utilisateurs par rapport au texte brut ou au simple markdown.

### Idées originales / spécifiques

- Modéliser un système IA en 6 blocs explicites (scope, inputs, process, rules, outputs, evaluation) comme *design artefact* réutilisable, plutôt qu’un simple prompt caché.
- “Malleable software” comme nouvelle catégorie : des outils génériques (docs, tableaux, canvases) que l’on peut reconfigurer localement, à la volée, sans ingénieurs.
- L’artefact comme *unité de travail* : un objet qui contient à la fois données, logique métier, IA intégrée, historique des décisions.
- Generative UI comme pipeline complet : système prompt très détaillé, accès outils (search, image, etc.) + post-processing pour transformer une requête en UI complète.

### Opportunités

- Donner à des non-ingénieurs la capacité de fabriquer des “micro-apps” ultra ciblées en quelques heures, à partir de surfaces qu’ils connaissent déjà (docs, sheets, Notion, Airtable).
- Transformer chaque projet ponctuel (atelier, analyse, décision) en artefact exécutable : base de vérité + logique + simulation + export.
- Tirer parti des LLMs comme *générateurs d’UI* (à la Google Generative UI) mais en mode plus léger, no-code, aligné avec des usages “one-shot” et jetables.

### Limites / contraintes

- Les systèmes type Generative UI de Google sont lourds : besoin de modèles puissants, d’outillage serveur, de search systématique, de post-processing… difficile à reproduire dans un simple workflow no-code.
- La malléabilité a un coût cognitif : plus l’outil est flexible, plus il faut de bonnes abstractions (gabarits, patterns) pour ne pas perdre les non-experts.
- Les artefacts très généralisables (à la “app store”) retombent dans la logique de produit classique, alors que notre cible sont des besoins trop spécifiques pour justifier un “vrai” produit.

### Exemples de cas d’usage inspirés par ces travaux

- Explorateurs interactifs de concepts pour l’apprentissage ou l’onboarding (type mini simulateurs / visualisations interactives).
- Tableaux de bord décisionnels qui encapsulent données, critères, scénarios et décisions, plutôt qu’un simple slide deck.
- “Dynamic documents” et canvases collaboratifs où chaque bloc peut être modifié / recomposé par les utilisateurs.

---

## 2. Étude d’usages no-code / “vibe code” pour artefacts jetables

Objectif : usages *one-shot*, réalisables en 2–3 h avec des outils comme Claude Artifacts, Perplexity, Notion, Airtable, Google Docs/Sheets. Pas de maintenance, peu de dépendances, mais :

- une base de vérité unique et robuste,
- de la collaboration ciblée dans le workflow,
- une IA intégrée pour itérer / simuler,
- un template de sortie clair,
- un partage simple + export PDF.

Les exemples ci-dessous peuvent être intégrés comme toggles sur la page `/genesis` de l’artefacts demonstrator.

---

### 2.1. Mini-app de cadrage ponctuel (“Decision Brief Studio”)

**Usage**  
Préparer un “brief de décision” pour un sujet unique (lancement d’offre, choix partenaire, roadmap Q, etc.) en 2–3 h.

**Stack type (no-code / vibe code)**  
- Google Doc ou Notion comme base de vérité (sections Contexte, Options, Critères, Risques).  
- Claude / Perplexity branchés sur le doc pour synthèse, reformulation et complétion.  
- Export final en PDF formaté (template stable).

**Fonctionnalités clés**  
- Formulaire léger (ou simple checklist dans le doc) pour forcer la complétude du contexte.  
- Bouton / prompt “Comparer les options selon les critères” pour produire un tableau comparatif + recommandation argumentée.  
- Section “hypothèses à tester” générée par l’IA, que l’équipe peut éditer à la main.  

**Friction adressée**  
- Base de vérité : un seul doc structuré.  
- Collaboration : chacun remplit une section (option, risque, critère).  
- IA contextuelle : l’IA ne raisonne *que* sur ce doc.  
- Sortie : brief de décision PDF prêt à être partagé.

---

### 2.2. Tableau collaboratif pour exploration rapide de scénarios (“Scenario Sheet”)

**Usage**  
Explorer quelques scénarios (prix, positionnement, staffing, roadmap) sans construire un modèle financier complet.

**Stack type**  
- Google Sheets ou Airtable comme table unique (colonnes : scénario, hypothèse, variables, impact attendu, statut test).  
- Claude / Perplexity pour générer variantes de scénarios et commentaires.  

**Fonctionnalités clés**  
- Prompt “Génère 5 scénarios contrastés à partir de ces hypothèses” → l’IA remplit des lignes dans la table.  
- Colonne “commentaire IA” pour chaque ligne, régénérable à partir du contexte (sheet + prompt).  
- Vue filtrée “scénarios à tester cette semaine” pour organiser les micro-expérimentations.  

**Friction adressée**  
- Base de vérité : une seule sheet, pas de pertes entre mails, docs, slides.  
- Collaboration : chacun ajoute ses scénarios / données réelles dans les mêmes colonnes.  
- IA contextuelle : génération / critique de scénarios à partir des lignes existantes.  
- Sortie : rapport PDF auto-généré (tableau + synthèse IA des scénarios retenus).

---

### 2.3. Atelier d’idéation structuré (“Collaborative Workshop Canvas”)

**Usage**  
Conduire un atelier de 2–3 h (produit, pédagogie, stratégie) où la sortie est un artefact exploitable directement.

**Stack type**  
- Notion ou Google Doc avec une page structurée en blocs (Problème, Personae, Idées, Critères, Next steps).  
- Claude comme co-facilitateur : propose exercices, reformule, clusterise les idées.

**Fonctionnalités clés**  
- Phase 1 : les participants remplissent chacun une section (ou un sous-bloc) avec leurs idées, en direct.  
- L’IA regroupe les idées en thèmes, propose 3–4 “concepts” synthétiques.  
- Phase 2 : l’équipe priorise (votes ou tags dans le doc).  
- L’IA génère un mini-roadmap ou un plan d’expérimentation à partir des concepts retenus.  

**Friction adressée**  
- Base de vérité : l’atelier produit un seul artefact structuré, pas un Miro + un doc + un slide.  
- Collaboration : chacun écrit dans le même canvas, avec sa voix.  
- IA contextuelle : clustering, synthèse, priorisation à partir de ce qui a été saisi.  
- Sortie : “rapport d’atelier” PDF avec résumé, axes, plan d’actions.

---

### 2.4. “Explorable explainer” sur un sujet unique

**Usage**  
Créer en 2–3 h une petite web-app pédagogique sur un sujet précis (nouvelle fonctionnalité, concept scientifique, process interne), jetable mais partageable.

**Stack type**  
- Claude Artifacts pour générer une page HTML/CSS/JS simple, ou Notion page avec blocs interactifs simulés.  
- Contenu source dans un doc (base de vérité).  

**Fonctionnalités clés**  
- Sections interactives (“joue avec les paramètres”, “compare deux cas”) inspirées des exemples de Generative UI (mini simulateurs, visualisations).  
- Quiz léger intégré pour vérifier la compréhension.  
- Bouton “Exporter en PDF” qui capture une version linéaire (texte + quelques captures).  

**Friction adressée**  
- Base de vérité : contenu centralisé dans un doc, artefact généré par-dessus.  
- Collaboration : quelqu’un se concentre sur la narration, quelqu’un sur les exemples, l’IA sur les interactions.  
- IA contextuelle : propose analogies, quiz, variations d’exemples.  
- Sortie : app partageable + PDF pédagogique.

---

### 2.5. Micro-app de validation d’hypothèses (“Hypothesis Lab”)

**Usage**  
Pour un problème précis (ex. “faut-il segmenter nos offres pour les enseignants ?”), construire une micro-app qui aide à formuler, croiser et tester les hypothèses.

**Stack type**  
- Airtable (ou Notion database) avec tables Hypothèses, Signaux, Expériences, Résultats.  
- Claude / Perplexity pour aider à formuler hypothèses et expériences réalisables.  

**Fonctionnalités clés**  
- Formulaire “ajouter une hypothèse” (description, type, signal attendu, horizon).  
- L’IA propose pour chaque hypothèse 2–3 micro-expériences rapides à lancer.  
- Vue “simulation” : l’IA, sur la base de quelques résultats saisis, génère des scénarios (“si on continue dans cette direction, alors…”).  
- Export automatique d’un mémo PDF : hypothèses testées, résultats, décisions.  

**Friction adressée**  
- Base de vérité : toutes les hypothèses du projet au même endroit.  
- Collaboration : chacun peut poser ses hypothèses et saisir ses résultats.  
- IA contextuelle : suggestions d’expériences adaptées au contexte réel.  
- Sortie : mémo de validation / invalidation prêt à être archivé ou partagé.

---

### 3. Références utilisées

- Designing Systems, Not Prompts – Ben Davies-Romano  
- Malleable Software – Ink & Switch  
- The New AI Operating System of Work — Nate’s Newsletter  
- Generative UI: A rich, custom, visual, interactive user experience for any prompt – Google Research  
- Paper Generative UI (generativeui.github.io)
