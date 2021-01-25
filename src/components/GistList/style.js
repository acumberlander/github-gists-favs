import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	gistContainer: {
		width: '100%',
		height: 700,
		border: '1px solid',
		overflow: 'auto',
	},
	gistList: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		padding: 20,
	},
}));

export default useStyles;
