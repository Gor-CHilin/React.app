import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = props => {
	let state = props.dialogsPage

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} key={d.id} id={d.id} />
	))
	let messagesElements = state.message.map(m => (
		<Message message={m.message} key={m.id} />
	))

	let addNewMessage = values => {
		props.sendMessage(values.newMessageBody)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
	AddMessageForm
)

export default Dialogs
