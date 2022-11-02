import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_CLIENT, QUERY_VENDOR } from '../utils/queries';

import UserInfo from '../components/UserInfo';

export default function SingleUser() {
    const { type, username} = useParams();

    const { data, loading } = useQuery(type === 'client' ? QUERY_CLIENT : QUERY_VENDOR, {
        variables: { username: username }
    });

    const userData = data?.client || data?.vendor || {};
    console.log(userData)

    if (loading) {
        return <div>Loading...</div>
    }

    const renderInvetory = () => {
        if (type === 'vendor') {
            return (
                <div>Vendor Inventoy</div>
            )
        }
    }

    return (
        <div>
            <UserInfo userData={userData}></UserInfo>
            {renderInvetory()}
        </div>
    )
}