import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resources = useResources(resource);

    return (
        <div>
            <ul> {resources.map(row => <li key={row.id}>{row.title}</li>)} </ul>
        </div>
    );
};
export default ResourceList;