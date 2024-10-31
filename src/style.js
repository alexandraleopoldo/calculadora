import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
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
  justify-content: center;
  width: 40%;
  height: 70%;

  @media (max-width: 800px) {
    width: 90%;
    height: 60%;
    justify-content: start;
  }
`;

export const H1 = styled.h1`
  color: #901f4b;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 10px;

  @media (max-width: 800px) {
    padding: 10px;
    width: 250px;
    margin-left: 68px;
  }
`;

export const P = styled.p`
  color: #901f4b;
  text-align: center;
  margin-top: 10px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #bd5f84;
  margin-top: 16px;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
  }
`;

export const H2 = styled.h2`
  color: #901f4b;
  text-align: center;
  margin-top: 20px;
`;
