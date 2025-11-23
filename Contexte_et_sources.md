# Contexte et sources
## Application démonstrateur : Créations d'artifacts interactifs "one shot"

Ce document contextualise une application interactive démontrant le concept d'**applications générées pour des usages uniques**. Il présente le changement de paradigme du document statique vers l'artifact interactif organique.

---

## Chapitre 1 : Les sources utilisées

### 1.1 The New AI Operating System of Work (Nate Sweletter)

**Source** : https://natesweletter.substack.com/p/the-new-ai-operating-system-of-work-goodbye

**Enseignements clés** :

L'article de Nate introduit le concept d'**instruments exécutables** qui remplacent les documents statiques dans les processus décisionnels. Contrairement aux présentations PowerPoint ou aux rapports PDF qui nécessitent des réunions multiples pour arriver à une décision, ces instruments sont des artifacts interactifs qui :

- **Intègrent la logique décisionnelle** : Les règles, seuils et validations sont codés directement dans l'interface
- **Fournissent un audit trail immédiat** : Chaque décision est traçable avec son contexte exact
- **Éliminent les boucles de feedback** : La décision se prend dans l'instant, sans nécessiter de follow-ups
- **Évoluent de manière itérative** : Chaque utilisation améliore l'instrument pour les usages futurs

L'auteur identifie **six composants essentiels** d'un instrument : inputs typés, logique visible, UI minimale, tests intégrés, audit trail, et exports propres (JSON/Markdown). Cette structure transforme fondamentalement la culture organisationnelle : la politique devient code, les leaders modèlent le comportement en demandant des instruments plutôt que des slides, et les opérateurs possèdent les outcomes.

**Pertinence pour Memoways** : Cette approche s'aligne parfaitement avec la philosophie de centralisation/décentralisation et d'autonomisation des clients. Les instruments permettent aux équipes culturelles de prendre des décisions rapides sans dépendre de consultants externes.

### 1.2 Generative UI: LLMs are Effective UI Generators (Google Research)

**Source** : Document PDF en annexe

**Enseignements clés** :

L'étude de Google Research démontre que les LLM modernes peuvent générer des interfaces utilisateur complètes et fonctionnelles de manière robuste, marquant l'émergence d'une capacité qualitativement nouvelle. L'équipe a créé le dataset **PAGEN** (pages créées par experts humains) pour évaluer les générations.

Les résultats révèlent que :

- **83% de préférence utilisateur** pour les UI génératives vs markdown standard
- **44% de comparabilité** avec les créations d'experts humains (résultat remarquable)
- **Capacité émergente** : amélioration substantielle avec les modèles récents (Gemini 3 vs versions antérieures)

L'implémentation repose sur trois piliers : (1) serveur exposant des outils (génération d'images, recherche), (2) instructions système soigneusement craftées incluant objectifs, planning, exemples et guidelines techniques, (3) post-processors légers pour corriger les erreurs communes.

**Point critique** : La génération d'UI n'est pas magique. Elle nécessite un **prompt engineering rigoureux** avec des exemples concrets, des contraintes techniques explicites, et une architecture serveur supportant les besoins de l'interface générée.

**Pertinence pour Memoways** : Valide l'approche de créer des "Little Helpers" générés à la demande plutôt que des applications maintenues à long terme. Démontre que la qualité est suffisante pour des cas d'usage professionnels.

### 1.3 Designing Systems, Not Prompts (Ben Davies Romano)

**Source** : https://bendaviesromano.medium.com/designing-systems-not-prompts-a-complete-guide-to-making-ai-actually-work-with-systems-thinking-8f5395192a2

**Enseignements clés** :

Ben Davies Romano critique l'approche naïve du "prompt engineering" et plaide pour une **pensée systémique** dans l'intégration de l'IA. L'article identifie pourquoi la plupart des implémentations d'IA échouent : elles traitent l'IA comme une boîte magique plutôt que comme un composant d'un système plus large.

Les principes directeurs :

- **Définir d'abord les contraintes et objectifs du système** : Quels sont les inputs fiables ? Quels outputs sont acceptables ? Quelles sont les conditions d'échec ?
- **Concevoir pour la robustesse, pas la perfection** : Accepter que l'IA soit probabiliste et créer des guardrails
- **Itérer sur le système complet** : Tester end-to-end, pas seulement la qualité de génération isolée
- **Instrumenter pour apprendre** : Capturer les échecs, analyser les patterns, améliorer continûment

