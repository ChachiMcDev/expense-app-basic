import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export default ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
            {numeral(amount).format('$ 0,0[.]00')} 
            --- 
            {moment(createdAt).format('MMM D YYYY')}</p>
    </div>
);




