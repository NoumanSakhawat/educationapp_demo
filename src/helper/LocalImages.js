import React from "react";
import { heightSize } from "../constants/sizes";
import GoogleSVG from "../../assets/images/svg/google.svg";
import FacebookSVG from "../../assets/images/svg/facebook.svg";

export const sizesSVGs = {
    social: heightSize._04
}
export const SVGImage = {
    Google() {
        return (<GoogleSVG height={sizesSVGs.social} width={sizesSVGs.social} />)
    },
    Facebook() {
        return (<FacebookSVG height={sizesSVGs.social} width={sizesSVGs.social} />)
    }
}

export default {
    logo: require("../../assets/images/LOGO.png"),
    google: require("../../assets/images/svg/google.svg"),
    facebook: require("../../assets/images/svg/facebook.svg"),
}