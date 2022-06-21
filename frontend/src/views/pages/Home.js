import { Link } from "react-router-dom";
import BasicTemplate from "../components/templates/BasicTemplate";

const breadcrumbs = [
  <Link to={`/`} key="1">
      ホーム
  </Link>,
];

const Home = () => {
  return (
    <>
      <BasicTemplate breadcrumbs={breadcrumbs}>
        <h1>ホーム</h1>
      </BasicTemplate>
    </>
  );
};

export default Home;