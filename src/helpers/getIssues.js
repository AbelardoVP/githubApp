
const axios = require('axios').default;



const URL = "https://api.github.com/repos/facebook/react/issues?state=open"

export const getIssues = async () => {
    const { data } = await axios.get(URL)

    console.log("data", data)

    return data;
}