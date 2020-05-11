import { CommonActions } from "@react-navigation/native";

export default CustomNavigation = {
    gotoLogin(props) {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Login' }
                ],
            })
        );
    }
}