import { Dimensions } from "react-native";

const window = Dimensions.get("window");
 
const responsive = {
  sm: window.width < 480,
  md: window.width > 480 && window.width < 1024,
  lg: window.width > 1024,
};

export default responsive;
