import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ContextProps = {
  showLandingPage: boolean;
  setShowLandingPage: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<ContextProps>({
  showLandingPage: true,
  setShowLandingPage: () => {
    throw new Error("Context has not been initialized yet");
  },
});

export const useAppContext = () => useContext(Context);
