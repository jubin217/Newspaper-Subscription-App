import React from 'react'
import Navbar from './Navbar'

const cardStyle={
  backgroundImage: 'url(https://wallpaperaccess.com/full/1848675.jpg)'
};

const Add = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="row" style={{ marginTop: '75px' }}>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card" style={{color:'lightgreen'}}>
              <div class="card-body" style={cardStyle}>
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Enter Name</b></label>
                    <input type="text" className="form-control" placeholder='Enter Name' />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Enter Phone Number</b></label>
                    <input type="text" className="form-control" placeholder='Enter Ph No' />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"><b>Enter Address</b></label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Enter Pin code</b></label>
                    <input type="text" className="form-control" placeholder='Enter Address' />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Select District</b></label>
                    <select name="" id="" className="form-select">
                      <option value="Select District">Select District</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Ernakulam">Ernakulam</option>
                      <option value="Trivandrum">Trivandrum</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Wayanad">Wayanad</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Kozhikode">Kozhikode</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Kasargod">Kasargod</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Palakkad">Palakkad</option>
                      <option value="Malappuram">Malappuram</option>
                      <option value="Thrissur">Thrissur</option>
                    </select>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Enter Village Office</b></label>
                    <input type="text" className="form-control" placeholder='Enter Village Office' />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label"><b>Enter Email-id</b></label>
                    <input type="text" className="form-control"  placeholder='Enter Email'/>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add