L'auteur insiste sur le fait que le prompt n'est qu'une partie minuscule du système. Il faut penser : data pipeline, validation, fallbacks, monitoring, feedback loops.

**Pertinence pour Memoways** : Renforce l'approche méthodologique nécessaire pour les accompagnements clients. Ne pas vendre "l'IA magique" mais des systèmes pensés, testés et évolutifs. Crucial pour maintenir la confiance et l'autonomie des clients.

### 1.4 Malleable Software (Ink & Switch)

**Source** : https://www.inkandswitch.com/essay/malleable-software/

**Enseignements clés** :

Cet essai visionnaire d'Ink & Switch explore le concept de **logiciel malléable** : des applications que les utilisateurs peuvent modifier, adapter et personnaliser selon leurs besoins spécifiques, sans être développeurs.

Les auteurs identifient un problème fondamental du logiciel moderne : il est soit **trop rigide** (applications professionnelles imposant leurs workflows) soit **trop complexe** (outils de développement nécessitant expertise technique). Le logiciel malléable vise un juste milieu.

Caractéristiques du logiciel malléable :

- **Inspectabilité** : Pouvoir voir et comprendre comment ça fonctionne
- **Modifiabilité progressive** : Du simple tweak aux modifications profondes
- **Partageabilité** : Les modifications peuvent être partagées avec d'autres
- **Pérennité** : Les modifications survivent aux mises à jour

**Connexion avec Generative UI** : Les artifacts générés par LLM incarnent parfaitement cette vision. Ils sont inspectables (code source visible), modifiables (conversation itérative avec le LLM), partageables (lien ou fichier HTML), et jetables/recréables (pas besoin de maintenance long terme).

**Pertinence pour Memoways** : Valide philosophiquement l'approche des Little Helpers et du "vibe coding". Positionne Memoways comme facilitateur de cette malléabilité, permettant aux créatifs de façonner leurs outils sans devenir développeurs.

---

## Chapitre 2 : Process de fabrication de cet artifact

### 2.1 Phase de recherche et curation (Semaine 1)

**Objectif** : Identifier et comprendre le changement de paradigme en cours.

**Actions réalisées** :

1. **Lecture extensive de blogs et études**
   - Veille sur Substack (Nate Sweletter, Ethan Mollick, autres)
   - Monitoring des annonces produit (Claude Artifacts, ChatGPT Canvas, Google Gemini)
   - Études académiques (Google Research, MIT)

2. **Curation de billets et sources pertinentes**
   - Sélection de 4 sources complémentaires couvrant : vision produit (Nate), recherche technique (Google), méthodologie (Ben Davies), philosophie (Ink & Switch)
   - Critères de sélection : pertinence pour clients Memoways (secteur culturel, créatifs indépendants), applicabilité pratique, complémentarité des approches

3. **Réflexion stratégique**
   - Connexion avec l'ADN Memoways : centraliser pour décentraliser, autonomisation
   - Identification opportunité : positionner Memoways sur ce nouveau paradigme
   - Hypothèse à tester : créer un démonstrateur qui explique ces concepts de manière interactive

### 2.2 Phase de conception et documentation (Semaine 2)

**Objectif** : Transformer la compréhension en spécifications détaillées.

**Actions réalisées** :

1. **Rédaction d'un premier brief riche dans Claude**
   - Description de l'objectif : créer une application démonstrateur interactive
   - Public cible : prospects Memoways curieux du "vibe coding" et des artifacts interactifs
   - Contraintes techniques : HTML/CSS/JS pur, pas de backend (sauf APIs externes), déployable statiquement

