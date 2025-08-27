# Changelog - Le Bon Duc Site Web

## [2.0.0] - 2024-12-19 - Version Professionnelle 2025

### ✨ Nouvelles fonctionnalités majeures

#### 🎨 Design & UI/UX
- **Migration vers Tailwind CSS 4.0** avec breaking changes
- **Intégration de Framer Motion** pour animations fluides
- **Suppression du menu redondant** remplacé par "Plats signature"
- **Nouvelle section "Expérience"** mettant en avant les services premium
- **Header avec effet glassmorphism** et navigation fixe
- **Hero section immersive** avec image de fond et CTA animés

#### 🖼️ Contenu enrichi
- **Images de plats haute qualité** via Unsplash
- **4 plats signature** avec descriptions détaillées
- **Catégorisation des plats** (Entrée, Plat, Dessert)
- **Badges de prix** et catégories sur les cartes
- **Section expérience** avec icônes et descriptions

#### 🚀 Performance & Technique
- **Vite comme bundler** pour un développement ultra-rapide
- **Hot Module Replacement (HMR)** pour le développement
- **TypeScript strict** avec types optimisés
- **PostCSS** avec autoprefixer pour la compatibilité
- **Responsive design mobile-first** avec breakpoints optimisés

#### 🎭 Animations & Interactions
- **Animations d'entrée** : fadeInUp, scaleIn, stagger
- **Effets de survol** : lift, scale, glow
- **Transitions fluides** entre les sections
- **Scroll-triggered animations** avec viewport detection
- **Micro-interactions** sur les boutons et cartes

#### 🎯 Sections du site
1. **Header** - Navigation fixe avec glassmorphism
2. **Hero** - Accueil immersif avec CTA animés
3. **À propos** - Présentation + services + image
4. **Plats signature** - 4 plats avec images et descriptions
5. **Expérience** - Services premium (cave, terrasse, chambres)
6. **Contact** - Infos pratiques + horaires + carte
7. **Footer** - Liens utiles et informations

### 🔧 Améliorations techniques

#### CSS & Styling
- **Variables CSS personnalisées** pour la cohérence
- **Grid et Flexbox** pour des layouts modernes
- **Shadows et bordures** arrondies pour la profondeur
- **Gradients et overlays** pour l'immersion
- **Scrollbar personnalisée** avec thème cohérent

#### Responsive Design
- **Mobile-first approach** avec breakpoints optimisés
- **Grid responsive** qui s'adapte à tous les écrans
- **Images optimisées** avec lazy loading
- **Navigation mobile** adaptée aux petits écrans

#### Accessibilité
- **Focus rings** personnalisés pour la navigation clavier
- **Contrastes optimisés** pour la lisibilité
- **Transitions** pour réduire la motion sickness
- **Alt text** descriptifs pour toutes les images

### 📱 Compatibilité
- **Navigateurs modernes** : Chrome, Firefox, Safari, Edge
- **Mobile** : iOS Safari, Chrome Mobile
- **Tablettes** : iPad, Android tablets
- **Desktop** : Windows, macOS, Linux

### 🚀 Scripts disponibles
- `npm run dev` - Serveur de développement Vite
- `npm run build` - Build de production optimisé
- `npm run preview` - Prévisualisation de la production

### 📦 Dépendances ajoutées
- `tailwindcss@next` - Framework CSS 4.0
- `framer-motion` - Animations React
- `autoprefixer` - Compatibilité navigateurs
- `@types/react` - Types TypeScript React
- `@types/react-dom` - Types TypeScript React DOM

---

## [1.0.0] - 2024-12-19 - Version initiale

### ✨ Fonctionnalités de base
- Site React avec TypeScript
- Menu complet avec toutes les catégories
- Informations de contact et horaires
- Design inspiré du site Restaurant Ressources
- Responsive design basique

### 🔧 Technologies
- React 17 avec UMD
- CSS personnalisé
- TypeScript basique
- Serveur de développement simple
