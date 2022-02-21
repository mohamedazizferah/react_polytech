import { Button } from "@mui/material";

function Car(props){
    const carInfo = { name:"Ford", model:"mustang"};
    return (<div style={{ margin:'1rem'}}><Button variant="contained" onClick={() =>props.handleClick(carInfo.model)}>Show Model</Button></div>);
}
export default Car;