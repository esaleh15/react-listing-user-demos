import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props) => {
	return (
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
	)
};


const Modal = (props) => {

	return (
		<>
			{
				ReactDOM.createPortal(
					<Backdrop 
						onConfirm={props.onConfirm}
					/>, document.getElementById('backdrop-root')
				)
			}
			{
				ReactDOM.createPortal(
					<ModalOverlay 
						title={props.title} 
						message={props.message} 
						onConfirm={props.onConfirm} 
					/>, document.getElementById('overlay-root')
				)
			}
		</>
	);
};

export default Modal;