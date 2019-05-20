import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);


    useEffect(() => {
            (async (resource) => {
                const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);

                setResources(response.data);

            })(resource);
        }, [resource]
    );

    return (
        <div>
            <ul> {resources.map(row => <li key={row.id}>{row.title}</li>)} </ul>
        </div>
    );
};
export default ResourceList;