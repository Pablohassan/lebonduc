import React from 'react'
import { motion, Variants, MotionProps, AnimatePresence } from 'framer-motion'

// Types pour les composants motion selon la documentation officielle
type MotionHeaderProps = MotionProps & React.HTMLAttributes<HTMLElement>
type MotionAProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

// Composants motion typés
const MotionHeader = motion.header as React.FC<MotionHeaderProps>
const MotionA = motion.a as React.FC<MotionAProps>

// Données des plats avec images
const featuredDishes = [
  {
    id: 1,
    name: 'Foie Gras Maison',
    description: 'Foie gras d\'oie mi-cuit, chutney de figues et pain brioché toasté',
    price: '18 €',
    image: '/assets/foigras.webp',
    category: 'Entrée'
  },
  {
    id: 2,
    name: 'Saint-Jacques Poêlées',
    description: 'Saint-Jacques fraîches poêlées, purée de céleri et émulsion safran',
    price: '25 €',
    image: '/assets/rozoto.webp',
    category: 'Plat'
  },
  {
    id: 3,
    name: 'Entrecôte Grillée',
    description: 'Entrecôte de bœuf charolais, gratin dauphinois et légumes de saison',
    price: '28 €',
    image: '/assets/entrecote.webp',
    category: 'Plat'
  },
  {
    id: 4,
    name: 'Tarte Tatin',
    description: 'Tarte tatin traditionnelle, crème fraîche d\'Isigny et glace vanille',
    price: '8 €',
    image: '/assets/tartetatin.png',
    category: 'Dessert'
  }
]

const amenities = [

  'Climatisé',
  'Terrasse extérieure',
  'Parking gratuit',
  'Wi‑Fi gratuit',
  'Animaux acceptés',
]

const openingHours = [
  { day: 'Mardi', hours: '12:00–14:00 & 19:00–21:00' },
  { day: 'Mercredi', hours: '12:00–14:00 & 19:00–21:00' },
  { day: 'Jeudi', hours: '12:00–14:00 & 19:00–21:00' },
  { day: 'Vendredi', hours: '12:00–14:00 & 19:00–21:00' },
  { day: 'Samedi', hours: '19:00–21:30' },
  { day: 'Dimanche', hours: '12:00–14:00' },
]

// Animations
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
}

