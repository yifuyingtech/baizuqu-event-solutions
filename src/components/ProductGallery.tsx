import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, products } from "@/data/products";

const ProductGallery = () => {
  const [active, setActive] = useState("tents");
  const filtered = products.filter((p) => p.category === active);
  const activeCat = categories.find((c) => c.id === active);

  return (
    <section id="equipment" className="py-24 bg-surface">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-2">
          Equipment <span className="text-gradient-orange">Rental</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          {activeCat?.zh} — {activeCat?.en}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === cat.id
                  ? "bg-gradient-orange text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat.zh}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.chineseName}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-0.5">{product.chineseName}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{product.englishName}</p>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((f, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full text-center py-2.5 rounded-lg bg-gradient-orange text-primary-foreground text-sm font-bold hover:shadow-md transition-shadow"
                  >
                    快速預約
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductGallery;
