import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';


function advanceCandidate(){

}


//retrive list of candidates
const rawData = await searchGithub();
let rawCandidate = await searchGithubUser(rawData[0].login)

let candidate: Candidate = {
  name: rawCandidate.name,
  username: rawCandidate.login,
  location: rawCandidate.location,
  avatar: rawCandidate.avatar_url,
  email: rawCandidate,
  html_url: rawCandidate,
  company: rawCandidate,
}



const CandidateSearch = () => {

  return(
  <h1>Candidate Search</h1>
  



  );
};



export default CandidateSearch;
