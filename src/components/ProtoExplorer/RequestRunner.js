import React from 'react';

class RequestRunner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: null,
      response: null,
      currentService: null,
      currentFunction: null,
    };
  }

  selectService = (name) => {
    this.setState({
      currentService: name,
      currentFunction: null,
    });
  };

  selectFunction = (name) => {
    this.setState({ currentFunction: name });
  }

  onRequestChange = (ev) => {
    this.setState({request: ev.target.value});
  };

  onRequestSubmit = () => {
    const ServiceClient = (
      this.props.descriptor.services[this.state.currentService]
    );
    const stub = new ServiceClient(
      `${this.props.url.host}:${this.props.url.port}`,
      window.grpc.credentials.createInsecure()
    );
    const call = stub[this.state.currentFunction].bind(stub);
    const json = window.JSON;
    const self = this;

    call(json.parse(this.state.request), (err, response) => {
      console.log(response);
      self.setState({response: json.stringify(response)});
    });
  };

  render() {
    const descriptor = this.props.descriptor;
    const services = Object.keys(descriptor.services);
    const theService = descriptor.services[this.state.currentService];

    return (
      <div className='RequestRunner'>
        <div className='RequestRunner-serviceChooser'>
          <span>Chose service:</span>
          <ul>
          {services.map((name) => (
            <li 
              key={name}
              onClick={() => this.selectService(name)}
            >
              { name === this.state.currentService ? '[x]' : '[ ]' }
              { name }
            </li>
          ))}
          </ul>
        </div>


        {theService 
          ? <div className='RequestRunner-functionChooser'>
              <span>Chose rpc call:</span>
              <ul>
              {Object.keys(theService.service).map((name) => (
                <li 
                  key={name}
                  onClick={() => this.selectFunction(name)}
                >
                  { name === this.state.currentFunction ? '[x]' : '[ ]' }
                  { name }
                </li>
              ))}
              </ul>
            </div>
          : null}

        <div className='RequestRunner-requestInput'>
          <textarea onChange={this.onRequestChange} value={this.state.request} />
          <button onClick={this.onRequestSubmit}>Submit</button>
        </div>

        <div className='RequestRunner-responseOutput'>
          <pre>
            {this.state.response}
          </pre>
        </div>
      </div>
    );
  }
}


export default RequestRunner;
