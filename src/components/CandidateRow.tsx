interface CandidateRowProps {
    avatar: string;
    name?: string;
    username: string;
    location?: string;
    email?: string;
    company?: string;
}

const CandidateRow = (props: CandidateRowProps) => {
    return (
        <>
            <tr>
                <td key={1}><img src={props.avatar} alt={'A github avatar'} width={100}></img></td>
                <td key={2}>{props.name} ({props.username})</td>
                <td key={3}>{props.location}</td>
                <td key={4}>{props.email}</td>
                <td key={5}>{props.company}</td>
            </tr>
        </>
    )
};

export default CandidateRow;