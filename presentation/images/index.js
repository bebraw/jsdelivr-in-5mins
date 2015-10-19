import _ from 'lodash';

export default _.mapValues({
  network: require('./network.png')
}, (v) => v.replace('/', ''));
