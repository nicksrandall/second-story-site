import React from 'react'
import { Link } from 'gatsby'

import Appt from '../components/Appt.js'
import pic01 from '../images/lisa-crop.jpeg'
import pic02 from '../images/couple.jpeg'
import pic03 from '../images/mom-and-son-optimized.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Lisa Randall is a Licensed Clinical Social Worker who enjoys
            connecting with her clients and helping them to see themselves from
            a new perspective. She sees clients with a large range of
            challenges, including depression, anxiety, and addiction. She
            counsels adults, teens, and children, male and female; and
            offers family counseling designed to increase mutual understanding
            and unity within the family.
          </p>
          <p>
            Lisa has a keen and genuine interest in people and their "stories.”
            She believes that within each person lies a powerful, resilient
            spirit regardless of life’s circumstances. She helps clients to see
            that self- awareness and self-compassion are important elements in
            the healing process.
          </p>
          <p>
            In addition to traditional therapeutic techniques including
            Dialectical Behavioral Therapy and Client centered therapy, Lisa
            incorporates mindfulness, relaxation techniques, and inner
            child work in her practice.
          </p>
          <p>
            Lisa also facilitates self-discovery groups for women to help
            identify issues and to increase in self-awareness, as well as foster
            connection and empathy among group members.
          </p>
          <p>
            Lisa is a compassionate and non-judgmental therapist who sees
            herself not as the expert, but as the observer. By empowering
            clients to be in charge of their lives, Lisa finds that clients
            learn coping skills for dealing not only with current crises, but
            future stress as well.
          </p>
          <span className="image main no-tint small">
            <img src={pic01} alt="" />
          </span>
          <Appt />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3 className="minor">EFT for Couples</h3>
          <p>
            As an emotionally focused couples therapist, Lisa’s approach is
            rooted in attachment theory. She will assist her clients to become
            fully aware of unrecognized, unshared, connective primary emotions
            and reactive, disconnecting secondary emotions. She helps couples
            cultivate greater awareness and acceptance of emotion and also
            teaches each partner to express greater empathy for each other.
          </p>
          <h3 className="minor">EMDR for Trauma</h3>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a
            psychotherapy that enables people to heal from the symptoms and
            emotional distress that are the result of disturbing life
            experiences. Repeated studies show that by using EMDR therapy people
            can experience the benefits of psychotherapy that once took years to
            make a difference.
          </p>
          <h3 className="minor">DBT for Emotion Regulation</h3>
          <p>
            Dialectical behavior therapy provides clients with new skills to
            manage painful emotions and decrease conflict in relationships.
          </p>
          <Appt />
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rates & Insurance</h2>
          <h3 className="minor">Rate</h3>
          <p>
            $125 for a 50 minute session.  Longer sessions are also available
            and may especially benefit couples.
          </p>
          <h3 className="minor">Insurance</h3>
          <p>
            Although we are NOT "IN-NETWORK" for any insurance plans, services
            may be covered in full or in part by your health insurance or
            employee benefit plan. Please check your coverage carefully by
            asking the following questions:
          </p>
          <ul>
            <li>
              Do I have mental health insurance benefits for out of network
              services?
            </li>
            <li>What is my deductible and has it been met?</li>
            <li>How many sessions per year does my health insurance cover?</li>
            <li>What is the coverage amount per therapy session?</li>
            <li>Is approval required from my primary care physician?</li>
          </ul>

          <h3 className="minor">Payment</h3>
          <p>Cash, check, debit/credit are accepted for payment.</p>
          <h3 className="minor">Cancellation Policy</h3>
          <p>
            If you do not show up for your scheduled therapy appointment, and
            you have not notified us at least 24 hours in advance, you will be
            required to pay a $50 no-show fee.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image main no-tint">
            <img src={pic03} alt="" />
          </span>
          <Appt />
          <div className="content__container">
            <div className="row">
              <div className="column">
                <h3>Address</h3>
                <p>
                  <a href="https://www.google.com/maps/place/4320+E+Brown+Rd,+Mesa,+AZ+85205">
                    Lisa Randall, LCSW
                    <br />
                    4320 E. Brown Road
                    <br />
                    Mesa, AZ 85205
                  </a>
                </p>
              </div>
              <div className="column">
                <h3>Phone</h3>
                <p>
                  <a href="tel:4806888282">(480) 688-8282</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <h3>Email</h3>
                <p>
                  <a href="mailto:lisarandalltherapy@gmail.com">
                    LisaRandallTherapy@gmail.com
                  </a>
                </p>
              </div>
              <div className="column">
                <h3>Social</h3>
                <ul className="icons">
                  <li>
                    <a
                      href="https://www.facebook.com/lisarandallLMSW"
                      className="icon fa-facebook"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lisarandalltherapy"
                      className="icon fa-instagram"
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

export default Main
