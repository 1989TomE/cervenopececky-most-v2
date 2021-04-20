import HomeNavigation from "@src/components/Navigation/HomeNavigation";
import { PageWrapper } from ".";

type Props = {
  children?: React.ReactNode;
};

const HomeSubPageWrapper = ({ children }: Props) => {
  return (
    <PageWrapper>
      {children}
      <div>
        <HomeNavigation />
      </div>
    </PageWrapper>
  );
};

export default HomeSubPageWrapper;
