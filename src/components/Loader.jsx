import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ marginTop: "40px", display:"flex", flexDirection:"column", alignItems:"center" }}>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h1 style={{
                color:"white",
                textAlign:"center",
              
            }}>Countries Loading</h1>

        </div>
    )
}

export default Loader