import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background 0.5s ease, color 0.5s ease;
    font-family: "Inter", system-ui, sans-serif;
    overflow-x: hidden;
    width: 100vw;
    
  }

  .flying-circle {
    position: fixed;
    width: 16px;
    height: 16px;
    background: gold;
    border-radius: 50%;
    z-index: 999;
    pointer-events: none;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const Brand = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Cart = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: crimson;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  padding: 40px;
`;
