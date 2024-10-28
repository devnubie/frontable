import React, { useMemo } from 'react';
import Postlist from '../components/Postlist';
import DUMMYPOST from '../utils/Dummy'
import { useParams, useLocation } from 'react-router-dom';

export default function Postpage() {
    const userId = useParams().userId;
    const catId = useParams().catId;
    const tagId = useParams().tagId;
    const search = useParams().search

    const location = useLocation();

    console.log('Current URL:', location.pathname + location.search); // For debugging
    console.log('Parameters:', { userId, catId, tagId, search }); // For debugging

    const filteredPosts = useMemo(() => {
        return DUMMYPOST.filter(post => {
            const categoryMatch = catId ? post.categories.includes(catId) : true;
            const tagsMatch = tagId ? tagId.split(',').every(tag => post.tags.includes(tag)) : true;
            const searchMatch = search ? post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase()) : true;
            const userMatch = userId ? post.creator.name.toLowerCase() === userId.toLowerCase() : true;

            // Debugging outputs
        console.log(`Post ID: ${post.id}`);
        console.log(`Category Match: ${categoryMatch}`);
        console.log(`Tags Match: ${tagsMatch}`);
        console.log(`Search Match: ${searchMatch}`);
        console.log(`User Match: ${userMatch}`);

            return categoryMatch && tagsMatch && searchMatch && userMatch;
        });
    }, [catId, tagId, search, userId]);

    if (filteredPosts.length === 0) {
        return <div>No posts found.</div>; // This message shows when no posts match the criteria
    }
  
    return (
    <Postlist items={filteredPosts}/>
  )
}
