import React, { useState } from 'react';

import data from './data';
import List from './List';
function App() {
    const [people, setPeople] = useState(data);
    const clearPerson = () => {
        setPeople((people) => {
            return [];
        });
    };
    return (
        <main>
            <section className='container'>
                <h3>{people.length} Birthday Today</h3>

                <List people={people}></List>
                <button onClick={() => clearPerson()}>Clear All</button>
            </section>
        </main>
    );
}

export default App;
