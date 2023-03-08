import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section class="contact" id="contact">
    <h1 class="heading">contact us </h1>
    <div class="row">
        <img src="http://planetary.s3.amazonaws.com/assets/images/charts-diagrams/2018/20180514_isro-centres-map_f840.png" alt="logo" />

        <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="name" required=""/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="email" required=""/>
            </div>
            <div class="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="number" required=""/>
            </div>
            <input type="submit" value="contact now" class="btn"/>
        </form>

    </div>

</section>
  )
}

export default Contact