function Header({ onOpenMenu }: { onOpenMenu?: () => void }) {
  return (
    <MotionHeader
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <MotionA
            href="#"
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Le Bon Duc
          </MotionA>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">À propos</a></li>
            <li>
              <button
                onClick={onOpenMenu}
                className="text-gray-700 hover:text-amber-600 transition-colors cursor-pointer bg-transparent border-none"
              >
                La Carte
              </button>
            </li>
            <li><a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </MotionHeader>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Le Bon Duc Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up"

          style={{ animationDelay: '0.2s', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Hôtel Restaurant<br />Le Bon Duc
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 text-gray-400 animate-slide-up"
          style={{ animationDelay: '0.4s', textShadow: '4px 3px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Café • Bar • Hôtel • Restaurant<br />
          Une cuisine maison, préparée avec des ingrédients frais et de saison
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#dishes"
            className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors hover:scale-105 hover:-translate-y-1 active:scale-95"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Découvrir nos plats
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Réserver une table
          </a>
        </div>
      </div>
    </section>
  )
}

// Modal pour afficher les images en grand
function ImageModal({ image, onClose }: { image: any; onClose: () => void }) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return (
    <motion.div
      className="image-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="image-modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="image-modal-close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <img
          src={image.image}
          alt={image.name}
        />

        <div className="image-modal-info">
          <h3 className="image-modal-title">{image.name}</h3>
          <p className="image-modal-description">{image.description}</p>
          <div className="image-modal-price">{image.price}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Composant Carousel pour la section À propos
function ImageCarousel() {
  // Images du carousel
  const carouselImages = [
    { src: "/assets/caroussel/2024-12-10.webp", alt: "Le Bon Duc 2024" },
    { src: "/assets/caroussel/plats-duc.webp", alt: "Nos plats signature" },
    { src: "/assets/caroussel/viande-duc.webp", alt: "Viandes grillées" },
    { src: "/assets/caroussel/salade-duc.webp", alt: "Salades fraîches" },
    { src: "/assets/caroussel/cocktail-duc.webp", alt: "Cocktails artisanaux" },
    { src: "/assets/caroussel/unnamed (1).webp", alt: "Ambiance restaurant" }
  ]

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  // Carousel automatique
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change d'image toutes les 4 secondes

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
      {/* Images du carousel */}
      {carouselImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
            scale: index === currentImageIndex ? 1 : 1.1
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut"
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

      {/* Indicateurs de navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex
              ? 'bg-white scale-125 shadow-lg'
              : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Voir l'image ${index + 1}`}
          />
        ))}
      </div>



      {/* Boutons de navigation gauche/droite (optionnels) */}
      <button
        onClick={() => setCurrentImageIndex(prev =>
          prev === 0 ? carouselImages.length - 1 : prev - 1
        )}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Image précédente"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentImageIndex(prev =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        )}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Image suivante"
      >
        →
      </button>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="about-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre établissement chaleureux au cœur de la Gironde
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Situé à Les Billaux en Gironde, Le Bon Duc est un hôtel‑restaurant
              chaleureux qui marie tradition et modernité. Au restaurant, notre
              chef concocte des plats savoureux avec des produits locaux et de
              saison, pour satisfaire toutes les envies : viandes, poissons,
              options végétariennes et bien plus encore.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'hôtel propose des chambres confortables et un service attentionné.
              Que vous passiez pour un repas convivial, un séjour touristique ou
              une soirée étape, notre équipe vous accueille avec plaisir.
            </p>


          </motion.div>

          <motion.div
            className="relative"
            variants={scaleIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeaturedDishes() {
  return (
    <section id="dishes" className="dishes-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos plats signature</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de plats préparés avec passion et des produits d'exception
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredDishes.map((dish, _idx) => (
            <motion.div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {dish.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {dish.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir la carte complète
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">L'expérience Le Bon Duc</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une ambiance unique où tradition française rencontre modernité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🍷",
              title: "Cave à vins",
              description: "Une sélection exceptionnelle de vins français et internationaux"
            },
            {
              icon: "🌿",
              title: "Terrasse jardin",
              description: "Profitez de nos espaces extérieurs en toute saison"
            },
            {
              icon: "🏨",
              title: "Chambres d'hôtes",
              description: "Séjournez dans nos chambres confortables et élégantes"
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bar() {
  const [selectedImage, setSelectedImage] = React.useState<any>(null)

  const cocktails = [
    {
      id: 1,
      name: "Mojito",
      description: "Cassandre, citron vert, menthe, rhum, eau gazeuse",
      price: "9 €",
      image: "/assets/mojito.png",
      category: "alcoholic"
    },
    {
      id: 2,
      name: "Aperol Spritz",
      description: "Apérol, proseco, eau gazeuse",
      price: "9 €",
      image: "/assets/aperolspritz.png",
      category: "alcoholic"
    },
    {
      id: 3,
      name: "Black Mojito",
      description: "Cassandre, citron vert, menthe, vodka black, jus de fraise, eau gazeuse",
      price: "9 €",
      image: "/assets/black-cocktail.webp",
      category: "alcoholic"
    },
    {
      id: 4,
      name: "Pornstar Martini",
      description: "Vodka, sirop de vanille, fruit de la passion, proseco",
      price: "9 €",
      image: "/assets/pornstarmartini.png",
      category: "alcoholic"
    },
    {
      id: 5,
      name: "Virgin Mojito",
      description: "Cassandre, citron vert, menthe, limonade",
      price: "6 €",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
      category: "non-alcoholic"
    },
    {
      id: 6,
      name: "L'Exotique",
      description: "Jus d'ananas, jus de passion, sirop de vanille",
      price: "6 €",
      image: "/assets/exotique.png",
      category: "non-alcoholic"
    }
  ]

  return (
    <section className="bar-section text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre Bar & Cocktails</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre sélection de cocktails artisanaux, avec ou sans alcool,
            préparés avec des ingrédients frais et de qualité
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {cocktails.map((cocktail, _idx) => (
            <motion.div
              key={cocktail.id}
              className="cocktail-card relative"
              variants={scaleIn}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="cocktail-image"
                  onClick={() => setSelectedImage(cocktail)}
                />
                <span className={`cocktail-category ${cocktail.category}`}>
                  {cocktail.category === 'alcoholic' ? 'Avec alcool' : 'Sans alcool'}
                </span>
              </div>
              <div className="cocktail-content">
                <h3 className="cocktail-name">{cocktail.name}</h3>
                <p className="cocktail-description">{cocktail.description}</p>
                <div className="cocktail-price">{cocktail.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Réserver une table
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function MenuModal({ onClose }: { onClose: () => void }) {
  React.useEffect(() => {
    // Empêcher le scroll du body en arrière-plan mais permettre le scroll de la modal
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  return (
    <div className="menu-page fixed inset-0 z-50 overflow-y-auto" style={{ height: '100vh', overflowY: 'scroll' }}>
      <button className="menu-close-btn" onClick={onClose}>
        ×
      </button>

      <div className="menu-header">
        <h1 className="menu-title">La Carte du Bon Duc</h1>
      </div>

      <div className="menu-content">
        {/* Formules du midi */}
        <div className="menu-section">
          <h2 className="menu-section-title">Formules du midi</h2>
          <div className="formules-grid">
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Entrée du jour</div>
                </div>
                <div className="menu-item-price">6 €</div>
              </div>
            </div>
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Plat du jour</div>
                </div>
                <div className="menu-item-price">14 €</div>
              </div>
            </div>
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Dessert du jour</div>
                </div>
                <div className="menu-item-price">6 €</div>
              </div>
            </div>
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Entrée + Plat</div>
                </div>
                <div className="menu-item-price">16 €</div>
              </div>
            </div>
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Plat + Dessert</div>
                </div>
                <div className="menu-item-price">16 €</div>
              </div>
            </div>
            <div className="formule-item">
              <div className="menu-item">
                <div className="menu-item-content">
                  <div className="menu-item-name">Entrée + Plat + Dessert</div>
                </div>
                <div className="menu-item-price">20 €</div>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-content">
              <div className="menu-item-name">Menu enfant</div>
              <div className="menu-item-description">Nuggets de filet de poulet accompagnés de frites maison, sirop à l'eau et boule de glace</div>
            </div>
            <div className="menu-item-price">12 €</div>
          </div>
        </div>

        {/* Entrées */}
        <div className="menu-section">
          <h2 className="menu-section-title">Entrées</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Le vénitien</div>
                <div className="menu-item-description">Carpaccio, fine tranche de viande, sauce pesto, oignons frits, poudre de parmesan</div>
              </div>
              <div className="menu-item-price">8 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">La cocotte basquaise</div>
                <div className="menu-item-description">Chippiron compoté d'oignons et tomates, poivrons braisés avec chorizos + salade</div>
              </div>
              <div className="menu-item-price">10 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Le canard gras</div>
                <div className="menu-item-description">Foie gras mi-cuit au cognac chutney oignons, vinaigre de framboises, brioche toastée</div>
              </div>
              <div className="menu-item-price">18 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">La finesse du périgord</div>
                <div className="menu-item-description">Oeuf cuit à basse température en cocotte, crème, foie gras, truffe</div>
              </div>
              <div className="menu-item-price">14 €</div>
            </div>
          </div>
        </div>

        {/* Salades */}
        <div className="menu-section">
          <h2 className="menu-section-title">Salades</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">L'exotique</div>
                <div className="menu-item-description">Gambas panées au panko mangues, ananas, pommes, oranges, citrons vert, carottes, haricot vert et sa vinaigrette passion, graines de sésame</div>
              </div>
              <div className="menu-item-price">18 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">L'italienne</div>
                <div className="menu-item-description">Salade burrata crémeuse, tomates cerise multicolore, oignons frit, sésame, sauce pesto crème balsamique</div>
              </div>
              <div className="menu-item-price">14 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Mme césar</div>
                <div className="menu-item-description">Salade, tomates cerise, poulet croustillant, sauce césar, copeaux de parmesan et croûtons</div>
              </div>
              <div className="menu-item-price">16 €</div>
            </div>
          </div>
        </div>

        {/* Plats */}
        <div className="menu-section">
          <h2 className="menu-section-title">Plats</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Cabillaud gratiné</div>
                <div className="menu-item-description">Dos de cabillaud gratiné à l'aioli, semoule de carotte et caviar d'aubergine</div>
              </div>
              <div className="menu-item-price">25 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Mignon de porc</div>
                <div className="menu-item-description">Filet mignon de porc roti, sauce foie gras au cognac et purée maison la jarre de mémé</div>
              </div>
              <div className="menu-item-price">21 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Jarre de mémé</div>
                <div className="menu-item-description">Mijoté de boeuf et citrons confit dans sa jarre 24h avec une purée maison</div>
              </div>
              <div className="menu-item-price">24 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">L'agneau qui sourit</div>
                <div className="menu-item-description">Souris d'agneau braisée, jus au thym + purée</div>
              </div>
              <div className="menu-item-price">25 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Duck & honey</div>
                <div className="menu-item-description">Demi magret de canard grillé, sauce au miel et sa purée crémeuse</div>
              </div>
              <div className="menu-item-price">22 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">L'entrecôte de chez masonière 300g</div>
                <div className="menu-item-description">Frites / salades, échalote confit au gras de canard en chemise</div>
              </div>
              <div className="menu-item-price">26 €</div>
            </div>
          </div>
        </div>

        {/* Cocktails */}
        <div className="menu-section">
          <h2 className="menu-section-title">Cocktails</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Mojito</div>
                <div className="menu-item-description">Cassandre, citron vert, menthe, rhum, eau gazeuse</div>
              </div>
              <div className="menu-item-price">9 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Aperol spritz</div>
                <div className="menu-item-description">Apérol, proseco, eau gazeuse</div>
              </div>
              <div className="menu-item-price">9 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Espresso martini</div>
                <div className="menu-item-description">Kalua, vodka, sucre de canne, espresso</div>
              </div>
              <div className="menu-item-price">9 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Moscow mule</div>
                <div className="menu-item-description">Vodka grey goose, jus de citron vert, ginger beer</div>
              </div>
              <div className="menu-item-price">9 €</div>
            </div>
          </div>
        </div>

        {/* Virgin Cocktails */}
        <div className="menu-section">
          <h2 className="menu-section-title">Virgin Cocktails</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Mojito</div>
                <div className="menu-item-description">Cassandre, citron vert, menthe, limonade</div>
              </div>
              <div className="menu-item-price">6 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">L'exotique</div>
                <div className="menu-item-description">Jus d'ananas, jus de passion, sirop de vanille</div>
              </div>
              <div className="menu-item-price">6 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Le malésien</div>
                <div className="menu-item-description">Citron vert, ginger beer, sirop de canne</div>
              </div>
              <div className="menu-item-price">6 €</div>
            </div>
          </div>
        </div>

        {/* Desserts */}
        <div className="menu-section">
          <h2 className="menu-section-title">Les douceurs</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">Plaisir du bon duc</div>
                <div className="menu-item-description">Pomme caramélisée, pâte sablée, glace vanille</div>
              </div>
              <div className="menu-item-price">8 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">La griotte chocolatée</div>
                <div className="menu-item-description">Génoise cacao, crème chocolat griottes, copeau de chocolat, crème montée sucré</div>
              </div>
              <div className="menu-item-price">8 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">La norvégienne</div>
                <div className="menu-item-description">Meringue suisse, génoise vanille, glace marron praliné, amandes torréfiée</div>
              </div>
              <div className="menu-item-price">8 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">La douceur chocolat</div>
                <div className="menu-item-description">Mousse au chocolat noir, crème fouettée et copeaux de chocolat</div>
              </div>
              <div className="menu-item-price">8 €</div>
            </div>
          </div>
        </div>

        {/* Glaces */}
        <div className="menu-section">
          <h2 className="menu-section-title">Les glaces</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">1 boule</div>
                <div className="ice-cream-flavors">Parfums : vanille bourbon, pâte à tartiner chocolat noisette, nougat de montélimar, fraise senga, pamplemousse rose, barbe à papa, café pur arabica, rhum raisin, pomme verte, pistache de sicile</div>
              </div>
              <div className="menu-item-price">4 €</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-name">2 boules</div>
                <div className="ice-cream-flavors">Parfums : vanille bourbon, pâte à tartiner chocolat noisette, nougat de montélimar, fraise senga, pamplemousse rose, barbe à papa, café pur arabica, rhum raisin, pomme verte, pistache de sicile</div>
              </div>
              <div className="menu-item-price">6 €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact & Réservation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes là pour vous accueillir et répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Informations pratiques</h3>
            <div className="space-y-6">
              <div className="contact-info-item">
                <div className="contact-icon">
                  📍
                </div>
                <div className="contact-details">
                  <strong>Adresse</strong>
                  <span>16 Route de Paris, 33500 Les Billaux</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  📞
                </div>
                <div className="contact-details">
                  <strong>Téléphone</strong>
                  <span>0547111033</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  ✉️
                </div>
                <div className="contact-details">
                  <strong>E‑mail</strong>
                  <span>
                    <a href="mailto:lebonduc33500@gmail.com" className="text-amber-400 hover:text-amber-300">
                      lebonduc33500@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="opening-hours-card">
              <h3 className="text-2xl font-semibold mb-8 text-center">Horaires d'ouverture</h3>
              <div className="space-y-4">
                {openingHours.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="opening-hours-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className="text-amber-400">{item.hours}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="map-container">
            <iframe
              title="Le Bon Duc sur Google Maps"
              src="https://maps.google.com/maps?q=16%20Route%20de%20Paris%2033500%20Les%20Billaux&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Le Bon Duc</h4>
            <p className="text-gray-300">
              Hôtel restaurant traditionnel au coeur de la Gironde, offrant une cuisine française authentique et un accueil chaleureux.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Nos services</h4>
            <ul className="space-y-2">
              {amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Horaires</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Mardi - Vendredi : 12h-14h & 19h-21h</li>
              <li>Samedi : 19h-21h30</li>
              <li>Dimanche : 12h-14h</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Infos pratiques</h4>
            <ul className="space-y-2 text-gray-300">
              <li>16 Route de Paris</li>
              <li>33500 Les Billaux</li>
              <li>+33 6 07 58 86 84</li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800 text-gray-400">
          © {new Date().getFullYear()} Le Bon Duc – Tous droits réservés
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <div className="min-h-screen">
      <Header onOpenMenu={() => setShowMenu(true)} />
      <Hero />
      <About />
      <FeaturedDishes />
      <Experience />
      <Bar />
      <Contact />
      <Footer />
      {showMenu && <MenuModal onClose={() => setShowMenu(false)} />}
    </div>
  )
}

export default App