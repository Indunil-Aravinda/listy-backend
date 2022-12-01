import { db } from '../database';

export const addViewToListingRoute = {
    method : 'POST',
    path : '/api/listings/{id}/add-view',
    handler : async (req,h) =>{
        const id = req.params.id;
        await db.query(
            'UPDATE listings SET views=views+1 WHERE id=?',
            [id],
        );
        const {results} = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id]
        );
        const updatedListInt = results[0];
        // const listing = fakeListings.find(list => list.id===id);
        if(!updatedListInt) throw (Boom.notFound('Listing does not exist with the id '+id));
        return updatedListInt;
    }
}