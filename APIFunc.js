import axios from 'axios';

const APICall = axios.create({
    baseURL: 'http://api.tablighon.ir/api/feed_v2/',
  });

export const APICallFunc = (
    API_Address='',
    API_Method='get',
    API_Header={},
    API_Body={}) =>
{
  
    return new Promise((resolutionFunc,rejectionFunc)=>{
        APICall({
            method:API_Method,
            url:API_Address,
            headers:API_Header,
            data: API_Body,
        })
        .then(response=>{
            resolutionFunc(response);
        })
    })    
}
   
