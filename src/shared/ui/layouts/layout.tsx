import { Box, Container } from "@radix-ui/themes";
import { ReactElement, ReactNode } from "react";

type LayoutProps = {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  navbar?: ReactNode;
  children: ReactElement;
};
export const Layout = (props: LayoutProps) => {
  const { footer, header, navbar, sidebar, children } = props;
  return (
    <Box className="p-1">
      {header}
      <Container>
        <main>{children}</main>
      </Container>
      <footer>{footer}</footer>
    </Box>
  );
};
