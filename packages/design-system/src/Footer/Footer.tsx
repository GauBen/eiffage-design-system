import { ReactNode } from "react";
import classes from "./styles.module.css";

export const Footer = ({ children }: { children: ReactNode }) => (
  <footer className={classes.footer}>
    {children}
    <div className={classes.squares} aria-hidden="true">
      <div />
      <div />
      <div />
      <div />
    </div>
  </footer>
);

export const FooterSocialColumn = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className={classes.socialColumn}>
    <h2>{title}</h2>
    {children}
  </div>
);

export const FooterLinkColumn = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className={classes.linkColumn}>
    <h2>{title}</h2>
    {children}
  </div>
);
