import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AppWrapper} from "@src/app/react/AppWrapper.tsx";
import "@src/styles/theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
