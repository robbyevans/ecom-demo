import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
import * as S from "./AppStyles";
import { ProductCard } from "./components/ProductCard";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { ProductModal } from "./components/ProductModal";
import { products } from "./data/products";

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
