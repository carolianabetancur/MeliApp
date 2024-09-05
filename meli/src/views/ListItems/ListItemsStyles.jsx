import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        height: window.innerHeight,
        padding: '3% 0%',
        backgroundColor: '#EBEBEB'
    },
    container: {
        padding: '10px',
        margin: '0px auto',
        backgroundColor: '#FFFFFF',
        width: '82.5%'
    },
    freeShippingIcon: {
        color: '#000000',
        backgroundColor: '#06cc62',
        borderRadius: '50%',
        padding: '3px'
    },
    divider: {
        margin: '10px 0px',
        width: '97%',
        border: '1px solid #EEEEEE'
    },
}));
export default useStyles;
