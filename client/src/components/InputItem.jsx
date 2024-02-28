// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';


const InputItem =() => {
    return(
        <Fragment>
            <h1 className='text-center mt-5'>Input Item</h1>
            <form >
                <input type="text" />
                <button>Add</button>
            </form>
        </Fragment>
    );
};

export default InputItem;