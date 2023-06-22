import React from 'react';
import { createRoot } from 'react-dom/client';

const users = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];

function List(props) {
  return (
    <div style={styles.container}>
      {users.map((item) => (
        <p style={styles.title}>
          {item.id}. {item.name}
        </p>
      ))}
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <p style={styles.title}>User names:</p>
      <List item={users} />
      <div></div>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
