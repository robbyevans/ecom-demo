import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import * as S from "./AppStyles";
import { ProductCard } from "./components/ProductCard";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ProductModal } from "./components/ProductModal";

const products = [
  {
    id: 1,
    name: "Merlot Red Wine",
    category: "Wine",
    price: 25,
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548578.png",
    description: "A smooth and fruity Merlot perfect for any occasion.",
  },
  {
    id: 2,
    name: "Craft Lager Beer",
    category: "Beer",
    price: 10,
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548518.png",
    description: "Crisp golden lager brewed with passion.",
  },
  {
    id: 3,
    name: "Arabica Coffee",
    category: "Coffee",
    price: 12,
    image: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
    description: "Strong and aromatic Arabica beans roasted to perfection.",
  },
  {
    id: 4,
    name: "Cola Soda",
    category: "Soda",
    price: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548575.png",
    description: "Classic fizzy cola for a refreshing moment.",
  },
  {
    id: 5,
    name: "Premium Whisky",
    category: "Whisky",
    price: 45,
    image: "https://cdn-icons-png.flaticon.com/512/2548/2548525.png",
    description: "Aged oak barrel whisky with a smooth finish.",
  },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const toggleTheme = () => {
    // Safe fallback for browsers without ViewTransition API
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => setIsDark((prev) => !prev));
    } else {
      setIsDark((prev) => !prev);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const cartIcon = document.getElementById("cart-icon");
    if (!cartIcon) return;

    const circle = document.createElement("div");
    circle.className = "flying-circle";
    document.body.appendChild(circle);

    const rect1 = button.getBoundingClientRect();
    const rect2 = cartIcon.getBoundingClientRect();

    circle.style.left = `${rect1.left + rect1.width / 2}px`;
    circle.style.top = `${rect1.top + rect1.height / 2}px`;

    circle.animate(
      [
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        {
          transform: `translate(${rect2.left - rect1.left}px, ${
            rect2.top - rect1.top
          }px) scale(0.2)`,
          opacity: 0.5,
        },
      ],
      { duration: 600, easing: "ease-in-out" }
    ).onfinish = () => {
      circle.remove();
      setCartCount((c) => c + 1);
    };
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <S.GlobalStyle />
      <S.AppContainer>
        <S.Navbar>
          <S.Brand>🍷 Beverage Store</S.Brand>
          <S.Actions>
            <S.ToggleButton onClick={toggleTheme}>
              {isDark ? "🌙 Dark" : "🌞 Light"}
            </S.ToggleButton>
            <S.Cart id="cart-icon">
              🛒
              {cartCount > 0 && <S.CartCount>{cartCount}</S.CartCount>}
            </S.Cart>
          </S.Actions>
        </S.Navbar>

        <LayoutGroup>
          <S.Grid>
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelected(p.id)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </S.Grid>

          <AnimatePresence>
            {selected && (
              <ProductModal
                product={products.find((p) => p.id === selected)!}
                onClose={() => setSelected(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
