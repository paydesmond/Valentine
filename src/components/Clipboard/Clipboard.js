import React from 'react';
import  CopyToClipboard  from 'react-copy-to-clipboard';

class Clipboard extends React.Component {
  render() {
    return (
      <div className='url-link'>
        <CopyToClipboard text={this.props.linkText}>
          <div>
          <span className='link'>{this.props.linkText} <span className='copy'>Click To Copy Link</span></span>
          </div>
        </CopyToClipboard>
      </div>
    );
  }
}

export default Clipboard;
