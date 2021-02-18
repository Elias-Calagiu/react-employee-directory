import axios from "axios";
const BASEURL = 'https://randomuser.me/api/?inc=name,email,cell,picture&results=10&nat=us';


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
