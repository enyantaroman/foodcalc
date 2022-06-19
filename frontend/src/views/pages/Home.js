import { Container } from "@mui/material";
import AccountMenu from "../components/molecules/AccountMenu";
import Logo from "../components/molecules/Logo";
import NavMenu from "../components/molecules/NavMenu";
import CustomBreadCrumbs from "../components/molecules/CustomBreadCrumbs";
import HomeButton from "../components/molecules/buttons/HomeButton";
import CopyRight from "../components/atoms/CopyRight";
import CreateButton from "../components/molecules/buttons/CreateButton";
import DeleteButton from "../components/molecules/buttons/DeleteButton";
import EditButton from "../components/molecules/buttons/EditButton";
import UpdateButton from "../components/molecules/buttons/UpdateButton";
import ResetButton from "../components/molecules/buttons/ResetButton";
import Calcbutton from "../components/molecules/buttons/CalcButton";
import ReCalcButton from "../components/molecules/buttons/ReCalcButton";
import RegisterButton from "../components/molecules/buttons/RegisterButton";
import LoginButton from "../components/molecules/buttons/LoginButton";
import TextInput from "../components/molecules/inputs/TextInput";
import TextArea from "../components/molecules/inputs/TextArea";
import NumberInput from "../components/molecules/inputs/NumberInput";
import PasswordInput from "../components/molecules/inputs/PasswordInput";
import SelectBox from "../components/molecules/inputs/SelectBox";
import CustomPagination from "../components/molecules/CustomPagination";
import CardItem from "../components/molecules/CardItem";
import CustomModal from "../components/molecules/CustomModal";

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <h1>ホーム</h1>
        <Logo />
        <NavMenu />
        <AccountMenu />
        <CustomBreadCrumbs />
        <HomeButton />
        <CopyRight />
        <CreateButton />
        <DeleteButton />
        <EditButton />
        <UpdateButton />
        <ResetButton />
        <Calcbutton />
        <ReCalcButton />
        <RegisterButton />
        <LoginButton />
        <TextInput />
        <TextArea />
        <NumberInput />
        <PasswordInput />
        <SelectBox />
        <CustomPagination />
        <CardItem />
        <CustomModal />
      </Container>
    </>
  );
};

export default Home;