import axios from './axios';
import $ from "jquery";
import {failed} from "../actions/actionBase";
const apiEndpoint = '/profile';
export const profile = {
  getProfile: () => {
    return axios.get(apiEndpoint);
  },

  getResume: () => {
  //   $.ajax({
  //     url:'./resume.pdf',
  //     dataType:'pdf',
  //     cache: false,
  //     success: function(data){
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //     }
  //   });
    alert('Hi');
  },

};
