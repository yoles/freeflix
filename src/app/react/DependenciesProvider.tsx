import React, {createContext, useContext} from "react";
import {Dependencies} from "../dependencies.ts";

const DependenciesContext = createContext<Dependencies>(null as any);

type DependenciesProviderProps = {
    dependencies: Dependencies;
    children: React.ReactNode;
}
export const DependenciesProvider = ({dependencies, children}: DependenciesProviderProps) => {
    return (
        <DependenciesContext.Provider value={dependencies}>
            {children}
        </DependenciesContext.Provider>
    );
}

export const useDependencies = () => useContext(DependenciesContext);
