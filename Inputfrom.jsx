import { useState, useEffect } from 'react'
import API_URL from '../../serverapi/api'
function from() {
    const [search, setsearch] = useState('')
    const [getweather, setweather] = useState({})

    const searchPressed = () => {
        fetch(`${API_URL.base}current.json?key=4bb3f83814e04577b9783627231709&q=${search}=no${API_URL.key}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setweather(result)
            })
    }
    return (
        <div className="app">
            <div className="app-header">
                <h3>weather map</h3>
                <div>
                    <form>
                        <input type="text" placeholder='search'
                            onChange={(e) => setsearch(e.target.value)}
                        />
                    </form>
                    <button onClick={searchPressed}>search</button>
                </div>
                <p>NAME: {getweather?.location?.name}</p>
                <p>COUNTRY: {getweather?.location?.country}</p>
                <p>REGION: {getweather?.location?.region}</p>
                <p>TEXT: {getweather?.current?.condition?.text}</p>
                <p>WIND_DEGREE: {getweather?.current?.wind_degree}</p>
                <p>WIND_KPH: {getweather?.current?.wind_kph}</p>
                <p>TEMPERATURE: {getweather?.current?.temp_c}</p>
                <p>ICON:
                    <img src={getweather?.current?.condition.icon} alt="" />
                </p>
            </div>
        </div>
    )
}

export default from