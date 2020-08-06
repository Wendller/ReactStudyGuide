import React from 'react';
import students from '../../data/students';

export default props => {
  
  const listJSX = students.map(student => {
    return (
      <li key={student.id}>  
        #{student.id} {student.name} - {student.score}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: 'none', textAlign: 'center' }}>
        {listJSX}
      </ul>
    </div>
  );
}