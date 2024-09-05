import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        height: window.innerHeight,
        padding: '3% 0%',
        backgroundColor: '#EBEBEB'
    },
    container: {
        padding: '30px',
        margin: '0px auto',
        backgroundColor: '#FFFFFF',
        width: '82.5%',
    },
    img: {
        width: '400px',
        objectFit: 'contain',
        marginBottom: '5%'
    },
    button: {
        color: '#3484fa',
        width: '100%'
    }
}));
export default useStyles;
