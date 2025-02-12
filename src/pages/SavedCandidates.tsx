import CandidateRow from "../components/CandidateRow";
import Candidate from '../interfaces/Candidate.interface';

const candidateData: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');

const SavedCandidates = () => {
  

for(let i = 0; i < candidateData.length; i++){

}


  return (candidateData.length < 1
    ? <>
      <h1>No saved candidates</h1>
    </>

    : <>
      <h1>Saved candidates</h1>
      
    </>
  );
};

export default SavedCandidates;
