import { app } from "../main.ts";
import {DependenciesProvider} from "./DependenciesProvider.tsx";
import {BrowserRouter} from "react-router-dom";
import Router from "../../routes";

export const AppWrapper = () => {
  return (
    <DependenciesProvider dependencies={app.dependencies}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </DependenciesProvider>
  );
};
