import CandidateRow from "../components/CandidateRow.tsx";
import Candidate from '../interfaces/Candidate.interface.tsx';

const candidateData: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]') as Candidate[];

const SavedCandidates = () => {
  const candidateElements: JSX.Element[] = candidateData.map(candidate => (
    <CandidateRow 
      avatar={candidate.avatar} 
      name={candidate.name} 
      username={candidate.username} 
      location={candidate.location} 
      email={candidate.email} 
      company={candidate.company}
    />
  ));

  return (candidateData.length < 1
    ? <>
      <h1>No saved candidates</h1>
    </>

    : <>
      <h1>Saved candidates</h1>
      <table>
        <thead>
          <tr>
            <th key={1}>Image</th>
            <th key={2}>Name</th>
            <th key={3}>Location</th>
            <th key={4}>Email</th>
            <th key={5}>Company</th>
          </tr>
        </thead>

        <tbody>
          {candidateElements}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
