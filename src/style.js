import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://wallpapers.com/images/hd/red-and-blue-calculators-yxm0myfzuym67431.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    background-image: url("https://e0.pxfuel.com/wallpapers/361/16/desktop-wallpaper-flat-polygons-mountains-iphone-android-abstract-abstract-flat-android.jpg");
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 500px;
  height: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;

  @media (max-width: 800px) {
    width: 90%;
    padding: 10px;
  }
`;

export const H1 = styled.h1`
  color: #901f4b;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;

  @media (max-width: 800px) {
    padding: 12px;
    font-size: 0.9rem;
  }
`;

export const P = styled.p`
  color: #901f4b;
  text-align: center;
  margin-top: 10px;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #bd5f84;
  margin-top: 16px;
  border-radius: 8px;
  font-size: 1rem;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #901f4b;
  }

  @media (max-width: 800px) {
    width: 80px;
    height: 35px;
    font-size: 0.9rem;
  }
`;

export const H2 = styled.h2`
  color: #901f4b;
  text-align: center;
  margin-top: 20px;
`;
