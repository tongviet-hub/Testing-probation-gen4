import React from 'react'
import './Objectives.css'

function Objectives() {
  const objectives = [
    {
      number: '01',
      title: 'Addressing the lack of practical experience',
      description: 'Provide opportunities to participate in real projects, enabling users to acquire hands-on experience, build complete products, and receive certifications to enhance their professional portfolios—thereby improving their competitiveness in the job market.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Bridging businesses and young talent',
      description: 'Help businesses access young, talented individuals at low costs, while allowing them to test their ideas through short-term projects and identify potential candidates for long-term positions.',
      icon: '🤝'
    },
    {
      number: '03',
      title: 'Integrating AI to optimize user experience',
      description: 'Utilize AI to analyze user skills and recommend suitable projects, as well as evaluate the feasibility of projects before publishing, ensuring quality and learning effectiveness.',
      icon: '🤖'
    },
    {
      number: '04',
      title: 'Building a sustainable community',
      description: 'Through gamification (points, badges, and rankings), community forums, workshops, and networking features, encourage users to stay active, improve soft skills, and expand their professional networks.',
      icon: '🌟'
    },
    {
      number: '05',
      title: 'Developing a feasible MVP',
      description: 'Build an MVP with core functionalities such as user registration, rule-based matching, project management, and feedback systems to validate the concept and prepare for future scaling.',
      icon: '🚀'
    }
  ]

  return (
    <section id="objectives" className="objectives-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Research Objectives</span>
          <h2>Our Mission & Goals</h2>
          <p>Five key objectives driving the Skill Bridge platform</p>
        </div>

        <div className="objectives-grid">
          {objectives.map((obj, index) => (
            <div key={index} className="objective-card">
              <div className="objective-header">
                <span className="objective-number">{obj.number}</span>
                <span className="objective-icon">{obj.icon}</span>
              </div>
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objectives