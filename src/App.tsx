import React from 'react';
import styled from 'styled-components';
import useAllPosts from './libs/hooks/useAllPosts';

function App() {
  const { data, loading } = useAllPosts();

  if (loading) return <h3>Loading...</h3>;

  return (
    <Container>
      <h2>Test</h2>

      <ListPosts>
        {data &&
          data.length > 0 &&
          data.map((post) => <li key={post.id}>{post.title}</li>)}
      </ListPosts>
    </Container>
  );
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;

const ListPosts = styled.ul``;

export default App;
