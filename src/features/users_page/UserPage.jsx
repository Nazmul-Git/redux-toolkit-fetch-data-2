/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../users/usersSlice';

const UserPage = () => {

    const { isLoading, users, error } = useSelector(state => state.users);
    console.log(users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div>
            <h2 className='text-black text-2xl font-extrabold'>REDUX - TOOLKIT - FETCH </h2>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {
                users && users.map(u =><article key={u.id} className='bg-green-400 flex flex-col-3 justify-between  p-4 gap-4'>
                        <h2>USER NAME : {u.name}</h2>
                        <h2>EMAIL : {u.email}</h2>
                    </article>
                )
            }
        </div>
    );
};

export default UserPage;