import {addMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (value) => {
            dispatch(addMessageAC(value))
        },
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs);
