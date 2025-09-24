import { type FC } from "react";
import { MainLayout, ThemeProvider } from "./Design";
import { AppRouter, RouterProvider } from "./Routing";

export const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </RouterProvider>
    </ThemeProvider>
  );
};
