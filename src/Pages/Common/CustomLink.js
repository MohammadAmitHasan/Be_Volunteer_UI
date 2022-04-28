import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const activeStyle = {
        fontSize: '18px',
        margin: '0 10px',
        padding: '5px 10px',
        borderRadius: '5px',
        textDecoration: 'none',
        color: match ? '#4A97F1' : 'black',
        borderBottom: match ? '2px solid #4A97F1' : '2px solid white',
        fontWeight: 'bold'
    }
    return (
        <div className='mb-3 md:mb-0'>
            <Link className='hover:bg-blue-200'
                style={activeStyle}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;