import axios  from "axios";

const baseURL = 'https://api.github.com';
const baseUrlRepos = `${baseURL}/repos/FelipeFVieira/pulumi-iac`;

const token = ''

const githubApiRepos = axios.create({
  baseURL: baseUrlRepos,
  timeout: 10000, 
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});


export {githubApiRepos};
 