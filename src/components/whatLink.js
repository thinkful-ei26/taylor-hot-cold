import React from 'react'
import { WhatThe } from '../redux/reducer'; 
import { connect } from 'react-redux';

function WhatLink(props){
    return(
        <li><a onClick={props.WhatThe} className="what" href="#">What ?</a></li>
    );
}
export default connect(null, {WhatThe})(WhatLink); 