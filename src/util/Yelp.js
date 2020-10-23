
const apiKey = 'mvEldFANWgbb_VfFfS0BqViGE5WF6sd9IgeGWlGoDl2B_Fq-7RSfF_lpXNnzq8166Vv2aAzElbuGTER7tbdg9maV9NqmJOK5ccE_MXeDl9IQHf9NS1nb3uR8sNCRX3Yx'

let Yelp = {};

Yelp.search = (term,location,sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            authorization: `Bearer ${apiKey}`
        }
    }).then((response) => {
        return response.json()
    }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
           return jsonResponse.businesses.map((business) => {
               return {
                   id: business.id,
                   imageSrc: business.image_url,
                   name: business.name,
                   address: business.location.address1,
                   city: business.location.city,
                   state: business.location.state,
                   zipCode: business.location.zip_code,
                   category: business.categories[0].title,
                   rating: business.rating,
                   reviewCount: business.review_count,
                   url: business.url
               }
           })
        }
    })
}

export default Yelp;