import "./pages/index.scss";
import {
  menu,
  headerMenuButton,
} from "./utils/constants.js";
import Menu from "./components/Menu.js";

const modal = new Menu(menu, headerMenuButton);
modal.setListeners();