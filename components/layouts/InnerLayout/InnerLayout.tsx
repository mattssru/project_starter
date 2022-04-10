import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@material-ui/core";
import BreadcrumpDefault from "components/BreadcrumpDefault";

const Header = dynamic(import("../Header"));
const Footer = dynamic(import("../Footer"));

const InnerLayout = (props: any) => {
  const { children, breadcrumb = [] } = props;
  return (
    <Box>
      <Header />
      <article>
        <section>
          <BreadcrumpDefault items={breadcrumb} />
          {children}
        </section>
      </article>
      <Footer />
    </Box>
  );
};

export default InnerLayout;
