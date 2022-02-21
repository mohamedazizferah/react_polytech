import Button from '@mui/material/Button'; 
import { TextField } from '@mui/material';

function Form(){
    let input = (<TextField id="standard-basic" label="Name" variant="standard" />);
    let button = <Button variant="contained" color="success">submit</Button>;
    let form = (
        <form>
        {input}
        {button}
        </form>
    );
    return form;
}
export default Form;