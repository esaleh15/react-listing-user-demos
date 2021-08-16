import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {

	return (
		<>
			<div className={classes.backdrop} onClick={props.onConfirm}></div>
			<div className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<button type='button' onClick={props.onConfirm}>Okay</button>
				</footer>
			</div>
		</>
	);
};

export default Modal;