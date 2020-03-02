axios.get('https://api.github.com/users/Diloan')
    .then(function(response){
        //console.log(response.data.avatar_url);
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

    