import { db } from "../database";

export const getUserListingRoute = {
    method : 'GET',
    path : '/api/users/{userId}/listings',
    handler : async (req,h) =>{
        const userId = req.params.userId;
        const {results} = await db.query(
            'SELECT * FROM listings WHERE user_id=?',
            [userId]
        );
        if(!results) throw (Boom.notFound('Listing does not exist with the id '+id));
        return results;
    }
}