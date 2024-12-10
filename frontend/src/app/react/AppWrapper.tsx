import { app } from "@src/app/main.ts";
import {DependenciesProvider} from "./DependenciesProvider.tsx";
import {BrowserRouter} from "react-router-dom";
import Router from "@src/routes";

export const AppWrapper = () => {
  return (
    <DependenciesProvider dependencies={app.dependencies}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </DependenciesProvider>
  );
};
