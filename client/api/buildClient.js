// Preconfigure axios for our use case in getInitialProps method
import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // getIntialProps is executing on the server
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // getInitalProps is executing in the browser
    return axios.create({}); // we can optionally pass in the baseURL as ''
  }
};

export default buildClient