import { useMemo, useState } from "react";
import { Context } from "./context";

type Props = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const context = useMemo(
    () => ({
      showLandingPage,
      setShowLandingPage,
    }),
    [showLandingPage, setShowLandingPage]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
