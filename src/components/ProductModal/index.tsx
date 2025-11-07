import * as S from "./styles";
import { motion } from "framer-motion";

interface ProductModalProps {
  product: any;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <S.Backdrop
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <S.Modal
        as={motion.div}
        layoutId={`product-${product.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <S.Image src={product.image} alt={product.name} />
        <S.Name>{product.name}</S.Name>
        <S.Description>{product.description}</S.Description>
        <S.CloseButton onClick={onClose}>Close</S.CloseButton>
      </S.Modal>
    </S.Backdrop>
  );
};
