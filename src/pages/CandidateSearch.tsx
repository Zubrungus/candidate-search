import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import { Link } from 'react-router-dom';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  });
  const [currentCandidate, setCurrentCandidate] = useState(0);

  //if rejected, simply move to the next candidate
  const reject = () => {
    setCurrentCandidate(currentCandidate + 1);
  }

  //if approved, read local storage and add the current candidate to the array, then save
  const approve = () => {
    const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));

    setCurrentCandidate(currentCandidate + 1);
  }



  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const rawData = await searchGithub(); // Get the list of users
        if (rawData.length === 0) {
          console.error(`No candidates found`);
          return;
        }

        // Fetch detailed data for the first candidate
        const rawCandidate = await searchGithubUser(rawData[currentCandidate].login);

        setCandidate(
          {
            name: rawCandidate.name,
            username: rawCandidate.login,
            location: rawCandidate.location,
            avatar: rawCandidate.avatar_url,
            email: rawCandidate.email,
            html_url: rawCandidate.html_url,
            company: rawCandidate.company,
          },
        );
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    };

    fetchCandidates();
  }, [currentCandidate]);



  return (currentCandidate > 20
    ? <>
      <h1>No more candidates</h1>
      <Link to='/SavedCandidates' > Go to saved candidates</Link>
    </>


    : <>
      <h1>Candidate Search</h1>
      <div className='candidate'>
        <img src={candidate.avatar} alt={'A github avatar'} width={250}></img>
        <h2>{`${candidate.name || "N/A"} (${candidate.username})`}</h2>
        <p>Location: {candidate.location || "N/A"}</p>
        <p>Email: {candidate.email || "N/A"}</p>
        <p>Company: {candidate.company || "N/A"} </p>
        <a href={candidate.html_url}>View github profile</a>
        <div className='choices'>
          <button style={{ background: 'red' }} onClick={reject}>-</button>
          <button style={{ background: 'green' }} onClick={approve}>+</button>
        </div>
      </div>
    </>
  );
}

export default CandidateSearch;
