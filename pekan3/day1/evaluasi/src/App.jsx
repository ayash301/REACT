import React from "react";
import ThemeProvider from "./contexts/ThemeProvider";
import UserProvider from "./contexts/UserProvider";
import LanguageProvider from "./contexts/LanguageProvider";
import NotificationProvider from "./contexts/NotificationProvider";
import CartProvider from "./contexts/CartProvider";

import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import ThemeCard from "./components/ThemeCard";
import ThemeText from "./components/ThemeText";
import UserInfo from "./components/UserInfo";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <div style={{ textAlign: "center", padding: 20 }}>
                <Header />
                <ThemeButton />
                <ThemeCard />
                <ThemeText />
                <UserInfo />
                <ProductList />
                <CartDisplay />
              </div>
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
