import Card08, { type Card08Props } from "./card-08"

interface CardGridProps {
  items: Card08Props[]
  gridTitle?: string
}

const defaultCollections: Card08Props[] = [
  {
    title: "Summer Dress Collection",
    subtitle: "Fit with the latest trends",
    image: "https://assets.lummi.ai/assets/QmVQpR9kUDEiFupgWrzaUYVii2TLa5zE7h9XDU7okBFdyc?auto=format&w=450",
    badge: {
      text: "New",
      variant: "orange",
    },
    href: "#",
  },
  {
    title: "Autumn Essentials",
    subtitle: "Warm and cozy for the colder months",
    image: "https://assets.lummi.ai/assets/QmXFtkNH6GJy581VwChHZeQF6qfQM9bkLhF2kDh1px5qKB?auto=format&w=1500",
    badge: {
      text: "New",
      variant: "orange",
    },
    href: "#",
  },
  {
    title: "Winter Collection",
    subtitle: "Colorful for the festive season",
    image: "https://www.lummi.ai/api/pro/image/a06ede0d-63fb-4d99-be4c-9ba0840cf779?asset=original&auto=format&w=1500",
    badge: {
      text: "New",
      variant: "orange",
    },
    href: "#",
  },
  {
    title: "Spring Accessories",
    subtitle: "Hidden treasures for the spring season",
    image: "https://assets.lummi.ai/assets/QmPdy3qFqQF8gDQ6KuuUrRaqez3cbdeaYw3GMrxBynLfGd?auto=format&w=1500",
    badge: {
      text: "New",
      variant: "orange",
    },
    href: "#",
  },
]

export default function CardGrid({
  items = defaultCollections,
  gridTitle = "AI-Recommended Influencers",
}: CardGridProps) {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-white">
        <p className="text-lg">No items to display.</p>
      </div>
    )
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-6 backdrop-blur-sm bg-gradient-to-b from-transparent via-black/10 to-black/20 rounded-2xl py-8">
        {gridTitle && (
          <h2 className="mb-2 tracking-tighter text-3xl font-bold text-center text-white sm:text-4xl">{gridTitle}</h2>
        )}
        <p className="mb-12 text-lg text-center text-white/80 tracking-tight max-w-2xl mx-auto">
          Discover fashion influencers that match your style and aesthetic preferences.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center max-w-7xl mx-auto">
          {items.map((item, index) => (
            <Card08
              key={`${item.href}-${item.title}-${index}`}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              badge={item.badge}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
