const { async } = require('abc');
const axiosRequest = require('axios');

// axiosRequest
//     .get('https://httpstat.us/404')
//     .then(response => {
//         console.log(`You could ${response.data.activity}`);
//     })
//     .catch(error => {
//         console.error(`ERROR! ${error}`);
//     });
// console.log('why am I here?')

async function getActivity() {
    try {
        // let response = await axiosRequest.get('https://boredapi.com/api/activity')
        let response = await axiosRequest.get('https://httpstat.us/500')
        console.log(`You could ${response.data.activity}`)
    } catch (error) {
        console.error(`ERROR! ${error}`)
    }
    
}

getActivity()
