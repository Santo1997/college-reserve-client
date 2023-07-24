import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>College Reserve | {title}</title>
    </Helmet>
  );
};

export default Title;
