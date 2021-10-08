import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import axios from 'axios';

export default function GitCard() {
  const [state, setState] = useState({
    username: 'LucSedirae',
    following: 0,
    followers: 0,
    repos: 0,
  });

  const getGit = () => {
    axios.get('https://api.github.com/users/lucsedirae').then((response) => {
      setState({
        username: response.data.login,
        following: response.data.following,
        followers: response.data.followers,
        repos: response.data.public_repos,
      });
    });
  };

  useEffect(() => {
    getGit();
  }, []);

  const { username, followers, following, repos } = state;

  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>GitHub Profile </Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>Username: {username}</ListGroup.Item>
          <ListGroup.Item>Following: {following}</ListGroup.Item>
          <ListGroup.Item>Followers: {followers}</ListGroup.Item>
          <ListGroup.Item>Public Repositories: {repos}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