2. **Trois discussions approfondies avec Claude**
   
   **Discussion 1 - Architecture et sources**
   - Analyse des 4 sources et extraction des concepts clés
   - Définition de l'architecture de l'application
   - Identification des sections nécessaires : Hero, Qu'est-ce qu'un artifact?, Paradigmes (document vs instrument), Cas d'usage, Comment ça marche?, Sources
   
   **Discussion 2 - Design et expérience utilisateur**
   - Élaboration du design visuel (inspiré des guidelines Memoways)
   - Planification des interactions : accordéons, tabs, animations au scroll
   - Création de métaphores visuelles (document figé vs instrument vivant)
   
   **Discussion 3 - Contenu et storytelling**
   - Rédaction du contenu de chaque section
   - Création d'exemples concrets adaptés au secteur culturel (programme de spectacle, dossier de subvention, planification de tournée)
   - Définition du ton : inspirant mais accessible, technique mais pas intimidant

3. **Export de 4 documents markdown très détaillés**
   
   **Document 1 : Contexte et sources** (ce document)
   - Synthèse d'une demi-page par source
   - Mise en perspective pour Memoways
   
   **Document 2 : Spécifications fonctionnelles**
   - Liste exhaustive des fonctionnalités
   - Comportements attendus de chaque composant
   - Critères de succès mesurables
   
   **Document 3 : Spécifications techniques**
   - Architecture HTML/CSS/JS
   - Bibliothèques à utiliser (Tailwind via CDN, pas de frameworks lourds)
   - Patterns de code recommandés
   - Gestion du responsive et de l'accessibilité
   
   **Document 4 : Guide de contenu et UI/UX**
   - Contenu textuel complet section par section
   - Wireframes ASCII art des layouts
   - Palette de couleurs et typographie (alignée sur charte Memoways)
   - Micro-interactions et animations

### 2.3 Phase de développement via "vibe coding" (Semaine 2-3)

**Objectif** : Transformer les spécifications en application fonctionnelle.

**Workflow utilisé** :

1. **Import des documents markdown dans Antigravity (Google)**
   - Antigravity = application de "vibe coding" de Google
   - Upload des 4 documents markdown comme contexte
   - L'IA dispose ainsi de toutes les spécifications pour générer le code

2. **Génération de l'application web via prompts itératifs**
   
   **Itération 1 : Structure de base**
   - Prompt : "Génère la structure HTML de base avec toutes les sections définies dans le document de spécifications fonctionnelles"
   - Résultat : Fichier index.html avec structure complète mais contenu placeholder
   
   **Itération 2 : Styling et layout**
   - Prompt : "Applique le design défini dans le guide UI/UX, avec la palette de couleurs Memoways et le responsive design"
   - Résultat : CSS Tailwind appliqué, layout responsive fonctionnel
   
   **Itération 3 : Contenu réel**
   - Prompt : "Remplace tous les placeholders par le contenu réel du document Guide de contenu"
   - Résultat : Application avec contenu complet et cohérent
   
   **Itération 4 : Interactivité**
   - Prompt : "Implémente les interactions : accordéons pour les sections, tabs pour les exemples, animations au scroll"
   - Résultat : JavaScript pour toutes les interactions définies
   
   **Itérations 5-8 : Refinements**
   - Corrections de bugs CSS (alignements, espacements)
   - Optimisation des animations (performance, fluidité)
   - Ajustements de contenu (longueur des textes, clarté)
   - Tests sur différents devices (desktop, tablet, mobile)

3. **Export et configuration locale**
   - Téléchargement du code généré depuis Antigravity
   - Création d'un dossier projet local : `/Users/ulrich/generative-ui-demo/`
   - Structure : 
     ```
     /generative-ui-demo/
       index.html          (page principale)
       /assets/
         /images/          (images et icônes)
       README.md           (documentation)
       .gitignore
     ```

### 2.4 Phase de déploiement et versioning (Semaine 3)

**Objectif** : Mettre le code dans le cloud et le rendre accessible.

**Actions réalisées** :

1. **Initialisation du repository Git local**
   ```bash
   cd /Users/ulrich/generative-ui-demo/
   git init
   git add .
   git commit -m "Initial commit - Generative UI Demo App"
   ```

2. **Création du repository GitHub**
   - Connexion à GitHub
   - Création d'un nouveau repository : `memoways/generative-ui-demo`
   - Configuration en repository public

3. **Synchronisation avec GitHub**
   ```bash
   git remote add origin https://github.com/memoways/generative-ui-demo.git
   git branch -M main
   git push -u origin main
   ```

