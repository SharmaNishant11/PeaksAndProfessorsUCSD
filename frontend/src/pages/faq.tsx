import React from 'react'

export default function FaqPage() {
  return (
    <div style={{fontFamily: "Arial, sans-serif", margin: "40px"}}>

      <h1 style={{textAlign: "center", marginBottom: "40px"}}>
        Frequently Asked Questions
      </h1>

      <div className="faq">

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            Do I need to be a good/experienced hiker?
          </summary>
          <p style={{marginTop: "10px"}}>
            Nope! The hikes are beginner-friendly. The focus is more on hanging out with professors and enjoying nature than being an expert hiker.
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            Are you going to get professors from a range of departments?
          </summary>
          <p style={{marginTop: "10px"}}>
            For sure :). We want professors from all across UCSD so each hike brings a new mix of perspectives. Shoot us a DM if you have any professors you would like to see on a hike!!
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            What should I bring on the hikes?
          </summary>
          <p style={{marginTop: "10px"}}>
            Water, comfy shoes, sunscreen, and maybe a snack. We will share a checklist before each hike so you are all set :).
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            When's the next hike going to be?
          </summary>
          <p style={{marginTop: "10px"}}>
            Hike calendar for this Fall coming soon!! Stay tuned!
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            Is there a limit capacity for the hikes?
          </summary>
          <p style={{marginTop: "10px"}}>
            The slots for each hike depend on the number of drivers who sign up to carpool. If the hike is closer to campus (accessible by public transport) then there is NO CAP on the number of attendees.
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            Will I have to pay to come on a hike?
          </summary>
          <p style={{marginTop: "10px"}}>
            There is no cost to join the hikes themselves. If you carpool with us, we will just split gas and parking, but otherwise there is no fee. We will always let you know any costs ahead of time.
          </p>
        </details>

        <details style={{marginBottom: "15px"}}>
          <summary style={{fontSize: "18px", cursor: "pointer"}}>
            How long do the hikes usually last?
          </summary>
          <p style={{marginTop: "10px"}}>
            Most of our hikes will be about 2–3 hours total, including breaks to hang out and chat with professors and reaching the location. We will always share the timing details when we announce each hike :).
          </p>
        </details>

      </div>
    </div>
  )
}
