import './App.css';
import { getIssues } from './helpers/getIssues';
import { useEffect, useState } from 'react';

const App = () => {

  const [issues, setIssue] = useState([])
  const [OriginalIssues, setOriginalIssues] = useState([])
  const [inputValue, setInputValue] = useState({
    value: ''
  })

  const { value } = inputValue


  useEffect(() => {
    handleGetIssues()
  }, [])


  const handleInputChange = (e) => {
    setInputValue({ value: e.target.value })

    if (!e.target.value.length == 0) {
      setIssue(OriginalIssues.filter(issue => (issue.title.includes(e.target.value))))
    }
  }

  const handleGetIssues = (e) => {
    getIssues().then(data => {
      setIssue(data)
      setOriginalIssues(issues)
    })
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleGetIssues}>GET ISSUES</button>
      <div>
        {
          value.length > 0 ?
            issues.map((issue, index) => (
              <ul key={index}>{issue.title}</ul>
            ))
            : <div></div>

        }
      </div>
    </>
  );
}

export default App;
