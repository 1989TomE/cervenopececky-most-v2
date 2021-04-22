import { useMemo, useState } from "react";
import { Context } from "./context";

type Props = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [landingPageSeen, setLandingPageSeen] = useState(false);

  const context = useMemo(
    () => ({
      landingPageSeen,
      setLandingPageSeen,
    }),
    [landingPageSeen, setLandingPageSeen]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default ContextProvider;
