// js/components/person-list.js
import React from 'react';
import Person from './person';

export default function PersonList() {
    return (
        <div className="person-list">
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
        </div>
    );
}


// alternate syntax
// export default function PersonList() {
//     const people = [];
//     for (let i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// }

// with state
// export default class PersonList extends React.Component {
//     render() {
//         const people = [];
//         for (let i=0; i<5; i++) {
//             people.push(<Person />);
//         }
//         return (
//             <div className="person-list">
//                 {people}
//             </div>
//         );
//     }
// }