export default function({ dispatch }) {
    return next => action => {
        // If the action does not have a payload or promise, go ahead
        if (!action.payload || !action.payload.then) {
            return next(action);
        }

        // Let promise resolve and dispatch action again with the response data
        action.payload.then(function(response){

            const responseFormated = response.data.apartments.map(function(apartment){

                // Get minimum price per night
                const minPrice = apartment.apartmentSimples.reduce(function(price, simple){
                    let newPrice = price;
                    if (price === 0 || price > simple.minDayPrice) {
                        newPrice = simple.minDayPrice;
                    }
                    return newPrice;
                }, 0);

                const overViewApartment = apartment.apartmentSimples[0];

                const name = overViewApartment.apartmentTypeTitle + ' in ' + apartment.lowestRegionName;

                const photos = overViewApartment.photos.map(function(photo){
                    return `https://static.holidu.com/images/${overViewApartment.providerPhotoDirectory}/${overViewApartment.apartmentId}/m/${photo}.jpg`;
                });
                return {
                    id: apartment.apartmentId,
                    name: name,
                    photos: photos,
                    price: minPrice,
                    rating: apartment.holiduScore,
                    countOfFeedbacks: apartment.countOfFeedbacks
                };
            });
            const newAction = {...action, payload: responseFormated};
            dispatch(newAction);
        });
    }
}