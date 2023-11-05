import axios from "axios";

const getLatestRepos = async() => {
  try{
    const username = "dan-lee76";

    const res = await axios.get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);

    return res.data.items.splice(0,6);
  }
  catch (e) {
    console.log(e);

  }
}


export default getLatestRepos;