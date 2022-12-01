import { fakeListings } from "./fakedata";
import { db } from "../database";

export const getAllListingsRoute = {
    method : 'GET',
    path : '/api/listings',
    handler : async (req,h) =>{
        // console.log(results);
        // const {results} = fakeListings;
        // const results = await db.query('SELECT * FROM listings');
        try {
            const {results} = await db.query('SELECT * FROM listings');
            // console.log("BLACK SHEEP");
            // console.log(await db.query('SELECT * FROM listings'));
            return results;
            // return await db.query('SELECT * FROM listings');
            // return fakeListings;
        } catch (error) {
            console.log(error);
        }

    }
}