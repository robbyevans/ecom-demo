import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  /* Remove height: 100% */
  min-height: 320px; /* Set a consistent minimum height */

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.bg}; /* Add background for consistency */
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const Category = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* This will push footer to bottom */
  padding-top: 16px;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  color: #f5b301;
`;

export const AddButton = styled.button`
  background: #f5b301;
  border: none;
  color: #000;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    transform: scale(1.05);
    background: #ffc107;
    box-shadow: 0 4px 12px rgba(245, 179, 1, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;
