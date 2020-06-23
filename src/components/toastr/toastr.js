import React, {useContext, useEffect, useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {AppContext} from '../../state/context';
import {IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function ShowToastr({message, severity, x}) {
	const [open, setOpen] = useState(true);
	return (
		<Snackbar
			key={x}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
			open={open}
			autoHideDuration={2000}
			onClose={() => {
				setOpen(false);
			}}
			message={message}
			action={
				<React.Fragment>
					<IconButton
						size="small"
						aria-label="close"
						color="inherit"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon fontSize="small" />
					</IconButton>
				</React.Fragment>
			}
		></Snackbar>
	);
}

export default function Toastr() {
	const [state, dispatch] = useContext(AppContext);
	const [toasts, modifyToasts] = useState([]);
	useEffect(() => {
		if (state.toastr.message) {
			const toastAssign = state.toastr;
			modifyToasts([...toasts, toastAssign]);
			dispatch({type: 'REMOVE_TOASTR', payload: toastAssign});
		}
	}, [state.toastr]);

	return (
		<div>
			{toasts.map((e, i) => {
				return <ShowToastr key={i} x={i} message={e.message} severity={e.severity}></ShowToastr>;
			})}
		</div>
	);
}
