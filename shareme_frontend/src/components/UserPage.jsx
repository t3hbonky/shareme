import React, { useEffect, useState } from 'react';
import { userQuery } from '../utils/data';
import { client } from '../client';

const UserPage = () => {
    const [ subdomain, setSubdomain ] = useState(null);
    const [ user, setUser ] = useState();

    useEffect(() => {
        const host = window.location.host;

        const arr = host
            .split('.')
            .slice(0, host.includes('localhost') ? -1 : -2);
        if(arr.length > 0) setSubdomain(arr[0]);
    })

    useEffect(() => {
        const query = userQuery(subdomain);
        client.fetch(query).then((data) => {
          setUser(data[0]);
        });
      }, [subdomain]);

    if( subdomain == null ) return (
        <div>
            No such page.
        </div>
    )

    return (
    <div>
        THIS USER PAGE EXISTS
    </div>
    )
}

export default UserPage
