import React from "react";
import {
    Button
}  from './styles';

function ButtonComponent({Text, Onclick}) {
    return <Button onClick={Onclick}>{Text}</Button>
}

export default ButtonComponent;