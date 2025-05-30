import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = dispatch => {
	return {
		sendMessage: newMessageBody => {
			dispatch(sendMessageCreator(newMessageBody))
		},
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
	
)(Dialogs)
