import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ContextProps = {
  landingPageSeen: boolean;
  setLandingPageSeen: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<ContextProps>({
  landingPageSeen: false,
  setLandingPageSeen: () => {
    throw new Error("Context has not been initialized yet");
  },
});

export const useAppContext = () => useContext(Context);
