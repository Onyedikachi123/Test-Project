import { Button } from '@material-ui/core'
import React from 'react'
import {withStyles} from '@material-ui/core/styles'


const StyledButton = withStyles({
    root: {
        
        height: "34px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "10px",
        background: "#053582",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#053582"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomBtn(props) {
    return (
        <StyledButton variant="contained" >{props.txt}</StyledButton>
    )
}

export default CustomBtn
