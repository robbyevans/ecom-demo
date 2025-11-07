import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 24px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-height: 80vh;
    overflow-y: auto;
  }
`;

// Left Section Styles
export const ImageSection = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.bg};
  border-right: 1px solid ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding: 30px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
  border-radius: 16px;
  background: white;
`;

export const ImageThumbnails = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Thumbnail = styled.img<{ active?: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? "#f5b301" : "transparent")};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

// Right Section Styles
export const DetailsSection = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const CategoryBadge = styled.span`
  background: rgba(245, 179, 1, 0.1);
  color: #f5b301;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ProductName = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

export const Stars = styled.span`
  color: #ffc107;
  font-size: 1.1rem;
`;

export const ReviewCount = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
  margin: 0;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const PricingSection = styled.div`
  margin-top: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const CurrentPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #f5b301;
`;

export const OriginalPrice = styled.span`
  font-size: 1.2rem;
  text-decoration: line-through;
  opacity: 0.5;
`;

export const DiscountBadge = styled.span`
  background: #dc3545;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const StockStatus = styled.span`
  font-size: 0.9rem;
  color: #28a745;
  font-weight: 500;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;

export const QuantityLabel = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.buttonBg}dd;
  }
`;

export const QuantityValue = styled.span`
  width: 50px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const AddToCartButton = styled.button`
  background: #f5b301;
  color: #000;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 179, 1, 0.3);

  &:hover {
    background: #ffc107;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 179, 1, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BuyNowButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #f5b301;
    background: rgba(245, 179, 1, 0.1);
  }
`;

export const CartIcon = styled.span`
  font-size: 1.2rem;
`;

export const ShippingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 15px;
  background: rgba(245, 179, 1, 0.05);
  border-radius: 10px;
  border-left: 3px solid #f5b301;
`;

export const ShippingIcon = styled.span`
  font-size: 1.2rem;
`;

export const ShippingText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;
