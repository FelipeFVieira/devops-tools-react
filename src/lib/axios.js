import axios  from "axios";

const baseURL = 'https://api.github.com';
const baseUrlRepos = `${baseURL}/repos/FelipeFVieira/pulumi-iac`;

const token = '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'

const githubApiRepos = axios.create({
  baseURL: baseUrlRepos,
  timeout: 10000, 
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});


export {githubApiRepos};
 