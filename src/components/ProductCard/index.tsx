import * as S from "./styles";
import { motion } from "framer-motion";

interface ProductProps {
  product: any;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ProductCard = ({
  product,
  onClick,
  onAddToCart,
}: ProductProps) => {
  return (
    <S.Card
      as={motion.div}
      layoutId={`product-${product.id}`}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <S.Image src={product.image} alt={product.name} />
      <S.Name>{product.name}</S.Name>
      <S.Category>{product.category}</S.Category>
      <S.Footer>
        <S.Price>${product.price}</S.Price>
        <S.AddButton
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(e);
          }}
        >
          Add to Cart
        </S.AddButton>
      </S.Footer>
    </S.Card>
  );
};
