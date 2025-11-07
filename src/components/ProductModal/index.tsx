import * as S from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductModalProps {
  product: any;
  onClose: () => void;
  onAddToCart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ProductModal = ({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onAddToCart) {
      onAddToCart(e);
    }
  };

  // Calculate discount price (example: 15% off)
  const discountPercentage = 15;
  const discountPrice = product.price * (1 - discountPercentage / 100);

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
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <S.CloseIcon onClick={onClose}>×</S.CloseIcon>

        <S.ModalContent>
          {/* Left Section - Product Image */}
          <S.ImageSection>
            <S.ProductImage src={product.image} alt={product.name} />
            <S.ImageThumbnails>
              <S.Thumbnail active src={product.image} alt="Thumbnail 1" />
              <S.Thumbnail src={product.image} alt="Thumbnail 2" />
              <S.Thumbnail src={product.image} alt="Thumbnail 3" />
            </S.ImageThumbnails>
          </S.ImageSection>

          {/* Right Section - Product Details */}
          <S.DetailsSection>
            <S.CategoryBadge>{product.category}</S.CategoryBadge>
            <S.ProductName>{product.name}</S.ProductName>

            <S.Rating>
              <S.Stars>★★★★★</S.Stars>
              <S.ReviewCount>(128 reviews)</S.ReviewCount>
            </S.Rating>

            <S.Description>{product.description}</S.Description>

            <S.FeaturesList>
              <S.FeatureItem>✔ Premium Quality</S.FeatureItem>
              <S.FeatureItem>✔ Fast Shipping</S.FeatureItem>
              <S.FeatureItem>✔ 30-Day Return</S.FeatureItem>
            </S.FeaturesList>

            <S.PricingSection>
              <S.PriceContainer>
                <S.CurrentPrice>${discountPrice.toFixed(2)}</S.CurrentPrice>
                <S.OriginalPrice>${product.price.toFixed(2)}</S.OriginalPrice>
                <S.DiscountBadge>-{discountPercentage}%</S.DiscountBadge>
              </S.PriceContainer>
              <S.StockStatus>In Stock • Ready to Ship</S.StockStatus>
            </S.PricingSection>

            <S.QuantitySelector>
              <S.QuantityLabel>Quantity:</S.QuantityLabel>
              <S.QuantityControls>
                <S.QuantityButton onClick={() => handleQuantityChange(-1)}>
                  -
                </S.QuantityButton>
                <S.QuantityValue>{quantity}</S.QuantityValue>
                <S.QuantityButton onClick={() => handleQuantityChange(1)}>
                  +
                </S.QuantityButton>
              </S.QuantityControls>
            </S.QuantitySelector>

            <S.ActionButtons>
              <S.AddToCartButton onClick={handleAddToCart}>
                <S.CartIcon>🛒</S.CartIcon>
                Add to Cart • ${(discountPrice * quantity).toFixed(2)}
              </S.AddToCartButton>
              <S.BuyNowButton>Buy Now</S.BuyNowButton>
            </S.ActionButtons>

            <S.ShippingInfo>
              <S.ShippingIcon>🚚</S.ShippingIcon>
              <S.ShippingText>
                Free shipping • Delivery in 2-3 days
              </S.ShippingText>
            </S.ShippingInfo>
          </S.DetailsSection>
        </S.ModalContent>
      </S.Modal>
    </S.Backdrop>
  );
};
