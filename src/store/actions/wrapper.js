export default promise => (
    promise
        .then(({data}) => ({ data, error: null }))
        .catch(error => {
            console.log('error::',error)
                error = !error.response
          ? 'error.network'
          : error.response.data[0].message ? error.response.data[0].message : error.response.data.message;
           return { error, data: null }
        })
);


