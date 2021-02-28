import { APICallFunc } from "./APIFunc";

export const GetImageAPI = (hostId='') => { 
    const myPromise =  APICallFunc(`GetFromApp?hostid=${hostId}&Individual=true`,'get',{},{})
    return myPromise
}


