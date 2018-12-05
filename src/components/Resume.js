import React, { Component } from 'react'
import resume from '../pdf/Will_Vatcher_Resume.pdf'

export class Resume extends Component {
  render() {
    return (
      <div className="modal-container" id='resume-modal'>
        <div onClick={() => this.props.toggleResume()} className="blackground"/>
          <div className="content">
            <h1>Will Vatcher Resume&nbsp;
            <a href={resume} download><small><i className="fa fa-download" /></small></a>
            </h1>
            <h2 id="objective">Objective</h2>

            <p>To be given the opportunity to diligently work as a front end developer at a company where I can
            actively contribute my expertise and life experience, and that will allow me to grow and enhance
            my skills.</p>

            <h2 id="frontenddeveloper">Front end developer</h2>

            <p>Adaptive front-end developer with high expertise in communication and committed to designing
            and building websites that are user-centric, dynamic, and impactful. Ten years of professional guest
            service experience. Fifteen years of high-level instruction and group leadership experience.</p>
            <span><strong>Technical Toolbox</strong></span> 
            <p><strong>Frameworks/ Libraries/ Development:</strong>
            &nbsp;​​React.Js, Redux, Vue.Js, Web3.js, Django, JQuery,
            Bootstrap, Node.Js, Webpack, Yarn, Rest API, AJAX, Firebase, Git, Github, Apollo, GraphQL, Prisma</p>
            <span><strong>Operating Systems:</strong> ​​Linux, Windows, MacOS</span>
            <span><strong>Languages:</strong> ​​HTML5, CSS3, Javascript (ES6), TypeScript, some Python</span>
            <span><strong>Design Tools:</strong> ​​Adobe CC Suite, GIMP, Inkscape, Figma</span>
            <span><strong>Office Tools:</strong> ​​Microsoft Office Suite, Libre Office Suite</span>

            <h2 id="workexperience">Work Experience</h2>

            <p><strong>Veos Apparel - Front End Developer (July 2018 - current)</strong>
            Responsible for the creation and deployment of the Veos Apparel website.
            Built with React and deployed using Netlify.
            Landing site was created as a placeholder during kickstarter campaign.
            Main site created to display all content and add make online ordering possible.
            <strong>Finality Labs - Front End Developer (April 2018 - current)
            </strong> Built the main site for the company from scratch using React. (​https://finalitylabs.io​)
            <strong></strong> Collaborated with engineers, illustrators, animators, social media managers, and the CEO to
            create a user experience that reflects the core values of the company.
            <strong></strong> Worked in an agile environment.
            Created the beta-access site for the companies first game, Eternal Time Heroes
            (​http://eternaltimeheroes.io​) along with my team.
            Sat in on all meetings, regardless of department, to try and contribute and learn as much as
            possible.
            Researched many new topics such as whitepapers for many implementations of Ethereum
            scalability.
            Implement, test, and deploy changes and updates to all company sites.
            <strong>W Hotel San Francisco - Security (2007 - 2009, 2012 - 2018)</strong>
            Provide safety and security to employees, guests, and clientele in the hotel, bar, and event
            spaces.
            First responder to medical, fire, and all other emergency situations.
            Loss prevention and cataloging, storing, releasing lost items utilizing MS Shift software.
            Dedicated shipping and receiving department for all guest and client incoming and outgoing
            packages.</p>

            <h2 id="designprojectsexperience">Design Projects &amp; Experience</h2>

            <p><strong>Spacex Launches (2018)</strong></p>

            <p>Created a React application using GraphQL to query the SpaceX api and display information about rocket launches.</p>

            <p>● Created express server with nodejs and express to run the application in development as well as production.
            ● Deployment through Heroku using custom build scripts</p>

            <p><strong>Brew &amp; Brauts (2017)</strong>
            ● Restaurant was looking for a way to optimize how they advertised their drink menu,
            ○ Staff had to climb a ladder to hand-write changes on a chalkboard hung above the
            bar.
            ○ This was done on a weekly basis and was time consuming, dangerous, and
            disruptive during business hours.
            ● Provided a technology solution by creating an interactive web application that would allow
            staff to update the drink menu on an iPad
            ○ The chalkboard was replaced by a screen that could receive real time updates based
            on changes made on the iPad
            ○ To keep the same theme, the menu was designed to resemble a chalkboard
            <strong>Gluten Free Bikes (2017)</strong>
            ● Created the face of the company, which upheld its playful spirit without sacrificing
            professionalism.
            ● Full logo creation and animation as an added feature.
            ● Full responsive web app creation and deployment.
            <strong>Vatchr Design (2017)</strong>
            ● Multi-faceted process for creating a brand identity.
            ● Creation and adherence to brand throughout body of work.
            ● Full exploration and refinement of 5 different logos.
            ● Making calculated design decisions to best represent the company.
            ● Full responsive web app creation and deployment.</p>

            <p><strong>Matthew Cesca Multimedia (2016)</strong>
            ● Collaborated with the owner and founder to decipher and visually capture the essence of
            what his brand represented.
            ● Created a logo that was effectively both a powerful and lasting impression that reflected the
            client’s body of work.
            ● Guided the creation of the brand’s web presence and assisted with debugging.</p>

            <h2 id="education">Education</h2>

            <p>Sessions College for Professional Design**
            <strong>Degree:</strong> Associates in Web Design (2017)
            <strong>Focus:</strong> ​​ Web Design best practices including WCAG compliance, design theory, modern frameworks,
            and other necessary tools for development.</p>

            <h2 id="hobbiesfunfacts">Hobbies/Fun facts</h2>

            <p>● 3rd degree black belt in traditional Japanese Karate and Brazilian Jiu Jitsu practitioner
            ● Lived in Japan for 6 months and learned basic conversational Japanese
            ● Woodworking and Repurposing/ Upcycling material to create new pieces
            ● General music enthusiast. Played piano for 22 years and guitar for 13 years
            ● Practicing speaking Spanish with anyone who lets me. I’ve learned basic conversational
            Spanish and learning more everyday</p>
          
        </div>
      </div>
    )
  }
}

export default Resume
