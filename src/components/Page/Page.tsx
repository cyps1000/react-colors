/**
 * Imports the component styles
 */
import "./Page.css";

/**
 * Displays the component
 */
export const Page: React.FC = (props) => {
  const { children } = props;

  return <section className="page">{children}</section>;
};
