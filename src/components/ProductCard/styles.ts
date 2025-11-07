import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 12px;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Category = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Price = styled.span`
  font-weight: 700;
`;

export const AddButton = styled.button`
  background: #f5b301;
  border: none;
  color: #000;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
