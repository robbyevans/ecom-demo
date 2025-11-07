import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  padding: 40px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;
