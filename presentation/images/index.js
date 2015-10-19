import _ from 'lodash';

export default _.mapValues({
  network: require('./network.png'),
  sites: require('./sites.png')
}, (v) => v.replace('/', ''));
