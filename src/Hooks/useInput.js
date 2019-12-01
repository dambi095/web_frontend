import { useState } from "react";

export default defaultValue => {
    const [value, setValue] = useState(defaultValue);
    
    // console.log("*-*-*-*-* search value:", value);
    
    const onChange = e => {
        const {
            target: { value }
        } = e ;

        setValue(value);
    };

    return { value, onChange };
};