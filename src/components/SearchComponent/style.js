import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: 30,
		textAlign: 'center',
	},
	form: {
		display: 'flex',
		alignItems: 'center',
	},
	textField: {
		width: '350px',
		marginRight: '50px',
	},
	inputAndButton: {
		display: 'flex',
		justifyContent: 'center',
	},
}));

export default useStyles;
