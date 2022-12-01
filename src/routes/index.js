import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingRoute } from "./getUserListings";
import { updateListingRoute } from "./updateListing";

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingRoute,
    getUserListingRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
];