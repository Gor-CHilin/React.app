import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} key={d.id} id={d.id} />
	))
	let messagesElements = state.message.map(m => (
		<Message message={m.message} key={m.id} />
	))
	let newMessageBody = state.newMessageBody


	
	let addNewMessage = (values)=> {
	props.sendMessage(values.newMessageBody)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageFormRedux onSubmit={addNewMessage} />
		</div>
	)
}

const AddMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={'textarea'}
					name={'newMessageBody'}
					placeholder={'Enter your Message'}
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
	AddMessageForm
)

export default Dialogs
