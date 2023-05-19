import "./pages/index.scss";
import {
  popupMenu,
  headerMenuButton,
} from "./utils/constants.js";
import Popup from "./components/Menu.js";

const modal = new Popup(popupMenu, headerMenuButton);
modal.setListeners();