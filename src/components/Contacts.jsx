import React from 'react'
import './styles/Contacts.scss';

const Contacts = () => {
  return (
    <div className='ContactsWrapper'>
        <div className="ContactsColumns">
          <div className="ContactsLeft">
            <div className="contactBox">
              <p>email</p>
              <span>support@website.com</span>
            </div>
            <div className="contactBox">
              <p>phone</p>
              <span>800-123-456</span>
            </div>
            <div className="contactBox">
              <p>address</p>
              <span>23 Evergreen Street,<br/>
                    San Francisco, California<br/>
                    USA
              </span>
            </div>
          </div>
          <form className="ContactsRight">
              <p>address</p>
              <span>Drop us your message and I'll get back to you as soon as possible.</span>
            <div className="inputsWrapper">
              <div className="inputsWrappL">
                <input placeholder='your name' type="text" /><br />
                <input placeholder='your company' type="text" /><br />
              </div>
              <div className="inputsWrappR">
                <input placeholder='your phone' type="tel" /><br />
                <input placeholder='your email' type="e-mail" /><br />
              </div>
            </div>
            <textarea name="Message" id="message" cols="" rows="" placeholder='your message'></textarea>
            <button >Lets talk</button>
          </form>
        </div>
    </div>
  )
}

export default Contacts