4. **Configuration GitHub Pages (optionnel)**
   - Settings > Pages > Source: main branch
   - L'application devient accessible à : `https://memoways.github.io/generative-ui-demo/`

5. **Documentation du repository**
   - README.md complet avec :
     - Description du projet
     - Instructions d'installation locale
     - Contexte et objectifs
     - Liens vers les sources citées
     - Licence (probablement MIT pour un démonstrateur)

### 2.5 Apprentissages et prochaines étapes

**Ce qui a fonctionné** :

- **Documentation exhaustive en amont** : Les 4 documents markdown ont permis une génération de code très précise et fidèle à la vision
- **Itérations courtes et ciblées** : Plutôt qu'un gros prompt, des séries de petits prompts focalisés ont donné de meilleurs résultats
- **Contexte partagé** : Antigravity ayant accès aux 4 documents simultanément, l'IA maintenait la cohérence globale
- **Pas de backend nécessaire** : Le choix d'un site statique a évité toute complexité de déploiement

**Défis rencontrés** :

- **Hallucinations CSS** : L'IA générait parfois des classes Tailwind inexistantes, nécessitant corrections manuelles
- **Inconsistences de contenu** : Malgré les specs, quelques phrases générées ne correspondaient pas au ton Memoways (trop corporate)
- **Performance des animations** : Premières versions avaient des animations trop lourdes, nécessitant optimisation

**Améliorations futures** :

1. **Version interactive avancée** : Ajouter des simulateurs permettant à l'utilisateur de voir la différence document vs instrument en temps réel
2. **Cas d'usage sectoriels** : Créer des onglets spécifiques pour théâtre, cinéma, associations culturelles
3. **Générateur de prompts** : Intégrer un mini-outil permettant aux visiteurs de générer leurs propres artifacts sur place
4. **Analytics légers** : Comprendre quelles sections intéressent le plus (sans tracker invasif)

### 2.6 Recette détaillée (pour reproductibilité)

**Si quelqu'un veut reproduire ce processus** :

1. **Phase recherche** (2-3 jours)
   - Identifier 3-4 sources complémentaires sur votre sujet
   - Les lire attentivement et prendre des notes structurées
   - Dégager les concepts clés et leur interconnexion

2. **Phase documentation** (3-4 jours)
   - Créer un document "Contexte et sources" (comme celui-ci)
   - Créer un document "Spécifications fonctionnelles" listant toutes les features
   - Créer un document "Spécifications techniques" avec l'architecture
   - Créer un document "Guide contenu et UI/UX" avec textes et wireframes

3. **Phase développement** (2-3 jours)
   - Choisir un outil de vibe coding (Antigravity, Lovable, Bolt, Cursor, Replit)
   - Uploader tous vos documents markdown dans l'outil
   - Itérer par petits prompts ciblés (structure, puis style, puis contenu, puis interactions)
   - Tester fréquemment dans le navigateur

4. **Phase déploiement** (1 jour)
   - Exporter le code généré
   - Créer un repository Git local
   - Pousser sur GitHub
   - Configurer GitHub Pages ou autre hébergement statique
   - Documenter

**Temps total estimé** : 8-14 jours selon complexité et itérations nécessaires.

---

## Conclusion

Cette application démonstrateur incarne les concepts qu'elle explique : c'est un **artifact interactif généré** qui remplace ce qui aurait pu être un document PDF statique ou une présentation PowerPoint.

Le processus de création lui-même démontre la faisabilité et l'efficacité du "vibe coding" : en 2-3 semaines, une personne seule (sans être développeur full-stack) peut créer une application web professionnelle en combinant :

- **Recherche et curation** rigoureuses
- **Documentation structurée** et détaillée  
- **Génération assistée par IA** via outils de vibe coding
- **Itérations rapides** et tests fréquents
- **Versioning professionnel** avec Git/GitHub

Ce processus est **reproductible** et **enseignable**, ce qui le rend particulièrement pertinent pour les clients de Memoways cherchant à gagner en autonomie numérique.

---

**Document créé** : Novembre 2025  
**Auteur** : Ulrich Fischer (Memoways)  
**Contexte** : Documentation d'un projet de démonstration Generative UI  
**Licence** : Usage interne Memoways & partage avec clients/partenaires
