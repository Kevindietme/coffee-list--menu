import { useState } from "react"

export default function Coffees() {
    const [coffeeList, setCoffeeList] = useState()
    const [message, setMessage] = useState('We\'re so glad you\'re here')

    
    const getCoffee = async (type) => {
        setMessage('Loading...')
        setCoffeeList()
        const response = await fetch(`https://api.sampleapis.com/coffee/${type}`)
        const data = await response.json()
        setCoffeeList(data)
    }

    return (
        <main>
            <div className="button-container">
                <button onClick={() => getCoffee('hot')}>Hot</button>
                <button onClick={() => getCoffee('iced')}>Iced</button>
            </div>


    <div>
        <img src="./images/cafeBarista.jpg" alt="A cafe barista in a cozy cafe leaning forward onto a counter with a steaming latte in hand." />
    </div>    


            <div className="coffee-list">
            {!coffeeList
     ? <p className="message">{message}</p>
     : coffeeList.map(coffee => (
         <div key={coffee.id} className="coffeeCard">
            <h2>{coffee.title}</h2>
            <div className="coffeeCardImage" 
                style={{ backgroundImage: `url(${coffee.image})` }}
            />
            
        </div>  
     ))
    }
            </div>
        </main>
    )
}