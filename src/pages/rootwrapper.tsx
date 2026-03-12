import { Fragment, useEffect, type ReactNode } from "react";
import { data$, setAttributes } from "../shared/services/switcherServices";


interface RootWrapperProps {
  children: ReactNode;
}

function RootWrapper({ children }: RootWrapperProps) {
  useEffect(() => {
    // Subscribe to state changes
    const subscription = data$.subscribe(() => {
      setAttributes(); // Update <html> attributes when state changes
    });
    // Initial attribute setup
    setAttributes();

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default RootWrapper;

