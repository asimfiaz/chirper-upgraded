import { useForm } from '@inertiajs/react';
import React from 'react';

export default function FollowButton({ chirp, followed }) {

    const { post } = useForm({
        user_id: chirp.user.id,
    });

    const follow = (e) => {
        e.preventDefault();

        post(route('follow'));
    };

    return (
        <>
            {followed ? (
                <button onClick={follow} className="bg-transparent hover:bg-blue-500 text-blue-700 text-xs hover:text-white ml-2 py-0 px-1 border border-blue-500 hover:border-transparent rounded">
                    Unfollow
                </button>
            ) : (
                <button onClick={follow} className="bg-transparent hover:bg-blue-500 text-blue-700 text-xs hover:text-white ml-2 py-0 px-1 border border-blue-500 hover:border-transparent rounded">
                    Follow
                </button>
            )}
        </>
    );
}
