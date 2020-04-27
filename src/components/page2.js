import React from 'react';


class Cards extends React.Component
{

    render()
    {
        const name1= "Ford v Ferrari";
    const name2= "F.R.I.E.N.D.S";
    const cards= [{ name: 'Chandler Bing', description: 'Portrayed by Matthew Perry' },
    { name: 'Monica Geller', description: 'Portrayed by Courteney Cox' },
    { name: 'Joey Tribbiani', description: 'Portrayed by Matt LeBlanc' },
    { name: 'Phoebe Buffay', description: 'Portrayed by Lisa Kudrow' },
    { name: 'Ross Geller', description: 'Portrayed by David Schwimmer' },
    {
    name: 'Rachel Green',
    description: 'Portrayed by Jennifer Aniston'
    },
    {name: 'Ken Miles', description: 'Portrayed by Christian Bale' },
    { name: 'Caroll Shelby', description: 'Portrayed by Matt Damon' }];

    const cardlist= cards.map((cards) =>
    <div class="w3-card-4">
        <h4><b> {cards.name} </b></h4>
        <p>{cards.description} </p>
    </div>);
        return(
            <div>
                <h2>{name1}</h2>
                <h3>{name2}</h3>
                <u1>{cardlist}</u1>
            </div>
        )
    }
}
  
 export default Cards
